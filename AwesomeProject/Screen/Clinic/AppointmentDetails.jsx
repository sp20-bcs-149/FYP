import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import axios from "axios";
import myURL from "../../services/myurls";

const AppointmentDetails = ({ navigation }) => {
  const route = useRoute();
  let { put_id, patientName, cnic, vaccinename, date, slot, day } =
    route.params;
    getpendingAppointment = route.params?.getpending;

  const [status, setstatus] = useState("completed");

  console.log("PUT_ID  " + put_id);
  return (
    <>
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
              Appointment Details
            </Text>
          </View>
          <View
            style={{
              flex: 9 / 10,
              backgroundColor: "#FFFFFF",
              width: "100%",
              alignItems: "center",
            }}
          >
            {/* 1 - start */}
            <View
              style={{
                backgroundColor: "#329998",
                width: "90%",
                height: 400,
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
                <Ionicons name="person" size={35} color="white" />
                <View style={{ marginTop: 0 }}>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: "bold",
                      color: "white",
                      paddingRight: 50,
                    }}
                  >
                    {patientName}
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
                  <Text style={{ fontSize: 15, color: "white" }}>CNIC:</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15 }}> </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15, color: "white" }}>{cnic}</Text>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  justifyContent: "space-around",
                  flexDirection: "row",
                }}
              >
                <View>
                  <Text style={{ fontSize: 15, color: "white" }}>
                    Vaccine Name:
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15 }}> </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15, color: "white" }}>
                    {vaccinename}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  width: "100%",
                  justifyContent: "space-around",
                  flexDirection: "row",
                }}
              >
                <View>
                  <Text style={{ fontSize: 15, color: "white" }}>Age:</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15 }}> </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15, color: "white" }}>22</Text>
                </View>
              </View>

              <View
                style={{
                  width: "100%",
                  justifyContent: "space-around",
                  flexDirection: "row",
                }}
              >
                <View>
                  <Text style={{ fontSize: 15, color: "white" }}>Slot:</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15 }}> </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15, color: "white" }}>
                    {slot} AM
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  justifyContent: "space-around",
                  flexDirection: "row",
                }}
              >
                <View>
                  <Text style={{ fontSize: 15, color: "white" }}>Day:</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15 }}> </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15, color: "white" }}>{day} </Text>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  justifyContent: "space-around",
                  flexDirection: "row",
                }}
              >
                <View>
                  <Text style={{ fontSize: 15, color: "white" }}>
                    Created AT:
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15 }}> </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15, color: "white" }}>
                    {date.length > 10 ? date.slice(0, 10) : ""}
                  </Text>
                </View>
              </View>
              {
                <Pressable
                  style={{
                    backgroundColor: "white",
                    width: 140,
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                  }}
                  onPress={() => {
                    axios
                      .put(myURL + "/user/scheduleAppointment/" + put_id, {
                        status,
                      })
                      .then((res) => {
                        console.log(res.data);
                        getpendingAppointment();
                        navigation.navigate("AppointmentRecord");

                        // {Alert.alert("Hi")}
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                >
                  <View>
                    <Text>Recieved Patient</Text>
                  </View>
                </Pressable>
              }
            </View>
            {/* 1 - end */}
          </View>
        </ScrollView>
      </View>
    </>
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

export default AppointmentDetails;
