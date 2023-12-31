import React, { useState } from "react";
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
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import * as Location from "expo-location";

import myURL from "../../services/myurls";

const ClinicModel = ({ navigation, modalVisible, setModalVisible, token }) => {
  // user register _id and Role get Here and pass to the post method

  console.log(" TOKEN  " + token._id);
  const my_ID = token._id;
  const my_ROLE = token.role;
  // const [modalVisible, setModalVisible] = useState(false);
  const [name, SetName] = useState("");
  const [registrationId, SetRegistrationId] = useState(0);
  const [country, SetCountry] = useState("");
  const [phoneno, SetPhoneno] = useState("");
  const [city, SetCity] = useState("");
  const [address, SetAddress] = useState("");
  const [postalCode, SetPostalCode] = useState("");
  const [latitude, SetLatitude] = useState("74.676346823");
  const [longitude, SetLongitude] = useState("31.2784783");
  const [status, setStatus] = useState("");

  const findMyLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setStatus("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync();
      console.log("loc:" + location.coords.latitude);

      SetLatitude(location.coords.latitude);
      SetLongitude(location.coords.longitude);

      //      const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

      //      const response = await fetch(geoApiUrl);
      //      const data = await response.json();
      setStatus(`Latitude: ${latitude}, Longitude: ${longitude}`);
    } catch (error) {
      console.log(error);
    }
  };

  // const [image,SetImage] = useState('');
  // const [Picture,setPicture] = useState('');

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={styles.textStyle}> X </Text>
          </Pressable>

          <View style={styles.modalView}>
            <ScrollView style={{ width: "100%" }}>
              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "black",
                  fontSize: 15,
                  margin: 10,
                  marginLeft: 20,
                }}
              >
                Name
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={(name) => {
                  SetName(name);
                }}
                placeholder="Enter Name"
              />

              {/* {console.log(firstname)} */}

              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "black",
                  fontSize: 15,
                  margin: 10,
                  marginLeft: 20,
                }}
              >
                registrationId
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={(registrationId) => {
                  SetRegistrationId(registrationId);
                }}
                placeholder="Enter Registration Id"
              />

              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "black",
                  fontSize: 15,
                  margin: 10,
                  marginLeft: 20,
                }}
              >
                Phone Number
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={(phone) => {
                  SetPhoneno(phone);
                }}
                placeholder="Enter Phone"
              />

              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "black",
                  fontSize: 15,
                  margin: 10,
                  marginLeft: 20,
                }}
              >
                Country
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={(country) => {
                  SetCountry(country);
                }}
                placeholder="Enter Country"
              />
              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "black",
                  fontSize: 15,
                  margin: 10,
                  marginLeft: 20,
                }}
              >
                city
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={(city) => {
                  SetCity(city);
                }}
                placeholder="Enter city"
              />
              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "black",
                  fontSize: 15,
                  margin: 10,
                  marginLeft: 20,
                }}
              >
                address
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={(address) => {
                  SetAddress(address);
                }}
                placeholder="Enter address"
              />
              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "black",
                  fontSize: 15,
                  margin: 10,
                  marginLeft: 20,
                }}
              >
                Postal code
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={(postalCode) => {
                  SetPostalCode(postalCode);
                }}
                placeholder="Enter Postal code"
              />

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ marginBottom: 20 }}>{status}</Text>
                <TouchableOpacity
                  onPress={findMyLocation}
                  style={{
                    padding: 10,
                    backgroundColor: "#329998",
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ color: "white" }}>Find My Location</Text>
                </TouchableOpacity>
              </View>

              {/* <Text style={{alignSelf:'flex-start',color:'black',fontSize:15,margin:10,marginLeft:20}}>Images</Text>
                        <TextInput style={styles.input} onChangeText={(country)=>{setcountry(country)}}  placeholder="Enter Image"/> */}

              <Pressable
                onPress={(e) => {
                  axios
                    .post(`${myURL}/routes/Clinic/clinicProfile/`, {
                      my_ID,
                      my_ROLE,
                      name,
                      registrationId,
                      country,
                      phoneno,
                      city,
                      address,
                      postalCode,
                      latitude,
                      longitude,
                    })
                    .then((res) => {
                      console.log("error in post in clinic " + res.data);
                      console.log("Profile Save!! ");
                      setModalVisible(!modalVisible);
                      Alert.alert("SAVE PROFILE");
                      () => {
                        navigation.navigate("Homeclinic");
                      };

                      // {Alert.alert("Hi")}
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                <Text
                  style={{
                    borderRadius: 10,
                    alignSelf: "center",
                    color: "white",
                    fontSize: 15,
                    marginTop: 20,
                    backgroundColor: "#E92424",
                    height: 40,
                    width: "60%",
                    textAlign: "center",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Profile
                </Text>
              </Pressable>
              {/* <MyComponentAlert /> */}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  //
  //
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    flex: 9 / 10,
    width: "90%",
    margin: 5,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    marginTop: 20,
    // backgroundColor: 'white',
    borderWidth: 2,
    borderColor: "#2196F3",
    padding: 15,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    backgroundColor: "white",
    width: "90%",
    height: 40,
    alignSelf: "center",
    borderRadius: 5,
    paddingLeft: 10,
    borderWidth: 2,
    borderColor: "gray",
  },
});

export default ClinicModel;
