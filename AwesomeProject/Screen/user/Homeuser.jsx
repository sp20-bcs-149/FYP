import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  Pressable,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";

import userService from "../../services/userservices";
import jwtDecode from "jwt-decode";

import virusimage from "../../assets/injectionimage.jpg";
// import logo from "../../assets/logo.png";
import myURL from "../../services/myurls";
import UserProfile from "./Profile";

import PersonalModel from "../../components/user/PersonalModel";
import axios from "axios";
//import { useRoute } from '@react-navigation/native';

const Homeuser = ({ navigation }) => {
  // const route = useRoute();
  // const token = route.params?.mytok;

  const [Tokendata, setTokenData] = useState([]);
  const [CheckProfile, setCheckProfile] = useState([]);

  useEffect(() => {
    getLoggedInUser();
  }, []);

  getLoggedInUser = async () => {
    try {
      const storedToken = await AsyncStorage.getItem("token");
      console.log("Retrieved token:", storedToken);
      setTokenData(jwtDecode(storedToken));
      //setTokenData(storedToken);  //older

      return storedToken;
    } catch (error) {
      console.error("Error retrieving token:", error);
      return null;
    }
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    // <SafeAreaView>
    <View style={{ flex: 1, backgroundColor: "#329998" }}>
      <ScrollView>
        <View style={styles.slider}>
          <Image
            source={virusimage}
            style={{
              width: "100%",
              height: 200,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-end",
            marginTop: 30,
            marginRight: 30,
          }}
        >
          <Pressable
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text> logout </Text>
          </Pressable>
          <Text style={{ fontWeight: "bold", color: "white" }}>
            Welcome <Text>{Tokendata.name} </Text>!{" "}
          </Text>
          {}
        </View>
        <View style={{ marginTop: 0, alignSelf: "center" }}>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 35,
              fontWeight: "bold",
              marginTop: 0,
            }}
          >
            <Text style={{ color: "white", fontSize: 40 }}>V</Text>accine{" "}
            <Text style={{ color: "white", fontSize: 35 }}>A</Text>pp
          </Text>
        </View>
        <View style={styles.record}>
          {/* 1 */}
          <Pressable
            // style={[styles.button, styles.buttonClose]}
            onPress={() => {
              axios
                .get(`${myURL}/OnlyUserRoutes/profile?my_ID=${Tokendata._id}`)
                .then((res) => {
                  console.log("match User ID" + res.data);
                  setCheckProfile(res.data);
                  navigation.navigate("UserProfile", { token: Tokendata });
                })
                .catch((err) => {
                  setCheckProfile();
                  setModalVisible(!modalVisible);
                  //console.log(err);
                });
            }}
          >
            <View
              style={{
                backgroundColor: "#94D8D7",
                width: 150,
                height: 150,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Ionicons name="person" size={45} color="white" />
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                Personal
              </Text>
              <Text style={{ color: "white" }}>Profile</Text>
            </View>
          </Pressable>
          {/* 2 */}
          <Pressable
            // style={[styles.button, styles.buttonClose]}
            onPress={() => navigation.navigate("Family")}
          >
            <View
              style={{
                backgroundColor: "#94D8D7",
                width: 150,
                height: 150,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <MaterialIcons name="family-restroom" size={45} color="white" />
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                Family
              </Text>
              <Text style={{ color: "white" }}>Profile</Text>
            </View>
          </Pressable>
          {/* 3 */}
          <Pressable
            // style={[styles.button, styles.buttonClose]}
            onPress={() => navigation.navigate("ScheduleHome")}
          >
            <View
              style={{
                backgroundColor: "#94D8D7",
                width: 150,
                height: 150,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <MaterialIcons name="schedule" size={45} color="white" />
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                Schedule
              </Text>
              <Text style={{ color: "white" }}>Appointment</Text>
            </View>
          </Pressable>

          {/* 4 */}
          <Pressable
            // style={[styles.button, styles.buttonClose]}
            onPress={() => {
              navigation.navigate("News");
            }}
          >
            <View
              style={{
                backgroundColor: "#94D8D7",
                width: 150,
                height: 150,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Ionicons name="newspaper-sharp" size={45} color="white" />
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                News
              </Text>
            </View>
          </Pressable>

          {/* 5 */}
          <Pressable
            // style={[styles.button, styles.buttonClose]}
            onPress={() => navigation.navigate("ClinicFinder")}
          >
            <View
              style={{
                backgroundColor: "#94D8D7",
                width: 150,
                height: 150,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <FontAwesome5 name="clinic-medical" size={45} color="white" />
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                Clinic
              </Text>
            </View>
          </Pressable>

          {/* 6 */}
          <Pressable
            // style={[styles.button, styles.buttonClose]}
            onPress={() => navigation.navigate("PdfPrintOut")}
          >
            <View
              style={{
                backgroundColor: "#94D8D7",
                width: 150,
                height: 150,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <FontAwesome5 name="print" size={45} color="white" />
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                PDF
              </Text>
              <Text style={{ color: "white" }}>Printout</Text>
            </View>
          </Pressable>

          {/* 7 */}
          <Pressable
            // style={[styles.button, styles.buttonClose]}
            onPress={() => {
              navigation.navigate("Alert");
            }}
          >
            <View
              style={{
                backgroundColor: "#94D8D7",
                width: 150,
                height: 150,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Foundation name="alert" size={45} color="white" />
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                Alert
              </Text>
              <Text style={{ color: "white" }}>System</Text>
            </View>
          </Pressable>

          {/* 8 */}
          <Pressable
            // style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <View
              style={{
                backgroundColor: "#94D8D7",
                width: 150,
                height: 150,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <MaterialCommunityIcons name="reminder" size={45} color="white" />
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                Reminder
              </Text>
              <Text style={{ color: "white" }}>Vaccine</Text>
            </View>
          </Pressable>

          {/* 9 */}
          <Pressable
            // style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <View
              style={{
                backgroundColor: "#94D8D7",
                width: 150,
                height: 150,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Ionicons name="md-book" size={45} color="white" />
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                Book
              </Text>
              <Text style={{ color: "white" }}>Appointment</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
      {/* Profile MODEL start */}

      <PersonalModel
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        token={Tokendata}
      />
      {/* token={token} */}
      {/* Profile Model End */}
    </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  top: {
    flex: 0.9 / 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 25,
    marginRight: 25,
    alignContent: "space-around",
    TextColor: "white",
  },
  slider: {
    flex: 2.5 / 10,
    backgroundColor: "white",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  record: {
    flex: 1.5 / 10,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    // backgroundColor:'orange',
    alignItems: "center",
    flexWrap: "wrap",
  },
  //
  //
});

export default Homeuser;
