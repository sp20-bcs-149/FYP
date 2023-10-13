import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const AppointmentDetails = ({ navigation }) => {
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
                    Adil Hussain
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
                  <Text style={{ fontSize: 15, color: "white" }}>
                    35404-4627018-3
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
                  <Text style={{ fontSize: 15, color: "white" }}>
                    Vaccine Name:
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15 }}> </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15, color: "white" }}>POlio</Text>
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
                  <Text style={{ fontSize: 15, color: "white" }}>
                    Start Time:
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15 }}> </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15, color: "white" }}>1:30 PM</Text>
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
                    End Time:
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15 }}> </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15, color: "white" }}>1:40 PM</Text>
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
                  <Text style={{ fontSize: 15, color: "white" }}>Date:</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15 }}> </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15, color: "white" }}>
                    12/03/2024
                  </Text>
                </View>
              </View>
              <Pressable
                style={{
                  backgroundColor: "red",
                  width: 140,
                  height: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
              >
                <View>
                  <Text>Recive Vaccine</Text>
                </View>
              </Pressable>
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
