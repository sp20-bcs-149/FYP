import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Pressable, Modal, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';
import axios from 'axios';
import myURL from '../../../services/myurls';

const CreateRecordModelUpdate = ({ navigation, modalVisible, setModalVisible, _ID,my_ID,P_name,P_gender,P_weight,P_height,P_dob,P_cnic,SelectedvaccineString,fetchData2 }) => {

  const [name, Setname] = useState( P_name||"");
  const [gender, Setgender] = useState(P_gender||"");
  const [height, Setheight] = useState(P_height||"");
  const [weight, Setweight] = useState(P_weight||"");
  const [dob, setDob] = useState(P_dob||""); 
  const [cnic, setCnic] = useState(P_cnic ||"");
  const [vaccines, setVaccines] = useState([
    { name: 'Polio', checked: false },
    { name: 'Hep A', checked: false },
    { name: 'Hep B', checked: false },
    { name: 'BCG', checked: false },
    { name: 'OPV', checked: false },
    { name: 'IPV', checked: false },
    { name: 'Hib', checked: false },
    { name: 'DTP', checked: false },
    { name: 'Rotavirus', checked: false },
    { name: 'Measles', checked: false },
    {name: 'Yellow Fever', checked: false},
    {name: 'Tdap/Td', checked: false},
    {name: 'Shingles (Herpes Zoster)', checked: false},
    {name: 'PPSV23', checked: false},
    {name: 'Meningococcal B (MenB)', checked: false},
    {name: 'Human Papillomavirus (HPV)', checked: false},
    {name: 'Varicella (Chickenpox)', checked: false},
    {name: 'Measles, Mumps, and Rubella', checked: false},
    {name: 'Influenza (Flu)', checked: false},
    {name: 'PCV13', checked: false},
    {name: 'Yellow Fever', checked: false},
  ]);

  useEffect(() => {
    if (P_name) {
      Setname(P_name);
    }
    if (P_gender) {
      Setgender(P_gender);
    }
    if (P_height) {
      Setheight(P_height);
    }
    if (P_weight) {
      Setweight(P_weight);
    }
    if (P_dob) {
      setDob(P_dob);
    }
    if(P_cnic){
      setCnic(P_cnic);
    }
    // if (profiledata.vaccines) {
    //   setVaccines(profiledata.setVaccines);
    // }

  }, []); // Update name state when profiledata.name changes

  const [selectvaccine,SetselectVaccine] = useState("sorry");


  const [errormsg, setErrormsg] = useState(null);
  const [isCnicEntered, setIsCnicEntered] = useState(false);

  const handleCnicChange = (text) => {
    let formattedCnic = text.replace(/\D/g, ''); // Remove non-numeric characters

    if (formattedCnic.length > 13) {
      formattedCnic = formattedCnic.slice(0, 13);
    }

    if (formattedCnic.length >= 5 && formattedCnic.length < 13) {
      formattedCnic = formattedCnic.slice(0, 5) + '-' + formattedCnic.slice(5);
    } else if (formattedCnic.length >= 13) {
      formattedCnic =
        formattedCnic.slice(0, 5) + '-' +
        formattedCnic.slice(5, 12) + '-' +
        formattedCnic.slice(12);
    }

    setCnic(formattedCnic);

    if (!/^\d{5}-\d{7}-\d{1}$/.test(formattedCnic)) {
      setIsCnicEntered(true);
    } else {
      setIsCnicEntered(false);
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
            <Text style={styles.textStyle}> X </Text>
          </Pressable>

          <View style={styles.modalView}>
            <ScrollView style={{ width: "100%" }}>
              <Text style={{ alignSelf: "center", fontSize: 10, marginTop: 20 }}>
                {errormsg ? (
                  <View style={{ backgroundColor: "#C2185B", margin: 10 }}>
                    <Text style={{ alignSelf: "center", borderRadius: 10, padding: 5, color: "white", fontSize: 10 }}>
                      {errormsg}
                    </Text>
                  </View>
                ) : null}
              </Text>

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
                value={name}
                style={styles.input}
                onPressIn={() => {
                  setErrormsg(null);
                }}
                onChangeText={(text) => {
                  Setname(text);
                }}
                placeholder="Name"
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
                Gender
              </Text>
              <TextInput
              value={gender}
                style={styles.input}
                onPressIn={() => {
                  setErrormsg(null);
                }}
                onChangeText={(text) => {
                  Setgender(text);
                }}
                placeholder="Gender"
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
                Height
              </Text>
              <TextInput
              value={height}
                style={styles.input}
                onPressIn={() => {
                  setErrormsg(null);
                }}
                onChangeText={(text) => {
                  Setheight(text);
                }}
                placeholder="Height"
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
                Weight
              </Text>
              <TextInput
              value={weight}
                style={styles.input}
                onPressIn={() => {
                  setErrormsg(null);
                }}
                onChangeText={(text) => {
                  Setweight(text);
                }}
                placeholder="Weight"
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
                Date of Birth
              </Text>
              <TextInput
              value={dob}
                style={styles.input}
                onPressIn={() => {
                  setErrormsg(null);
                }}
                onChangeText={(text) => {
                  setDob(text);
                }}
                placeholder="YYYY-MM-DD"
              />
              {dob && !/^\d{4}-\d{2}-\d{2}$/.test(dob) && (
                <Text style={{ color: "red", marginLeft: 20, fontSize: 12 }}>
                  Please enter a valid date in YYYY-MM-DD format.
                </Text>
              )}

              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "black",
                  fontSize: 15,
                  margin: 10,
                  marginLeft: 20,
                }}
              >
                CNIC
              </Text>
              <TextInput
              value={cnic}
                style={styles.input}
                onPressIn={() => {
                  setErrormsg(null);
                  setIsCnicEntered(false);
                }}
                onChangeText={handleCnicChange}
                placeholder="XXXXX-XXXXXXX-X"
                keyboardType="numeric"
                maxLength={15}
              />
              {isCnicEntered && (
                <Text style={{ color: "red", marginLeft: 20, fontSize: 12 }}>
                  Please enter a valid CNIC (e.g., XXXXX-XXXXXXX-X).
                </Text>
              )}

              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "black",
                  fontSize: 15,
                  margin: 10,
                  marginLeft: 20,
                }}
              >
                Previous Vaccination
              </Text>
              <View style={{ marginLeft: 20 }}>
                {vaccines.map((vaccine, index) => {
                  const isSelected = SelectedvaccineString  && SelectedvaccineString.includes(vaccine.name);
                  return(
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} key={index}>
                    <CheckBox
                      checked={vaccine.checked || isSelected}
                      onPress={() => {
                        const updatedVaccines = [...vaccines];
                        updatedVaccines[index].checked = !vaccines[index].checked;
                        setVaccines(updatedVaccines);
                      }}
                    />
                    <Text style={{ marginLeft: 10 }}>{vaccine.name}</Text>
                  </View>
                )})}
              </View>

              <Pressable
                onPress={(e) => {
                  const selectedVaccines = vaccines.filter(vaccine => vaccine.checked).map(vaccine => vaccine.name);
                  const SelectedvaccineString = JSON.stringify(selectedVaccines.join(','));
                  console.log("SELECTED VACCINE  : " + SelectedvaccineString);
                  axios
                    .put(myURL + "/family/familyInside/" + _ID, {my_ID, name, gender, height, weight, dob, cnic,SelectedvaccineString})
                    .then((res) => {
                      // fetchData2();
                      setModalVisible(!modalVisible);
                      navigation.navigate("Family");
                      Alert.alert("Profile Update!! ");

                      console.log(res.data);
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
                  Create
                </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    flex: 9 / 10,
    width: '90%',
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: 'white',
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
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    backgroundColor: "white",
    width: "90%",
    height: 40,
    alignSelf: 'center',
    borderRadius: 5,
    paddingLeft: 10,
    borderWidth: 2,
    borderColor: 'gray'
  },
});

export default CreateRecordModelUpdate;
