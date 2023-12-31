import { View, Text, Dimensions,Button , SafeAreaView, ScrollView,StyleSheet,TouchableOpacity } from "react-native";
import React ,{useState,useEffect}from "react";
import { Dropdown } from 'react-native-element-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
// import PieChart from 'react-native-pie-chart'
import axios from "axios";
import myURL from "../../services/myurls";

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


const specificPeriod = [
  { label: 'Year', value: 'Year' },
  { label: 'Month', value: 'Month' },
  { label: 'Week', value: 'Week' },
  { label: 'Day', value: 'Day' },
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
import { useRoute } from "@react-navigation/native";




const ReportChartsAdmin = () => {
  // const route = useRoute();
  // let Token_id = route.params?.token;


  const [periodValue, setPeriodValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [fetch_data, setData] = useState([]);
  const [AllClinic, setAllClinic] = useState([]);

  const [bcg,setBcg] = useState(0);
  const [polio,setPolio] = useState(0);
  const [dpt,setDpt] = useState(0);
  const [Measles,setMeasles] = useState(0);
  const [Flu,setFlu] = useState(0);
  const [Rabbies,setRabbies] = useState(0);
  const [other,setOther] = useState(0);
  const [alldataclinic,setAlldataclinic] = useState([]);
  const matchCounts = [];

  const [selectedName, setSelectedName] = useState(null);
  const [selected_id, setSelectedId] = useState(null);
  const [Token_id, setToken_id] = useState("652526817e2e6e5e19dcd0a2");

    const [datasets, setDatasets] = useState([
    {
      data: [bcg, polio, 40, 30, 20, other],
    },
  ]);

  useEffect(() => {
    Alldataclinic();
    fetchDataClinicVaccines();
    fetchData();

    },[]);

  useEffect(()=>{
      getReportValue();
  },[fetch_data])
    
    const peroid = (item) => {
      console.log(" CALLED +++++++> " + item);
      if(item == "Year"){
        fetchDataYear();
      }
      if(item == "Month"){
        fetchData();
      }
      if(item == "Week"){
        fetchDataWeek();
      }
      if(item == "Day"){
        fetchDataDay();
      }
      getReportValue();
    }


    const Alldataclinic = async () => {
      try {
        const response = await axios.get(myURL + `/routes/Clinic/clinicProfile/AllClinic`);
        setAlldataclinic(response.data);
        console.log("============>REPORT DATA alldataclinic: " + JSON.stringify(response.data));

      } catch (error) {
        console.error(error);
      }
    };


    const fetchDataClinicVaccines = async () => {
      try {
        const response = await axios.get(myURL + `/clinic/VaccineRecord/my_ID?my_ID=${Token_id}`);
        setAllClinic(response.data);
        console.log("============>REPORT DATA: " + JSON.stringify(response.data));

      } catch (error) {
        console.error(error);
      }
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(myURL + `/user/scheduleAppointment/report/month?clinic_my_ID=${Token_id}`);
        setData(response.data);
        console.log("============>REPORT DATA: " + JSON.stringify(response.data));

      } catch (error) {
        console.error(error);
      }
    };
    const fetchDataDay = async () => {
      try {
        const response = await axios.get(myURL + `/user/scheduleAppointment/report/day?clinic_my_ID=${Token_id}`);
        setData(response.data);
        console.log("============>REPORT DATA: " + JSON.stringify(response.data));

      } catch (error) {
        console.error(error);
      }
    };
    const fetchDataWeek = async () => {
      try {
        const response = await axios.get(myURL + `/user/scheduleAppointment/report/week?clinic_my_ID=${Token_id}`);
        setData(response.data);
        console.log("============>REPORT DATA: " + JSON.stringify(response.data));

      } catch (error) {
        console.error(error);
      }
    };
    const fetchDataYear = async () => {
      try {
        const response = await axios.get(myURL + `/user/scheduleAppointment/report/year?clinic_my_ID=${Token_id}`);
        setData(response.data);
        console.log("============>REPORT DATA: " + JSON.stringify(response.data));

      } catch (error) {
        console.error(error);
      }
    };



      let count = 0;

    console.log("fetch_data-->" +fetch_data);

    const getReportValue = () =>{

      AllClinic.forEach(vaccine => {
        const count = fetch_data.filter(monthVaccine => monthVaccine === vaccine).length;
        matchCounts.push(count);
      });

      const updatedDatasets = [...datasets];
      updatedDatasets[0].data = matchCounts;
      setDatasets(updatedDatasets);
      console.log(matchCounts);

    }

    return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView style={{ flex: 1, marginTop: 50 }}>
      <View>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={alldataclinic}
        search
        maxHeight={300}
        labelField="name"
        // valueField="my_ID"
        placeholder={!isFocus ? 'Select Period' : '...'}
        searchPlaceholder="Search..."
        value={periodValue}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setSelectedName(item.name);
          setSelectedId(item.my_ID);
          setToken_id(item.my_ID);
          setPeriodValue(item.value);
          setIsFocus(false);
        }}
      />
        <Text>Selected Name: {selectedName}</Text>
        <Text>Selected _id: {selected_id}</Text>

        {/* <Button title="Clear Selection" onPress={() => setSelectedName(null)} /> */}
      </View>

      <Text style={{marginBottom:15, marginTop: 15}}>Specific Period</Text>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={specificPeriod}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select Period' : '...'}
        searchPlaceholder="Search..."
        value={periodValue}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          peroid(item.value);
          setPeriodValue(item.value);
          setIsFocus(false);
        }}
      />
      {/* <TouchableOpacity onPress={()=>{getReportValue()}}>
        <View><Text style={{padding:20}}>REPORT GET</Text></View>
        <Text>{ bcg }</Text>
      </TouchableOpacity> */}

        {/* <View>
          <Text>Fields</Text>
        </View>

        <Text style={{ fontSize: 20, fontWeight: "600" }}>
          Bar Progress Ring Chart
        </Text> */}

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

        {/* <PieChart
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
        /> */}


        <Text style={{ fontSize: 20, fontWeight: "600", marginTop: 20 }}>
          Line Chart Analysis of Clinic:
        </Text>
        <LineChart
          data={{
            labels: AllClinic,
            datasets: 
              datasets
            ,
          }}
          width={screenWidth} // from react-native
          height={220}
          yAxisLabel=""
          yAxisSuffix=""
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
        />




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

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    padding: 16,
    justifyContent: 'center',
    alignContent: 'center'
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  generateButton: {
    backgroundColor: '#329998',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
});


export default ReportChartsAdmin;