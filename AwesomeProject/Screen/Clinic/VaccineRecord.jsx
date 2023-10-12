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

  useEffect(() => {
    getLoggedInClinic();
  }, []);

  const getLoggedInClinic = async () => {
    try {
      const storedToken = await AsyncStorage.getItem("token");
      console.log("Retrieved token:", storedToken);
      setTokenData(jwtDecode(storedToken));
      console.log(Tokendata);
      getVaccineRecord();
      // Call getVaccineRecord here after setting the token data.
    } catch (error) {
      console.error("Error retrieving token:", error);
    }
  };

  const getVaccineRecord = async () => {
    axios
      .get(`${myURL}/routes/Clinic/VaccineRecord/${Tokendata._id}`)
      .then((res) => {
        console.log("match User ID" + res.data);
        setResData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={style.container}>
      <ScrollView style={{ width: "100%" }}>
        <View
          style={{
            flex: 1 / 10,
            backgroundColor: "#3C7DA3",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
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
            }}
          >
            Schedule
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ChoseClinic");
            }}
            style={{
              width: 150,
              color: "white",
              marginTop: 30,
              marginBottom: 10,
              marginRight: 20,
              fontSize: 25,
              textAlign: "center",
              fontWeight: "900",
              flexDirection: "row",
              backgroundColor: "#0a0a0a",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white" }}>Add new Vaccine</Text>
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
                backgroundColor: "#E6EDED",
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
                <View style={{ marginTop: 0 }}>
                  <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                    {vaccineRecord.vaccine_name}
                  </Text>
                </View>
                <View style={{ marginTop: 8 }}>
                  <Text style={{ backgroundColor: "#329998", color: "white" }}>
                    {vaccineRecord.manufacture}
                  </Text>
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
                  <Text style={{ fontSize: 11 }}>
                    {" "}
                    Price : {vaccineRecord.price}
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 11 }}>
                    Quantity : {vaccineRecord.quantity}{" "}
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 11 }}>
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
                  color="#3C7DA3"
                  style={{ margin: 10 }}
                />
                <AntDesign
                  name="delete"
                  size={24}
                  color="#FF0000"
                  style={{ margin: 10 }}
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <VaccineRecordComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        token={Tokendata}
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
