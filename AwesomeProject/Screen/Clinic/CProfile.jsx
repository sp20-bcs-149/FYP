import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
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
import ClinicModelProfile from "../../components/clinic/ClinicModelProfile";
import { useRoute } from "@react-navigation/native";

const CProfile = ({ navigation }) => {
  const route = useRoute();
  let Token = route.params?.token;

  const [resData, setresData] = useState({});
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [editedProfileData, setEditedProfileData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getClinicProfile();
  }, [refreshFlag]);

  const getClinicProfile = () => {
    axios
      .get(`${myURL}/routes/Clinic/clinicProfile?my_ID=${Token._id}`)
      .then((res) => {
        setresData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    const pollingInterval = setInterval(() => {
      getClinicProfile();
    }, 1000);

    return () => clearInterval(pollingInterval);
  }, []);
  const handleProfileUpdate = () => {
    setRefreshFlag(!refreshFlag);
  };

  return (
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
              navigation.navigate("Homeclinic");
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
            {/* <Text style={{ margin: 0, color: "white", marginBottom: 10 }}>
              {resData.country}
            </Text> */}
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Feather name="edit" size={35} color="white" />
            </Pressable>
            <Text style={{ color: "white" }}>EDIT</Text>
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
          <Text style={{ color: "gray" }}>Longitude:</Text>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {resData.longitude}
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              marginTop: 10,
              marginBottom: 10,
              borderBottomColor: "#ACA5A5",
            }}
          ></View>
          <Text style={{ color: "gray" }}>Latitude:</Text>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {resData.latitude}
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              marginTop: 10,
              marginBottom: 10,
              borderBottomColor: "#ACA5A5",
            }}
          ></View>
          <Text style={{ color: "gray" }}>Countery:</Text>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {resData.country}
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              marginTop: 10,
              marginBottom: 10,
              borderBottomColor: "#ACA5A5",
            }}
          ></View>
          <Pressable
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={() => {
              if (resData._id) {
                axios
                  .delete(`${myURL}/routes/Clinic/clinicProfile/${resData._id}`)
                  .then((res) => {
                    Alert.alert("Profile Deleted");
                    navigation.navigate("Homeclinic");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              } else {
                Alert.alert("Sorry, no record found");
              }
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
          {/* <PersonalModelProfile
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            User_Token={Token}
            profiledata={resData}
          /> */}
          <ClinicModelProfile
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            clinic_Token={Token}
            profiledata={resData}
            onUpdate={handleProfileUpdate}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CProfile;
