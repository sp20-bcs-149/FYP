import React, { useState } from 'react';
import {View ,Text, StyleSheet, ScrollView, SafeAreaView,Image,Pressable,Modal,TextInput,Alert} from 'react-native';
import axios from 'axios';
import MyComponentAlert from '../../components/user/AlertCall';
import { useRoute } from '@react-navigation/native';
import myURL from '../../services/myurls';

const NewsSendUpdate = ({navigation}) => {
  const route = useRoute();
  let id = route.params?.id;

  // user register _id and Role get Here and pass to the post method


    // const [modalVisible, setModalVisible] = useState(false);
    const [vaccine_name,Setvaccine_name] = useState('');
    const [information,Setinformation] = useState('');
    const [allergies,Setallergies] = useState('');
    const [treatment, Settreatment] = useState('');
    const [Detail,SetDetail] = useState('');
    const [side_effect,Setside_effect] = useState('');

    const [errormsg ,setErrormsg] = useState(null);
    
    async function senddata(){
      if(!vaccine_name || !information || !allergies || !treatment || !Detail || !side_effect){
              setErrormsg("Please fillout all the filled !!! ");
      }
      // else if(symptoms.length > 13){
      //     setErrormsg("CNIC should be 13 character long ,No space or Dash  !!! ");
      // }
      // else if(prevention.length > 2)
      // {
      //     setErrormsg("Please Insert the correct Age which should not greater than 100 !!! ");
      // }
      else{
        axios
          .put(myURL+"/admin/news/"+id, {vaccine_name,information,allergies,treatment,Detail,side_effect})
          .then((res) => {
          console.log(res.data);
          navigation.navigate("NewsAdmin")
          Alert.alert("UPDATE NEWS");

          
          // {Alert.alert("Hi")}
          })
          .catch((err)=> {
          console.log(err);
          })

      }

    }

    return (  
        <>
                <View style={{flex:1/10,backgroundColor:'#329998',width:'100%'}}> 
                    <Text style={{color:'white',marginTop:30,fontSize:25,textAlign:'center',fontWeight:'900'}}>
                        News
                    </Text>
                </View>
                    <View style={styles.centeredView}>

                    <View style={styles.modalView}>
                        <ScrollView style={{width:"100%"}}>

                         <Text style={{alignSelf:'center',fontSize:10,marginTop:20}}>      
                          {
                              errormsg ? (<View style={{backgroundColor:"#E92424",margin:10}}><Text style={{alignSelf:'center',borderRadius:10,padding:5,color:'white',fontSize:10}}>{errormsg}</Text></View>) : null 
                          }
                         </Text>

                        <Text style={{alignSelf:'flex-start',color:'black',fontSize:15,margin:10,marginLeft:20}}>Vaccine Name</Text>
                        <TextInput style={styles.input} onPressIn={()=>{setErrormsg(null)}} onChangeText={(name)=>{Setvaccine_name(name)}} placeholder='Enter Name'/>
                        
                        {/* {console.log(firstname)} */}

                        <Text style={{alignSelf:'flex-start',color:'black',fontSize:15,margin:10,marginLeft:20}}>Vaccine Information</Text>
                        <TextInput style={styles.input} onPressIn={()=>{setErrormsg(null)}} onChangeText={(gender)=>{Setinformation(gender)}}  placeholder="Enter Gender"/>

                        <Text style={{alignSelf:'flex-start',color:'black',fontSize:15,margin:10,marginLeft:20}}>Allergies Reaction</Text>
                        <TextInput style={styles.input} onPressIn={()=>{setErrormsg(null)}}  onChangeText={(cnic)=>{Setallergies(cnic)}}  placeholder="Enter CNIC [without -]"/>

                        <Text style={{alignSelf:'flex-start',color:'black',fontSize:15,margin:10,marginLeft:20}}>Treatment</Text>
                        <TextInput style={styles.input} onPressIn={()=>{setErrormsg(null)}}  onChangeText={(age)=>{Settreatment(age)}}  placeholder="Enter Age  "/>

                        <Text style={{alignSelf:'flex-start',color:'black',fontSize:15,margin:10,marginLeft:20}}>Details</Text>
                        <TextInput style={styles.input} onPressIn={()=>{setErrormsg(null)}}  onChangeText={(phone)=>{SetDetail(phone)}}  placeholder="Enter Phone"/>

                        <Text style={{alignSelf:'flex-start',color:'black',fontSize:15,margin:10,marginLeft:20}}>Side Effect</Text>
                        <TextInput style={styles.input} onPressIn={()=>{setErrormsg(null)}} onChangeText={(country)=>{Setside_effect(country)}}  placeholder="Enter Country"/>
                        {/* <Text style={{alignSelf:'flex-start',color:'black',fontSize:15,margin:10,marginLeft:20}}>Images</Text>
                        <TextInput style={styles.input} onChangeText={(country)=>{setcountry(country)}}  placeholder="Enter Image"/> */}


                        <Pressable onPress={ 
                            (e)=>{
                                senddata();
                            }
                         }> 
                            <Text style={{borderRadius:10,alignSelf:'center',color:'white',fontSize:15,marginTop:20,backgroundColor:'#329998',height:40,width:"60%",textAlign:'center',padding:10,fontWeight:'bold'}}>Send News</Text>
                        </Pressable>
                        {/* <MyComponentAlert /> */}

                        </ScrollView>
                    </View>
                    </View>

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




export default NewsSendUpdate;