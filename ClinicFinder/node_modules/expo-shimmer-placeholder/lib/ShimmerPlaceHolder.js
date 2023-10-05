import React, { PureComponent } from "react";
import { Animated, Platform, StyleSheet, View } from "react-native";

const getOutputRange = (width, isReversed) =>
  isReversed ? [width, -width] : [-width, width];

class ShimmerPlaceHolder extends PureComponent {
  state = {
    beginShimmerPosition: new Animated.Value(-1),
  };
  getAnimated = () => {
    const { delay, duration, isInteraction } = this.props;
    return Animated.loop(
      Animated.timing(this.state.beginShimmerPosition, {
        toValue: 1,
        delay,
        duration,
        useNativeDriver: Platform.OS !== "web",
        isInteraction,
      })
    );
  };
  animatedValue = this.getAnimated();

  render() {
    return (
      <BasedShimmerPlaceHolder
        {...this.props}
        animatedValue={this.animatedValue}
        beginShimmerPosition={this.state.beginShimmerPosition}
      />
    );
  }
}

ShimmerPlaceHolder.defaultProps = {
  delay: 0,
  duration: 1000,
  isInteraction: true,
};

const BasedShimmerPlaceHolder = (props) => {
  const {
    width = 200,
    height = 15,
    shimmerColors = ["#ebebeb", "#c5c5c5", "#ebebeb"],
    isReversed = false,
    stopAutoRun = false,
    visible,
    location = [0.3, 0.5, 0.7],
    style,
    contentStyle,
    shimmerStyle,
    LinearGradient = View,
    children,
    animatedValue,
    beginShimmerPosition,
    shimmerWidthPercent = 1,
    containerProps,
    shimmerContainerProps,
    childrenContainerProps,
  } = props;

  const linearTranslate = beginShimmerPosition.interpolate({
    inputRange: [-1, 1],
    outputRange: getOutputRange(width, isReversed),
  });

  React.useEffect(() => {
    if (!stopAutoRun) {
      animatedValue.start();
    }
    return () => {
      animatedValue.stop();
    };
  }, [stopAutoRun]);

  React.useEffect(() => {
    if (visible) {
      animatedValue.stop();
    }
    if (!visible && !stopAutoRun) {
      animatedValue.start();
    }
  }, [visible, stopAutoRun]);

  return (
    <View
      style={[
        !visible && { height, width },
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
          style={{ flex: 1, backgroundColor: shimmerColors[0] }}
          {...shimmerContainerProps}
        >
          <Animated.View
            style={{ flex: 1, transform: [{ translateX: linearTranslate }] }}
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
});


export const createShimmerPlaceHolder = (LinearGradient = View) =>
  React.forwardRef((props, ref) => (
    <ShimmerPlaceHolder LinearGradient={LinearGradient} ref={ref} {...props} />
  ));

export default ShimmerPlaceHolder;
