import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import axios from "axios";
import myURL from "../../services/myurls";

const PersonalModelProfile = ({
  modalVisible,
  setModalVisible,
  User_Token,
  profiledata,
  onUpdate,
}) => {
  const [my_ID] = useState(User_Token._id);
  const [my_ROLE] = useState(User_Token.my_ROLE);

  const [name, SetName] = useState(profiledata?.name || "");
  const [gender, SetGender] = useState(profiledata?.gender || "");
  const [age, SetAge] = useState((profiledata?.age || "").toString());
  const [cnic, SetCNIC] = useState((profiledata?.cnic || "").toString());
  const [country, SetCountry] = useState(profiledata?.country || "");
  const [phoneno, SetPhoneno] = useState(profiledata?.phoneno || "");
  const [allergies, SetAllergies] = useState(profiledata?.allergies || "");
  const [medical, SetMedical] = useState(profiledata?.medical || "");
  const [errormsg, setErrormsg] = useState(null);

  async function senddata() {
    // Validate the input fields (add your own validation logic)
    if (
      !name ||
      !gender ||
      !age ||
      !cnic ||
      !country ||
      !phoneno ||
      !allergies ||
      !medical
    ) {
      setErrormsg("Please fill out all the fields.");
    } else if (cnic.length !== 13) {
      setErrormsg("CNIC should be 13 characters long without spaces or dashes.");
    } else if (parseInt(age) > 100) {
      setErrormsg("Please enter a valid age (0-100).");
    } else {
      axios
        .put(`${myURL}/OnlyUserRoutes/profile/${profiledata._id}`, {
          my_ID,
          my_ROLE,
          name,
          gender,
          age: parseInt(age),
          cnic,
          country,
          phoneno,
          medical,
          allergies,
        })
        .then((res) => {
          console.log(res.data);
          console.log("Profile Save!!");
          setModalVisible(false);
          Alert.alert("SAVE PROFILE");
          onUpdate(); // Notify parent component to refresh data
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
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
            {/* Display Error Message */}
            {errormsg && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{errormsg}</Text>
              </View>
            )}

            <Text style={styles.inputLabel}>Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={(name) => {
                SetName(name);
                setErrormsg(null); // Clear error message on change
              }}
              value={name}
              placeholder="Enter Name"
            />

            <Text style={styles.inputLabel}>Gender</Text>
            <TextInput
              style={styles.input}
              onChangeText={(gender) => {
                SetGender(gender);
                setErrormsg(null); // Clear error message on change
              }}
              value={gender}
              placeholder="Enter Gender"
            />

            <Text style={styles.inputLabel}>CNIC</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={(cnic) => {
                SetCNIC(cnic);
                setErrormsg(null); // Clear error message on change
              }}
              value={cnic}
              placeholder="Enter CNIC (without -)"
            />

            <Text style={styles.inputLabel}>Age</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={(age) => {
                SetAge(age);
                setErrormsg(null); // Clear error message on change
              }}
              value={age}
              placeholder="Enter Age"
            />

            <Text style={styles.inputLabel}>Phone Number</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={(phone) => {
                SetPhoneno(phone);
                setErrormsg(null); // Clear error message on change
              }}
              value={phoneno}
              placeholder="Enter Phone"
            />

            <Text style={styles.inputLabel}>Country</Text>
            <TextInput
              style={styles.input}
              onChangeText={(country) => {
                SetCountry(country);
                setErrormsg(null); // Clear error message on change
              }}
              value={country}
              placeholder="Enter Country"
            />

            <Text style={styles.inputLabel}>Medical</Text>
            <TextInput
              style={styles.input}
              onChangeText={(med) => {
                SetMedical(med);
                setErrormsg(null); // Clear error message on change
              }}
              value={medical}
              placeholder="Enter Medical"
            />

            <Text style={styles.inputLabel}>Allergies</Text>
            <TextInput
              style={styles.input}
              onChangeText={(allergies) => {
                SetAllergies(allergies);
                setErrormsg(null); // Clear error message on change
              }}
              value={allergies}
              placeholder="Enter Allergies"
            />

            <Pressable onPress={senddata}>
              <Text style={styles.saveButton}>Save Profile</Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
    </Modal>
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
  buttonClose: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#2196F3",
    padding: 15,
  },
  textStyle: {
    color: "white",
    backgroundColor: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  inputLabel: {
    alignSelf: "flex-start",
    color: "black",
    fontSize: 15,
    margin: 10,
    marginLeft: 20,
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
  saveButton: {
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
  errorContainer: {
    backgroundColor: "#C2185B",
    margin: 10,
  },
  errorText: {
    alignSelf: "center",
    borderRadius: 10,
    padding: 5,
    color: "white",
    fontSize: 10,
  },
});

export default PersonalModelProfile;