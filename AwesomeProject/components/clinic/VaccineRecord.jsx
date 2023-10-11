// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   SafeAreaView,
//   Image,
//   Pressable,
//   Modal,
//   TextInput,
//   Alert,
//   TouchableOpacity,
// } from "react-native";
// import axios from "axios";
// import * as Location from "expo-location";

// import myURL from "../../services/myurls";

// const VaccineRecord = ({
//   navigation,
//   modalVisible,
//   setModalVisible,
//   token,
// }) => {
//   // user register _id and Role get Here and pass to the post method

//   console.log(" TOKEN  " + token._id);
//   const my_ID = token._id;
//   const my_ROLE = token.role;
//   // const [modalVisible, setModalVisible] = useState(false);

//   const [vaccine_name, Setvaccine_name] = useState("");
//   const [manufacture, Setmanufacture] = useState(0);
//   const [vaccine_type, Setvaccine_type] = useState("");
//   const [quantity, Setquantity] = useState("");
//   const [price, Setprice] = useState("");

//   const [name, SetName] = useState("");
//   const [cnic, SetCNIC] = useState(0);
//   const [country, SetCountry] = useState("");
//   const [phoneno, SetPhoneno] = useState("");
//   const [latitude, SetLatitude] = useState("74.676346823");
//   const [longitude, SetLongitude] = useState("31.2784783");
//   const [status, setStatus] = useState("");

//   const findMyLocation = async () => {
//     try {
//       const { status } = await Location.requestForegroundPermissionsAsync();

//       if (status !== "granted") {
//         setStatus("Permission to access location was denied");
//         return;
//       }

//       const location = await Location.getCurrentPositionAsync();
//       console.log("loc:" + location.coords.latitude);

//       SetLatitude(location.coords.latitude);
//       SetLongitude(location.coords.longitude);

//       //      const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

//       //      const response = await fetch(geoApiUrl);
//       //      const data = await response.json();
//       setStatus(`Latitude: ${latitude}, Longitude: ${longitude}`);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // const [image,SetImage] = useState('');
//   // const [Picture,setPicture] = useState('');

//   return (
//     <>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.centeredView}>
//           <Pressable
//             style={[styles.button, styles.buttonClose]}
//             onPress={() => {
//               setModalVisible(!modalVisible);
//             }}
//           >
//             <Text style={styles.textStyle}> X </Text>
//           </Pressable>

//           <View style={styles.modalView}>
//             <ScrollView style={{ width: "100%" }}>
//               <Text
//                 style={{
//                   alignSelf: "flex-start",
//                   color: "black",
//                   fontSize: 15,
//                   margin: 10,
//                   marginLeft: 20,
//                 }}
//               >
//                 vaccine_name
//               </Text>
//               <TextInput
//                 style={styles.input}
//                 onChangeText={(vaccine_name) => {
//                   Setvaccine_name(vaccine_name);
//                 }}
//                 placeholder="Enter Vaccine Name"
//               />

//               {/* {console.log(firstname)} */}

//               <Text
//                 style={{
//                   alignSelf: "flex-start",
//                   color: "black",
//                   fontSize: 15,
//                   margin: 10,
//                   marginLeft: 20,
//                 }}
//               >
//                 manufacture
//               </Text>
//               <TextInput
//                 style={styles.input}
//                 onChangeText={(manufacture) => {
//                   Setmanufacture(manufacture);
//                 }}
//                 placeholder="Enter manufacture"
//               />

//               <Text
//                 style={{
//                   alignSelf: "flex-start",
//                   color: "black",
//                   fontSize: 15,
//                   margin: 10,
//                   marginLeft: 20,
//                 }}
//               >
//                 vaccine_type
//               </Text>
//               <TextInput
//                 style={styles.input}
//                 onChangeText={(vaccine_type) => {
//                   Setvaccine_type(vaccine_type);
//                 }}
//                 placeholder="Enter vaccine_type"
//               />

//               <Text
//                 style={{
//                   alignSelf: "flex-start",
//                   color: "black",
//                   fontSize: 15,
//                   margin: 10,
//                   marginLeft: 20,
//                 }}
//               >
//                 quantity
//               </Text>
//               <TextInput
//                 style={styles.input}
//                 onChangeText={(quantity) => {
//                   Setquantity(quantity);
//                 }}
//                 placeholder="Enter Quantity"
//               />
//               <Text
//                 style={{
//                   alignSelf: "flex-start",
//                   color: "black",
//                   fontSize: 15,
//                   margin: 10,
//                   marginLeft: 20,
//                 }}
//               >
//                 price
//               </Text>
//               <TextInput
//                 style={styles.input}
//                 onChangeText={(price) => {
//                   Setprice(price);
//                 }}

//                 placeholder="Enter price"
//               />

//                 placeholder="Enter Location"
//               /> */}

//               <View
//                 style={{
//                   flex: 1,
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <Text style={{ marginBottom: 20 }}>{status}</Text>
//                 <TouchableOpacity
//                   onPress={findMyLocation}
//                   style={{
//                     padding: 10,
//                     backgroundColor: "#329998",
//                     borderRadius: 5,
//                   }}
//                 >
//                   <Text style={{ color: "white" }}>Find My Location</Text>
//                 </TouchableOpacity>
//               </View>

