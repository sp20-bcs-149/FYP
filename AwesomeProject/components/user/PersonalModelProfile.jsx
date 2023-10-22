import React, { useState,useEffect } from "react";
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
import { CheckBox } from 'react-native-elements';

import axios from "axios";
import myURL from "../../services/myurls";

const PersonalModelProfile = ({
  modalVisible,
  setModalVisible,
  User_Token,
  profiledata,
  // onUpdate,
}) => {
  console.log("profiledata" + JSON.stringify(profiledata))
  const [my_ID] = useState(User_Token._id);
  const [my_ROLE] = useState(User_Token.my_ROLE);
  const [updatedProfileData, setUpdatedProfileData] = useState({ ...profiledata });

  const handleNameChange = (text) => {
    setUpdatedProfileData({ ...updatedProfileData, name: text });
  };
    // const [modalVisible, setModalVisible] = useState(false);
    const [name,SetName] = useState(profiledata.name || '');
    const [gender,SetGender] = useState(profiledata.gender || '');
    const [country,SetCountry] = useState(profiledata.country || '');
    const [phoneno,SetPhoneno] = useState(profiledata.phoneno || '');
    const [dob, setDob] = useState(profiledata.dob || '' ); 
    const [cnic, setCnic] = useState(profiledata.cnic || '');
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

  const [selectvaccine,SetselectVaccine] = useState("sorry");


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

useEffect(() => {
  if (profiledata.name) {
    SetName(profiledata.name);
  }
  if (profiledata.gender) {
    SetGender(profiledata.gender);
  }
  if (profiledata.country) {
    SetCountry(profiledata.country);
  }
  if (profiledata.phoneno) {
    SetPhoneno(profiledata.phoneno);
  }
  if (profiledata.dob) {
    setDob(profiledata.dob);
  }
  if (profiledata.cnic) {
    setCnic(profiledata.cnic);
  }
  // if (profiledata.vaccines) {
  //   setVaccines(profiledata.setVaccines);
  // }

}, [profiledata]); // Update name state when profiledata.name changes

    const [errormsg ,setErrormsg] = useState(null);
    
    async function senddata(){
        const selectedVaccines = vaccines.filter(vaccine => vaccine.checked).map(vaccine => vaccine.name);
        const SelectedvaccineString = JSON.stringify(selectedVaccines.join(','));
        console.log("SELECTED VACCINE  : " + SelectedvaccineString);

        axios
          .put(myURL+"/OnlyUserRoutes/profile/"+profiledata._id, {my_ID,my_ROLE,name,gender,country,phoneno,dob, cnic,SelectedvaccineString})
          .then((res) => {
          console.log(res.data);
          console.log("Profile Save!! ")
          setModalVisible(!modalVisible);
          Alert.alert("SAVE PROFILE");
          ()=>{navigation.navigate("Homeuser")}
          
          // {Alert.alert("Hi")}
          })
          .catch((err)=> {
          console.log(err);
          })


    }

    return (  
        <>
            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={
                () => {Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>

                    <View style={styles.centeredView}>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => {setModalVisible(!modalVisible);}}>
                        <Text style={styles.textStyle}> X </Text>
                    </Pressable>

                    <View style={styles.modalView}>
                        <ScrollView style={{width:"100%"}}>

                         <Text style={{alignSelf:'center',fontSize:10,marginTop:20}}>      
                          {
                              errormsg ? (<View style={{backgroundColor:"#C2185B",margin:10}}><Text style={{alignSelf:'center',borderRadius:10,padding:5,color:'white',fontSize:10}}>{errormsg}</Text></View>) : null 
                          }
                         </Text>

                        <Text style={{alignSelf:'flex-start',color:'black',fontSize:15,margin:10,marginLeft:20}}>Name</Text>
                        <TextInput value={name} style={styles.input} onPressIn={()=>{setErrormsg(null)}} onChangeText={(txt)=>{SetName(txt)}}  />
                        
                        {/* {console.log(firstname)} */}

                        <Text style={{alignSelf:'flex-start',color:'black',fontSize:15,margin:10,marginLeft:20}}>Gender</Text>
                        <TextInput  style={styles.input} onPressIn={()=>{setErrormsg(null)}} value={gender} onChangeText={(gender)=>{SetGender(gender)}}  />


                        <Text style={{alignSelf:'flex-start',color:'black',fontSize:15,margin:10,marginLeft:20}}>Phone Number</Text>
                        <TextInput style={styles.input} onPressIn={()=>{setErrormsg(null)}} keyboardType="numeric" onChangeText={(phone)=>{SetPhoneno(phone)}} value={phoneno} placeholder="Enter Phone"/>

                        <Text style={{alignSelf:'flex-start',color:'black',fontSize:15,margin:10,marginLeft:20}}>Country</Text>
                        <TextInput style={styles.input} onPressIn={()=>{setErrormsg(null)}} onChangeText={(country)=>{SetCountry(country)}} value={country} placeholder="Enter Country"/>
              
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
                            style={styles.input}
                            onPressIn={() => {
                              setErrormsg(null);
                            }}
                            onChangeText={(text) => {
                              setDob(text);
                            }}
                            value={dob}
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
                            style={styles.input}
                            onPressIn={() => {
                              setErrormsg(null);
                              setIsCnicEntered(false);
                            }}
                            onChangeText={handleCnicChange}
                            placeholder="XXXXX-XXXXXXX-X"
                            keyboardType="numeric"
                            value={cnic}

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
              {profiledata.SelectedvaccineString}
                Previous Vaccination
              </Text>
              <View style={{ marginLeft: 20 }}>
                {vaccines.map((vaccine, index) => {
                  const isSelected = profiledata.SelectedvaccineString  && profiledata.SelectedvaccineString.includes(vaccine.name);
                  return (
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} key={index}>
                      <CheckBox
                        checked={vaccine.checked || isSelected} // Auto-check if it was selected
                        onPress={() => {
                          const updatedVaccines = [...vaccines];
                          updatedVaccines[index].checked = !vaccines[index].checked;
                          setVaccines(updatedVaccines);
                        }}
                      />
                      <Text style={{ marginLeft: 10 }}>{vaccine.name}</Text>
                    </View>
                  );
                })}
              </View>


                        {/* <Text style={{alignSelf:'flex-start',color:'black',fontSize:15,margin:10,marginLeft:20}}>Images</Text>  
                        <TextInput style={styles.input} onChangeText={(country)=>{setcountry(country)}}  placeholder="Enter Image"/> */}


                        <Pressable onPress={ 
                            (e)=>{
                                senddata();
                            }
                         }> 
                            <Text style={{borderRadius:10,alignSelf:'center',color:'white',fontSize:15,marginTop:20,backgroundColor:'#E92424',height:40,width:"60%",textAlign:'center',padding:10,fontWeight:'bold'}}>Profile</Text>
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