import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  Alert,
  TextInput,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import person from "../../assets/person.jpg";
import myURL from "../../services/myurls";
import PersonalModelProfile from "../../components/user/PersonalModelProfile";
import { useRoute } from "@react-navigation/native";

const UserProfile = ({ navigation }) => {
  const route = useRoute();
  let Token = route.params?.token;

  const [resData, setResData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [editedProfileData, setEditedProfileData] = useState({});
  const [splitarrayString,setSplitArrayString] = useState([]);
  
  console.log("splitarrayString===>" + splitarrayString);

  useEffect(() => {
    getUserProfile();
  }, []);

  const getUserProfile = () => {
    axios
      .get(`${myURL}/OnlyUserRoutes/profile?my_ID=${Token._id}`)
      .then((res) => {
        console.log("match User ID" + res.data);
        setResData(res.data);
        const withoutCOma = res.data.SelectedvaccineString.replace(/"/g, '')
        const splitString = withoutCOma.split(",");
        setSplitArrayString(splitString)
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const handleDeleteProfile = () => {
    Alert.alert(
      "Delete Profile",
      "Are you sure you want to delete the profile?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            if (resData._id) {
              axios
                .delete(`${myURL}/OnlyUserRoutes/profile/${resData._id}`)
                .then((res) => {
                  console.log(res.data);
                  console.log("Profile Save!!");
                  Alert.alert("Delete Record");
                  navigation.navigate("Homeuser");
                })
                .catch((err) => {
                  console.log(err);
                });
            } else {
              Alert.alert("Sorry, have no Record");
            }
          },
        },
      ]
    );
  };

  return (
    <>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: 350,
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
                  marginTop: 60,
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
              <View style={{width:"70%",flexDirection:'row',justifyContent:'space-between',}}>
                <Pressable onPress={() => setModalVisible(true)}>
                  <Feather name="edit" size={35} color="white" />
                  <Text style={{color:'white',textAlign:'center'}}>Edit</Text>
                </Pressable>
                <Pressable onPress={handleDeleteProfile}>
                  <AntDesign name="delete" size={35} color="white" />
                  <Text style={{color:'white',textAlign:'center'}}>Delete</Text>

                </Pressable>
              </View>
            </View>
          </View>

          <View style={{ flex: 6 / 10, margin: 40 }}>
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
            <Text style={{ color: "gray" }}>Date of Birth:</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {resData.dob}
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
            <Text style={{ color: "gray" }}>Previous Vaccination:</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {
                splitarrayString.map((vaccineName, index) => (
                  <Text key={index}> {vaccineName}</Text>
                ))
              }
            </Text>
          </View>
        </View>
      </ScrollView>

      <PersonalModelProfile
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        User_Token={Token}
        profiledata={resData}
        getUserProfile={getUserProfile}
        // onUpdate={handleProfileUpdate}
      />
    </>
  );
};

export default UserProfile;
