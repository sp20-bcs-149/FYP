
<h2 align="center">
  React Native Shimmer Loading
</h2>

<h5 align="center">
Shimmer Loading for both IOS and Android in Reanimated
</h5>

## Get Started

### Installation

`npm i react-native-shimmer-loading --save`

or

`yarn add react-native-shimmer-loading`


### Usage

#### Simple

For `react-native-linear-gradient`
```jsx
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-loading'

...

<ShimmerPlaceHolder
  LinearGradient={LinearGradient}
/>
```

### Props

| Prop                         | Description                                                                                            | Type      | Default                                           |
| ---------------------------- | ------------------------------------------------------------------------------------------------------ | --------- | ------------------------------------------------- |
| **`LinearGradient`**         | Linear Gradient components ('react-native-linear-gradient' or 'expo-linear-gradient')                  | Component | undefined                                         |
| **`visible`**                | Visible child components                                                                               | boolean   | false                                             |
| **`style`**                  | Container Style                                                                                        | Style     | `{backgroundColor: '#ebebeb',overflow: 'hidden'}` |
| **`shimmerStyle`**           | Shimmer Style only                                                                                     | Style     | {}                                                |
| **`contentStyle`**           | Content Style when visible                                                                             | Style     | {}                                                |
| **`duration`**               | Duration of shimmer over a row                                                                         | number    | 1000                                              |
| **`reverseLoop`**            | Direction of loop                                                                                      | number    | true                                              |
| **`shimmerWidthPercent`**    | Percent of shimmer width                                                                               | number    | 1.0                                               |
| **`isReversed`**             | Reverse direction of animation                                                                         | boolean   | `false`                                           |
| **`shimmerColors`**          | Colors of the shimmer.                                                                                 | string[]  | *['#ebebeb', '#c5c5c5', '#ebebeb']*                 |
| **`containerProps`**         | Props passed to the outermost View                                                                     | ViewProps | undefined                                         |
| **`shimmerContainerProps`**  | Props passed to the View which contains the loading animation                                          | ViewProps | undefined                                         |
| **`childrenContainerProps`** | Props passed to the View which contains the children                                                   | ViewProps | undefined                                         |


### Contribute

Welcome help me to build this awesome lib.

### License

[MIT](https://github.com/tmhoang1904/react-native-shimmer-loading/blob/master/LICENSE)