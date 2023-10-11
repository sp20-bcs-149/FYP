import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import person from "../../assets/person.jpg";
import myURL from "../../services/myurls";
import PersonalModelProfile from "../../components/user/PersonalModelProfile";
import { useRoute } from "@react-navigation/native";

const UserProfile = ({ navigation, token_id }) => {
  const route = useRoute();
  let Token = route.params?.token;

  const [resData, setResData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshFlag, setRefreshFlag] = useState(false);

  useEffect(() => {
    getUserProfile();
  }, [refreshFlag]);

  const getUserProfile = () => {
    axios
      .get(`${myURL}/OnlyUserRoutes/profile?my_ID=${Token._id}`)
      .then((res) => {
        console.log("match User ID" + res.data);
        setResData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Polling setup (fetch data every X seconds)
  useEffect(() => {
      const pollingInterval = setInterval(() => {
      getUserProfile();
      }, 1000); // Adjust the interval as needed (e.g., fetch data every minute)

      // Cleanup when the component unmounts
      return () => clearInterval(pollingInterval);
  }, []); // Run this effect only once, on component mount

  const handleProfileUpdate = () => {
    // Your code to update the profile in MongoDB goes here
    // After a successful update, set the refresh flag to trigger a UI refresh
    setRefreshFlag(!refreshFlag);
  };

  return (
    <>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: 300,
              justifyContent: "center",
              backgroundColor: "#329998",
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
            }}
          >
            <Pressable
              onPress={() => {
                navigation.navigate("Homeuser");
              }}
            >
              <Ionicons
                name="arrow-back-circle-sharp"
                size={40}
                color="white"
                style={{
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  marginTop: 40,
                  marginLeft: 20,
                }}
              />
            </Pressable>
            <View style={{ alignItems: "center" }}>
              <Image
                source={person}
                style={{ width: 100, height: 100, borderRadius: 100 }}
              />
              <AntDesign
                name="pluscircle"
                size={24}
                color="white"
                style={{ marginTop: -15 }}
              />
              <Text
                style={{
                  margin: 5,
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                {resData.name}
              </Text>
              <Text style={{ margin: 0, color: "white", marginBottom: 10 }}>
                {resData.country}
              </Text>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Feather name="edit" size={35} color="white" />
              </Pressable>
              <Text style={{ color: "white" }}>EDIT</Text>
              <Pressable
                onPress={() => {
                  resData._id
                    ? axios
                        .delete(
                          `${myURL}/OnlyUserRoutes/profile/${resData._id}`
                        )
                        .then((res) => {
                          console.log(res.data);
                          console.log("Profile Save!!");
                          Alert.alert("Delete Record");
                          navigation.navigate("Homeuser");
                        })
                        .catch((err) => {
                          console.log(err);
                        })
                    : Alert.alert("Sorry, have no Record");
                }}
              >
                <Text
                  style={{
                    padding: 10,
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: 10,
                  }}
                >
                  Delete
                </Text>
              </Pressable>
            </View>
          </View>

          <View style={{ flex: 6 / 10, margin: 40 }}>
            {/* Display user information */}
            <Text style={{ color: "gray" }}>Phone:</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {resData.phoneno}
            </Text>
            <View
              style={{
                borderBottomWidth: 1,
                marginTop: 10,
                marginBottom: 10,
                borderBottomColor: "#ACA5A5",
              }}
            ></View>
            <Text style={{ color: "gray" }}>CNIC:</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {resData.cnic}
            </Text>
            <View
              style={{
                borderBottomWidth: 1,
                marginTop: 10,
                marginBottom: 10,
                borderBottomColor: "#ACA5A5",
              }}
            ></View>
            <Text style={{ color: "gray" }}>Age:</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {resData.age}
            </Text>
            <View
              style={{
                borderBottomWidth: 1,
                marginTop: 10,
                marginBottom: 10,
                borderBottomColor: "#ACA5A5",
              }}
            ></View>
            <Text style={{ color: "gray" }}>Gender:</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {resData.gender}
            </Text>
            <View
              style={{
                borderBottomWidth: 1,
                marginTop: 10,
                marginBottom: 10,
                borderBottomColor: "#ACA5A5",
              }}
            ></View>
            <Text style={{ color: "gray" }}>Allergies:</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {resData.allergies}
            </Text>
            <View
              style={{
                borderBottomWidth: 1,
                marginTop: 10,
                marginBottom: 10,
                borderBottomColor: "#ACA5A5",
              }}
            ></View>
            <Text style={{ color: "gray" }}>Medical(Any Prior Disease):</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {resData.medical}
            </Text>
            <View
              style={{
                borderBottomWidth: 1,
                marginTop: 10,
                marginBottom: 10,
                borderBottomColor: "#ACA5A5",
              }}
            ></View>
            {/* Update the PersonalModelProfile component with the handleProfileUpdate function */}
            <PersonalModelProfile
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              User_Token={Token}
              profiledata={resData}
              onUpdate={handleProfileUpdate}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default UserProfile;
