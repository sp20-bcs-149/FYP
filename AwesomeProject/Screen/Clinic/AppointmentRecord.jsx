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

const AppointmentRecord = ({ navigation }) => {
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
              Appointment Managment
            </Text>
            {/* <Text
              style={{
                color: "white",
                marginTop: 30,
                marginBottom: 10,
                marginRight: 20,
                fontSize: 25,
                textAlign: "center",
                fontWeight: "900",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ChoseClinic");
                }}
              >
                <MaterialIcons name="library-add" size={30} color="white" />
              </TouchableOpacity>
            </Text> */}
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
                height: 100,
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
                    style={{ fontSize: 25, fontWeight: "bold", color: "white" }}
                  >
                    Adil Hussain
                  </Text>
                </View>
                <Pressable>
                  <View style={{ marginTop: 8 }}>
                    <Text
                      style={{ backgroundColor: "#329998", color: "white" }}
                    >
                      Details
                    </Text>
                  </View>
                </Pressable>
              </View>
              <View style={style.line}></View>
              <View
                style={{
                  width: "100%",
                  justifyContent: "space-around",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 5,
                    width: 90,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 11 }}>15/10/2023</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 11 }}> </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 5,
                    width: 70,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 11 }}>10 : 00 AM</Text>
                </View>
              </View>
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

export default AppointmentRecord;
