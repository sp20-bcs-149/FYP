declare module 'expo-shimmer-placeholder' {

    import * as React from 'react';
    import { Animated, ViewProps } from 'react-native';

    export interface ShimmerPlaceHolderProps {
        width?: number | string;
        height?: number | string;
        shimmerWidthPercent?: number;
        duration?: number;
        delay?: number;
        shimmerColors?: string[];
        location?: number[];
        isReversed?: boolean;
        stopAutoRun?: boolean;
        visible?: boolean;
        children?: any;
        style?: any;
        shimmerStyle?: any;
        contentStyle?: any;
        isInteraction?: boolean;
        LinearGradient?: React.ComponentClass<any>;
        containerProps?: ViewProps
        shimmerContainerProps?: ViewProps
        childrenContainerProps?: ViewProps
    }

    class ShimmerPlaceHolder extends React.Component<ShimmerPlaceHolderProps, any> {
        getAnimated(): Animated.CompositeAnimation;
    }

    export const createShimmerPlaceHolder = (LinearGradient?: React.ComponentClass<any>) => ShimmerPlaceHolder

    export default ShimmerPlaceHolder
}
