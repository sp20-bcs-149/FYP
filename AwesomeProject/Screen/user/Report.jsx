import { View, Text, Dimensions, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
// import PieChart from 'react-native-pie-chart'

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#fff",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) =>
    `#329998${Math.round(opacity * 255)
      .toString(16)
      .toUpperCase()}`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const data = {
  labels: ["BCG", "Polio", "DTP", "Measles", "Flu", "Rabbies"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

const data2 = {
  labels: ["BCG", "Polio", "DTP", "Measles"], // optional
  data: [0.4, 0.6, 0.8, 0.5],
};

const colorScheme = [
  "#FF6C40", // Reddish-Orange
  "#FFB85D", // Orange
  "#FFDE7D", // Light Orange
  "#6FCF97", // Green
  "#4CB3A2", // Teal
  "#6B68D8", // Purple
  "#A85CBF", // Violet
  "#FF76B9", // Pink
  "#85A1E0", // Light Blue
  "#F6E3DC", // Light Beige
  // Add more colors as needed
];


const data3 = [
  {
    name: "Polio",
    consumption: 20, // Hypothetical value in millions for Polio
    color: "#fbd203",
    legendFontColor: "#fbd203",
    legendFontSize: 15,
  },
  {
    name: "DTP",
    consumption: 20, // Hypothetical value in millions for DTP
    color: "#ffb300",
    legendFontColor: "#ffb300",
    legendFontSize: 15,
  },
  {
    name: "HEP A",
    consumption: 20, // Hypothetical value in millions for HEP A
    color: "#ff9100",
    legendFontColor: "#ff9100",
    legendFontSize: 15,
  },
  {
    name: "Hep B",
    consumption: 20, // Hypothetical value in millions for Hep B
    color: "#ff6c00",
    legendFontColor: "#ff6c00",
    legendFontSize: 15,
  },
  {
    name: "Flu",
    consumption: 20, // Hypothetical value in millions for Flu
    color: "#ff3c00",
    legendFontColor: "#ff3c00",
    legendFontSize: 15,
  },
];

const Charts = () => {


    return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView style={{ flex: 1, marginTop: 50 }}>
        <View>
          <Text>Fields</Text>
        </View>

        <Text style={{ fontSize: 20, fontWeight: "600" }}>
          Bar Progress Ring Chart
        </Text>

        {/* <PieChart
            data={data3}
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.45}
            coverFill={'#FFF'}
              chartConfig={chartConfig}
            accessor={"consumption"}
            paddingLeft={"15"}
            style={{marginBottom: 20}}


        //   data={data3}
        //   width={screenWidth}
        //   height={250}
        //   chartConfig={chartConfig}
        //   accessor={"consumption"}
        //   backgroundColor={"transparent"}
        //   center={[0, 50]}
        //   absolute
        /> */}

        <PieChart
          data={data3}
          width={screenWidth}
          height={250}
          chartConfig={chartConfig}
          accessor={"consumption"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
        //   center={[0, 30]}
          absolute
            style={{marginBottom: 20}}
        />


        {/* <Text style={{ fontSize: 20, fontWeight: "600", marginTop: 20 }}>
          Line Chart Analysis of Clinic:
        </Text>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={screenWidth} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#f0f8ff",
            backgroundGradientFrom: "#329998",
            backgroundGradientTo: "#e0ffff",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#fff",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
            alignSelf: "center",
            //   width: 20
          }}
        /> */}




        {/* <Text style={{ fontSize: 20, fontWeight: "600", marginTop: 20 }}>
          Bar Chart
        </Text>
        <BarChart
          data={data}
          width={screenWidth}
          height={250}
          chartConfig={{
            backgroundGradientFrom: "#329998",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#fff",
            backgroundGradientToOpacity: 5,
            color: (opacity = 1) =>
              `#329998${Math.round(opacity * 255)
                .toString(16)
                .toUpperCase()}`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false,
          }}
          style={{ alignSelf: "center", borderRadius: 10 }}
        /> */}

      </SafeAreaView>
    </ScrollView>
  );
};


export default Charts;