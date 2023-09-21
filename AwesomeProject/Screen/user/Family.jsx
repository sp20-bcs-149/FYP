import React,{useState,useEffect} from "react";
import {View,Text, SafeAreaView, StyleSheet, ScrollView,Pressable,FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import PersonalModel from "../../components/user/PersonalModel";
import myURL from "../../services/myurls";
import axios from "axios";
import Ionicons from '@expo/vector-icons/Ionicons';
const Family = ({navigation}) => {

//map
    const [data, setData] = useState([]);

    console.log(" ====>setDATA FAMILY " + JSON.stringify(data));
    // console.log("=========================>HOME USER TOKEN USER SERVICE" + JSON.stringify(userService.getLoggedInUser()));
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
    try {
      const response = await axios.get(myURL+'/family/?my_ID=64ec3b18abb2135f54d8c8ae');
      setData(response.data);
      console.log("============>FAMILY DATA: " + JSON.stringify(response.data));

    } catch (error) {
      console.error(error);
    }
    };




    return(
        data ? (
        <>
            <View style={style.container}>
                <ScrollView>

                <View style={{flex:1/10,backgroundColor:'#3C7DA3',width:'100%'}}> 
                    <Text style={{color:'white',marginTop:30,marginBottom:10,fontSize:25,textAlign:'center',fontWeight:'900'}}>
                        Family : {}
                    </Text>
                </View>
                <View style={{flex:9/10,backgroundColor:'#FFFFFF',width:'100%',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}> 
                    {/* 1 - start */}
                     <Pressable
                        // style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                    <View style={{backgroundColor:"#3C7DA3",width:150,height:150,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
                        <Ionicons name='person' size={45} color='white' />
                        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Child</Text>
                        <Text style={{color:"white"}}>Profile</Text>
                    </View>
                    </Pressable>
                    {/* 1 - end */}

                    {/* 1 - start */}
                    <View style={{backgroundColor:"#3C7DA3",width:150,height:150,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
                        <Ionicons name='person' size={45} color='white' />
                        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Mother</Text>
                        <Text style={{color:"white"}}>Profile</Text>
                    </View>

{/* 
                    {data.map((item) => (
                            <View key={item.id} style={{backgroundColor:"lightgray",width:150,height:150,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
                                <AntDesign name="addfolder" size={50} color="white" />

                                <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>ADD</Text>
                                <Text style={{color:"white"}}>New Profile</Text>
                            </View>
                    ))}         */}
                    {/* 1 - end */}   
                    





                </View>
                
                </ScrollView>
{/* Profile MODEL start */}

                {/* <PersonalModel  modalVisible={modalVisible} setModalVisible={setModalVisible} /> */}

{/* Profile Model End */}
            </View>
        </>
        ):(
            <Text>LOADINg....</Text>
        )
    )

}


const style = StyleSheet.create({
    container : {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:"100%",
       

    }
})


export default Family;