//               {/* <Text style={{alignSelf:'flex-start',color:'black',fontSize:15,margin:10,marginLeft:20}}>Images</Text>
//                         <TextInput style={styles.input} onChangeText={(country)=>{setcountry(country)}}  placeholder="Enter Image"/> */}

//               <Pressable
//                 onPress={(e) => {
//                   axios
//                     .post(`${myURL}/routes/Clinic/VaccineRecord/`, {
//                       my_ID,
//                       vaccine_name,
//                       manufacture,
//                       vaccine_type,
//                       quantity,
//                       price,

//                     .post(`${myURL}/routes/Clinic/clinicProfile/`, {
//                       my_ID,
//                       my_ROLE,
//                       name,
//                       cnic,
//                       country,
//                       phoneno,
//                       latitude,
//                       longitude,

//                     })
//                     .then((res) => {
//                       console.log("error in post in clinic " + res.data);
//                       console.log("Vaccine Record save");
//                       setModalVisible(!modalVisible);
//                       Alert.alert("SAVE RECORD");
//                       () => {
//                         navigation.navigate("Homeclinic");
//                       };

//                       // {Alert.alert("Hi")}
//                     })
//                     .catch((err) => {
//                       console.log(err);
//                     });
//                 }}
//               >
//                 <Text
//                   style={{
//                     borderRadius: 10,
//                     alignSelf: "center",
//                     color: "white",
//                     fontSize: 15,
//                     marginTop: 20,
//                     backgroundColor: "#E92424",
//                     height: 40,
//                     width: "60%",
//                     textAlign: "center",
//                     padding: 10,
//                     fontWeight: "bold",
//                   }}
//                 >
//                   ADD VACCINE
//                 </Text>
//               </Pressable>
//               {/* <MyComponentAlert /> */}
//             </ScrollView>
//           </View>
//         </View>
//       </Modal>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   //
//   //
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22,
//   },
//   modalView: {
//     flex: 9 / 10,
//     width: "90%",
//     margin: 5,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 20,
//     alignItems: "center",
//     shadowColor: "white",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: "#F194FF",
//   },
//   buttonClose: {
//     marginTop: 20,
//     // backgroundColor: 'white',
//     borderWidth: 2,
//     borderColor: "#2196F3",
//     padding: 15,
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center",
//   },
//   input: {
//     backgroundColor: "white",
//     width: "90%",
//     height: 40,
//     alignSelf: "center",
//     borderRadius: 5,
//     paddingLeft: 10,
//     borderWidth: 2,
//     borderColor: "gray",
//   },
// });

// export default VaccineRecord;

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

const VaccineRecord = ({
  navigation,
  modalVisible,
  setModalVisible,
  token,
}) => {
  // user register _id and Role get Here and pass to the post method
  console.log("TOKEN " + token._id);
  const my_ID = token._id;
  const my_ROLE = token.role;

  const [vaccine_name, Setvaccine_name] = useState("");
  const [manufacture, Setmanufacture] = useState(0);
  const [vaccine_type, Setvaccine_type] = useState("");
  const [quantity, Setquantity] = useState("");
  const [price, Setprice] = useState("");

  const [name, SetName] = useState("");
  const [cnic, SetCNIC] = useState(0);
  const [country, SetCountry] = useState("");
  const [phoneno, SetPhoneno] = useState("");
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

      setStatus(`Latitude: ${latitude}, Longitude: ${longitude}`);
    } catch (error) {
      console.log(error);
    }
  };

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
            <Text style={styles.textStyle}>X</Text>
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
                vaccine_name
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={(vaccine_name) => {
                  Setvaccine_name(vaccine_name);
                }}
                placeholder="Enter Vaccine Name"
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
                manufacture
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={(manufacture) => {
                  Setmanufacture(manufacture);
                }}
                placeholder="Enter manufacture"
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
                vaccine_type
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={(vaccine_type) => {
                  Setvaccine_type(vaccine_type);
                }}
                placeholder="Enter vaccine_type"
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
                quantity
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={(quantity) => {
                  Setquantity(quantity);
                }}
                placeholder="Enter Quantity"
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
                price
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={(price) => {
                  Setprice(price);
                }}
                placeholder="Enter price"
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
                name
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={(name) => {
                  SetName(name);
                }}
                placeholder="Enter name"
              />

              {/* Add more fields as needed here */}

              <Pressable
                onPress={(e) => {
                  axios
                    .post(`${myURL}/routes/Clinic/VaccineRecord/`, {
                      my_ID,
                      vaccine_name,
                      manufacture,
                      vaccine_type,
                      quantity,
                      price,
                    })
                    .then((res) => {
                      console.log("Vaccine Record save");
                      setModalVisible(!modalVisible);
                      Alert.alert("SAVE RECORD");
                      navigation.navigate("Homeclinic");
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                <Text style={styles.buttonText}>ADD VACCINE</Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
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
    borderWidth: 2,
    borderColor: "#2196F3",
    padding: 15,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
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
  buttonText: {
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
  },
});

export default VaccineRecord;
