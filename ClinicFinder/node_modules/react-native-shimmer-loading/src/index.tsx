import React, { useEffect } from "react";
import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import { withPause } from "react-native-redash";

interface IProps {
    reverseLoop?: boolean;
    style?: ViewStyle;
    contentStyle?: ViewStyle;
    shimmerStyle?: ViewStyle;
    shimmerColors?: string[];
    isReversed?: boolean;
    visible: boolean;
    location?: number[];
    LinearGradient: any;
    children: React.ReactChildren | React.ReactChild;
    shimmerWidthPercent?: number;
    containerProps?: ViewProps;
    shimmerContainerProps?: ViewProps;
    childrenContainerProps?: ViewProps;
}

const getOutputRange = (width: number, isReversed: boolean) => {
    'worklet';
    return isReversed ? [width, -width] : [-width, width];
}

const ShimmerPlaceholder = React.memo((props: IProps) => {
    const { reverseLoop = true } = props;
    const animatedValue = useSharedValue<number>(-1);
    const paused = useSharedValue(props.visible);

    useEffect(() => {
        paused.value = props.visible;
    }, [props.visible, paused]);

    useEffect(() => {
        animatedValue.value = -1;
        animatedValue.value = withPause(
            withRepeat(
                withTiming(1,
                    {
                        duration: 1000,
                        easing: Easing.ease
                    }
                ),
                -1,
                reverseLoop
            ),
            paused
        );
    }, [animatedValue, paused, reverseLoop]);

    return (
        <BasedShimmerPlaceholder
            {...props}
            animatedValue={animatedValue}
        />
    );
});

interface IBasedProps extends IProps {
    animatedValue: Animated.SharedValue<number | null>
}

const BasedShimmerPlaceholder = (props: IBasedProps) => {
    const {
        shimmerColors = ["#ebebeb", "#c5c5c5", "#ebebeb"],
        isReversed = false,
        visible,
        location = [0.3, 0.5, 0.7],
        style,
        contentStyle,
        shimmerStyle,
        LinearGradient = View,
        children,
        animatedValue,
        shimmerWidthPercent = 1,
        containerProps,
        shimmerContainerProps,
        childrenContainerProps,
    } = props;

    const width = parseFloat(`${shimmerStyle?.width ?? 0}`);

    const animatedStyle = useAnimatedStyle(() => {
        const linearTranslate = interpolate(
            animatedValue.value ?? -1,
            [-1, 1],
            getOutputRange(width, isReversed),
        );
        return {
            transform: [
                { translateX: linearTranslate }
            ]
        }
    });



    return (
        <View
            style={[
                styles.container,
                !visible && shimmerStyle,
                style,
            ]}
            {...containerProps}
        >
            {/* Force render children to restrict rendering twice */}
            <View
                style={[
                    !visible && { width: 0, height: 0, opacity: 0 },
                    visible && contentStyle,
                ]}
                {...childrenContainerProps}
            >
                {children}
            </View>
            {!visible && (
                <View
                    style={[styles.shimmer, { backgroundColor: shimmerColors[0] }]}
                    {...shimmerContainerProps}
                >
                    <Animated.View
                        style={[styles.shimmer, animatedStyle]}
                    >
                        <LinearGradient
                            colors={shimmerColors}
                            style={{ flex: 1, width: width * shimmerWidthPercent }}
                            start={{
                                x: -1,
                                y: 0.5,
                            }}
                            end={{
                                x: 2,
                                y: 0.5,
                            }}
                            locations={location}
                        />
                    </Animated.View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        overflow: "hidden",
    },
    shimmer: {
        flex: 1,
    }
});

export default ShimmerPlaceholder;
