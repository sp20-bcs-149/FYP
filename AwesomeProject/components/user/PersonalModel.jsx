import React, { useState } from 'react';
import {View ,Text, StyleSheet, ScrollView, SafeAreaView,Image,Pressable,Modal,TextInput,Alert} from 'react-native';
import axios from 'axios';
import MyComponentAlert from './AlertCall';
import { CheckBox } from 'react-native-elements';

import myURL from '../../services/myurls';

const PersonalModel = ({navigation,modalVisible,setModalVisible,token}) => {


  // user register _id and Role get Here and pass to the post method

    console.log(" TOKEN  " + token._id);    
    const my_ID = token._id;
    const my_ROLE = token.role;
    // const [modalVisible, setModalVisible] = useState(false);
    const [name,SetName] = useState('');
    const [gender,SetGender] = useState('');
    const [country,SetCountry] = useState('');
    const [phoneno,SetPhoneno] = useState('');
    const [dob, setDob] = useState(""); 
    const [cnic, setCnic] = useState("");
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


    const [errormsg ,setErrormsg] = useState(null);
    
    async function senddata(){
        const selectedVaccines = vaccines.filter(vaccine => vaccine.checked).map(vaccine => vaccine.name);
        const SelectedvaccineString = JSON.stringify(selectedVaccines.join(','));
        console.log("SELECTED VACCINE  : " + SelectedvaccineString);

        axios
          .post(myURL+"/OnlyUserRoutes/profile", {my_ID,my_ROLE,name,gender,country,phoneno,dob, cnic,SelectedvaccineString})
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
                        <TextInput style={styles.input} onPressIn={()=>{setErrormsg(null)}} onChangeText={(name)=>{SetName(name)}} placeholder='Enter Name'/>
                        
                        {/* {console.log(firstname)} */}

                        <Text style={{alignSelf:'flex-start',color:'black',fontSize:15,margin:10,marginLeft:20}}>Gender</Text>
                        <TextInput style={styles.input} onPressIn={()=>{setErrormsg(null)}} onChangeText={(gender)=>{SetGender(gender)}}  placeholder="Enter Gender"/>


                        <Text style={{alignSelf:'flex-start',color:'black',fontSize:15,margin:10,marginLeft:20}}>Phone Number</Text>
                        <TextInput style={styles.input} onPressIn={()=>{setErrormsg(null)}} keyboardType="numeric" onChangeText={(phone)=>{SetPhoneno(phone)}}  placeholder="Enter Phone"/>

                        <Text style={{alignSelf:'flex-start',color:'black',fontSize:15,margin:10,marginLeft:20}}>Country</Text>
                        <TextInput style={styles.input} onPressIn={()=>{setErrormsg(null)}} onChangeText={(country)=>{SetCountry(country)}}  placeholder="Enter Country"/>
              
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
                            value={cnic}
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
                {vaccines.map((vaccine, index) => (
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} key={index}>
                    <CheckBox
                      checked={vaccine.checked}
                      onPress={() => {
                        const updatedVaccines = [...vaccines];
                        updatedVaccines[index].checked = !vaccines[index].checked;
                        setVaccines(updatedVaccines);
                      }}
                    />
                    <Text style={{ marginLeft: 10 }}>{vaccine.name}</Text>
                  </View>
                ))}
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
}
 


const styles = StyleSheet.create({
// 
// 
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    flex:9/10,
    width:'90%',
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
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    marginTop:20,
    // backgroundColor: 'white',
    borderWidth:2,
    borderColor:"#2196F3",
    padding:15,   
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
    input:{
        backgroundColor:"white",
        width:"90%",
        height:40,
        alignSelf:'center',
        borderRadius:5,
        paddingLeft:10,
        borderWidth:2,
        borderColor:'gray'
    },


})




export default PersonalModel;