
<h2 align="center">
  Expo Shimmer Placeholder
</h2>
<p align="center">
  <a href="https://www.npmjs.com/package/expo-shimmer-placeholder"><img src="https://img.shields.io/npm/v/react-native-shimmer-placeholder.svg?style=flat-square"></a>
  <a href="https://www.npmjs.com/package/expo-shimmer-placeholder"><img src="https://img.shields.io/npm/dm/react-native-shimmer-placeholder.svg?style=flat-square"></a>
  <a href="https://packagephobia.now.sh/badge?p=react-native-shimmer-placeholder@1.0.29"><img src="https://packagephobia.now.sh/badge?p=react-native-shimmer-placeholder@1.0.29"></a>
</p>
<h5 align="center">
Placeholder for both IOS and Android
</h5>

<p align="center">
<img src="https://github.com/tomzaku/react-native-shimmer-placeholder/blob/master/example.gif?raw=true">
</p>
<!-- <p align="center">
<img src="https://github.com/tomzaku/react-native-shimmer-placeholder/blob/master/example2.gif?raw=true">
</p> -->

## Get Started

Fork of https://www.npmjs.com/package/react-native-shimmer-loading to only require expo-linear-gradient as react-native-linear-gradient was causing issues

### Installation

`npm i expo-shimmer-placeholder --save`

or

`yarn add expo-shimmer-placeholder`


### Usage

#### Simple
``` jsx
import { createShimmerPlaceHolder } from 'expo-shimmer-placeholder'
import { LinearGradient } from 'expo-linear-gradient'
const ShimmerPlaceHolder = createShimmerPlaceHolder(LinearGradient)

<ShimmerPlaceHolder />
<ShimmerPlaceHolder visible={isFetched}>
  <Text>
    Wow, awesome here.
  </Text>
</ShimmerPlaceHolder>
```

#### Connect more components

<p align="center">
<img src="https://github.com/tomzaku/react-native-shimmer-placeholder/blob/master/facebook-load-data.gif?raw=true">
</p>


More Detail see [this](https://github.com/tomzaku/react-native-shimmer-placeholder/blob/master/example/App.js)

### Props

| Prop                         | Description                                                                                            | Type      | Default                                           |
| ---------------------------- | ------------------------------------------------------------------------------------------------------ | --------- | ------------------------------------------------- |
| **`LinearGradient`**         | Linear Gradient components ('expo-linear-gradient')                                                    | Component | undefined                                         |
| **`visible`**                | Visible child components                                                                               | boolean   | false                                             |
| **`style`**                  | Container Style                                                                                        | Style     | `{backgroundColor: '#ebebeb',overflow: 'hidden'}` |
| **`shimmerStyle`**           | Shimmer Style only                                                                                     | Style     | {}                                                |
| **`contentStyle`**           | Content Style when visible                                                                             | Style     | {}                                                |
| **`location`**               | Locations of shimmer                                                                                   | number[]  | *[0.3, 0.5, 0.7]*                                   |
| **`width`**                  | Width of row                                                                                           | number    | 200                                               |
| **`duration`**               | Duration of shimmer over a row                                                                         | number    | 1000                                              |
| **`height`**                 | Height of row                                                                                          | number    | 15                                                |
| **`shimmerWidthPercent`**    | Percent of shimmer width                                                                               | number    | 1.0                                               |
| **`isReversed`**             | Reverse direction of animation                                                                         | boolean   | `false`                                           |
| **`stopAutoRun`**            | Stop running shimmer animation at beginning                                                            | boolean   | `false`                                           |
| **`isInteraction`**          | Defines whether or not the shimmer animation creates an interaction handle on the `InteractionManager` | boolean   | `true`                                            |
| **`shimmerColors`**          | Colors of the shimmer.                                                                                 | string[]  | *['#ebebeb', '#c5c5c5', '#ebebeb']*                 |
| **`containerProps`**         | Props passed to the outermost View                                                                     | ViewProps | undefined                                         |
| **`shimmerContainerProps`**  | Props passed to the View which contains the loading animation                                          | ViewProps | undefined                                         |
| **`childrenContainerProps`** | Props passed to the View which contains the children                                                   | ViewProps | undefined                                         |

### Methods
| Method            | Description                 | Type     |
| ----------------- | --------------------------- | -------- |
| **`getAnimated`** | get Animated of Placeholder | Animated |

### Helpers

`createShimmerPlaceHolder`



### Contribute

Welcome help me to build this awesome lib.

### License

[MIT](https://github.com/tomzaku/react-native-shimmer-placeholder/blob/master/LICENSE)
