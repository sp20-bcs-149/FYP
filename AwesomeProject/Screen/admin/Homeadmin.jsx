import React, { useState } from 'react';
import {View ,Text, StyleSheet, ScrollView, SafeAreaView,Image,Pressable,Modal,TextInput,Alert} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import virusimage from  '../../assets/viirus.jpg';


const Homeadmin = ({navigation}) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return (
        // <SafeAreaView>
            <View style={{flex:1,backgroundColor:'#329998'}}>            
                <ScrollView>
                    <View style={styles.slider}>
                        <Image  source={virusimage} style={{width:"100%",height:200,}} />
                    </View>
                    <View style={{justifyContent:'center',alignItems:'flex-end',marginTop:30,marginRight:30}}>
                        <Text style={{fontWeight:'bold',color:'white'}}>Welcome Admin! </Text>
                    </View>
                    <View style={{marginTop:0,alignSelf:'center',}}><Text style={{alignSelf:'center',fontSize:35,fontWeight:'bold',marginTop:0}}><Text style={{color:"white",fontSize:40}}>V</Text>accine <Text style={{color:"white",fontSize:35}}>A</Text>pp</Text></View>

                    <View style={styles.record}>
{/* 1 */}
                        <Pressable
                        // style={[styles.button, styles.buttonClose]}
                        onPress={
                            () => navigation.navigate("")
                            // () => setModalVisible(!modalVisible)
                            
                        }>
                            <View style={{backgroundColor:"#94D8D7",width:150,height:150,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
                                <Ionicons name='person' size={45} color='white' />
                                <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Personal</Text>
                                <Text style={{color:"white"}}>Profile</Text>
                            </View>
                        </Pressable>
{/* 2 */}
                        <Pressable
                        // style={[styles.button, styles.buttonClose]}
                        onPress={
                            () => navigation.navigate("")
                            // () => setModalVisible(!modalVisible)
                            
                        }>
                            <View style={{backgroundColor:"#94D8D7",width:150,height:150,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
                                <Ionicons name="notifications-circle" size={45} color="white" />

                                <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Vaccine </Text>
                                <Text style={{color:"white"}}>Notification</Text>
                            </View>
                        </Pressable>

{/* 2 */}
                        <Pressable
                        // style={[styles.button, styles.buttonClose]}
                        onPress={
                            () => navigation.navigate("AlertSend")
                            // () => setModalVisible(!modalVisible)
                            
                        }>
                            <View style={{backgroundColor:"#94D8D7",width:150,height:150,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
                                <Foundation name="alert" size={45} color="white" />


                                <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Alert </Text>
                                <Text style={{color:"white"}}>System</Text>
                            </View>
                        </Pressable>
{/* 2 */}
                        <Pressable
                        // style={[styles.button, styles.buttonClose]}
                        onPress={
                            () => navigation.navigate("NewsSend")
                            // () => setModalVisible(!modalVisible)
                            
                        }>
                            <View style={{backgroundColor:"#94D8D7",width:150,height:150,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
                                <MaterialCommunityIcons name="newspaper-variant" size={45} color="white" />


                                <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>NEWS</Text>
                                <Text style={{color:"white"}}>System</Text>
                            </View>
                        </Pressable>





                    </View>
                </ScrollView>
            </View>
        // </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    top: {
        flex :0.3/10,
        flexDirection:'row',
        justifyContent:'space-between',
        margin : 25,
        alignContent:'space-around',
        TextColor:"white",
    },
    slider : {
        flex:2.5/10,
        backgroundColor:"white",
        margin:0,
    },
    record :{
        flex:1.5/10,
        flexDirection:'row',
        justifyContent:'space-between',
        margin:20,
        // backgroundColor:'orange',
        alignItems:'center',
        flexWrap:'wrap',

      },
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


export default Homeadmin;
