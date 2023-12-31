import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import VaccineRecordComponent from "../../components/clinic/VaccineRecord"; // Renamed the component
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
import axios from "axios";
import myURL from "../../services/myurls";

const VaccineRecord = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [resData, setResData] = useState([]);
  const [Tokendata, setTokenData] = useState([]);
  const route = useRoute();
  let token = route.params?.token;

  useEffect(() => {
    // getLoggedInClinic();
    getVaccineRecord();
  }, []);

  // const getLoggedInClinic = async () => {
  //   try {
  //     const storedToken = await AsyncStorage.getItem("token");
  //     console.log("Retrieved token:", storedToken);
  //     setTokenData(jwtDecode(storedToken));
  //     console.log(Tokendata);

  //     // Call getVaccineRecord here after setting the token data.
  //   } catch (error) {
  //     console.error("Error retrieving token:", error);
  //   }
  // };

  const getVaccineRecord = async () => {
    try {
      console.log("token id", token);
      const response = await axios.get(
        `${myURL}/routes/Clinic/VaccineRecord/vaccines/${token}`
      );
      console.log("Vaccine record data:", response.data);
      setResData(response.data);
    } catch (error) {
      console.log("Error fetching vaccine record:", error);
    }
  };

  return (
    <View style={style.container}>
      <ScrollView style={{ width: "100%" }}>
        <View
          style={{
            flex: 1 / 10,
            backgroundColor: "#329998",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
            marginTop: 5,
          }}
        >
          <Text
            style={{
              color: "white",
              marginTop: 30,
              marginBottom: 10,
              marginLeft: 20,
              fontSize: 25,
              textAlign: "center",
              fontWeight: "900",
              // letterSpacing: 0.5
            }}
          >
            Vaccine Record
          </Text>
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={{
              flexDirection: "row",
              backgroundColor: "#fff",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              height: 40,
              width: 130,
              marginTop: 30,
              marginLeft: 20,
              marginRight: 10,
            }}
          >
            <Text
              style={{
                color: "#329998",
                textAlign: "center",
                fontWeight: "bold",
                letterSpacing: 0.5,
              }}
            >
              Add Vaccine
            </Text>
            <MaterialIcons name="library-add" size={30} color="#329998" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 9 / 10,
            backgroundColor: "#FFFFFF",
            width: "100%",
            alignItems: "center",
          }}
        >
          {resData.map((vaccineRecord, index) => (
            <View
              key={index}
              style={{
                backgroundColor: "#329998",
                width: "90%",
                height: 200,
                borderRadius: 10,
                justifyContent: "space-evenly",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <View
                style={{
                  width: "100%",
                  justifyContent: "space-around",
                  flexDirection: "row",
                }}
              >
                <View>
                  <Text style={{ color: "white", fontSize: 18 }}>
                    Vaccine Name:
                  </Text>
                  {/* <Text
                    style={{ fontSize: 25, fontWeight: "bold", color: "white" }}
                  >
                    {vaccineRecord.vaccine_name}
                  </Text> */}
                </View>
                <View>
                  <Text
                    style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
                  >
                    {vaccineRecord.vaccine_name}
                  </Text>
                  {/* <Text style={{ backgroundColor: "#329998", color: "white" }}>
                    {vaccineRecord.manufacture}
                  </Text> */}
                </View>
              </View>
              <View style={style.line}></View>
              <View
                style={{
                  width: "100%",
                  justifyContent: "space-around",
                  flexDirection: "row",
                }}
              >
                <View>
                  <Text style={{ fontSize: 13, color: "white" }}>
                    {" "}
                    Price : {vaccineRecord.price}
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 13, color: "white" }}>
                    Quantity : {vaccineRecord.quantity}{" "}
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 13, color: "white" }}>
                    Type : {vaccineRecord.vaccine_type}
                  </Text>
                </View>
              </View>
              <View style={style.line}></View>
              <View
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <AntDesign
                  name="edit"
                  size={24}
                  color="#fff"
                  style={{ margin: 10 }}
                />
              <TouchableOpacity onPress={()=>{
                              axios
                .delete(`${myURL}/routes/Clinic/VaccineRecord/vaccines/${vaccineRecord._id}`)
                .then((res) => {
                  console.log(res.data);
                  getVaccineRecord();
                  Alert.alert("Delete Record");
                })
                .catch((err) => {
                  console.log(err);
                });
               }}>

                <AntDesign
                  name="delete"
                  size={24}
                  color="#fff"
                  style={{ margin: 10 }}
                />
  
              </TouchableOpacity>

              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <VaccineRecordComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        token={token}
        getVaccineRecord={getVaccineRecord}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    height: 1,
    width: "90%",
    backgroundColor: "#B9B0B0", // Set your desired line color
  },
});

export default VaccineRecord;
