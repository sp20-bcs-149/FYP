import React, { useState } from 'react';
import {View ,Text, StyleSheet, ScrollView, SafeAreaView,Image,Pressable,Modal,TextInput,Alert} from 'react-native';
import axios from 'axios';
import MyComponentAlert from '../AlertCall';
import myURL from '../../../services/myurls';

const CreateRecordModel = ({ navigation, modalVisible, setModalVisible, my_ID }) => {
  // user register _id and Role get Here and pass to the post method

  console.log(" my_ID in Folder_Name  " + my_ID);
  const [name, Setname] = useState("");
  const [gender, Setgender] = useState("");
  const [height, Setheight] = useState("");
  const [weight, Setweight] = useState("");
  const [medical_history, Setmedical_history] = useState("");
  const [age, Setage] = useState("");

  
  const [errormsg, setErrormsg] = useState(null);

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
                style={{ alignSelf: "center", fontSize: 10, marginTop: 20 }}
              >
                {errormsg ? (
                  <View style={{ backgroundColor: "#C2185B", margin: 10 }}>
                    <Text
                      style={{
                        alignSelf: "center",
                        borderRadius: 10,
                        padding: 5,
                        color: "white",
                        fontSize: 10,
                      }}
                    >
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
                Medical_history
              </Text>
              <TextInput
                style={styles.input}
                onPressIn={() => {
                  setErrormsg(null);
                }}
                onChangeText={(text) => {
                  Setmedical_history(text);
                }}
                placeholder="Medical history"
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
                Age
              </Text>
              <TextInput
                style={styles.input}
                onPressIn={() => {
                  setErrormsg(null);
                }}
                onChangeText={(text) => {
                  Setage(text);
                }}
                placeholder="Age"
              />

              <Pressable
                onPress={(e) => {
                  axios
                    .post(myURL + "/family/familyInside", { my_ID, name,gender,height,weight,medical_history,age })
                    .then((res) => {
                      console.log(res.data);
                      console.log("Profile Save!! ");
                      setModalVisible(!modalVisible);
                      Alert.alert("SAVE PROFILE");
                      pullMe();
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
                  Create
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




export default CreateRecordModel;