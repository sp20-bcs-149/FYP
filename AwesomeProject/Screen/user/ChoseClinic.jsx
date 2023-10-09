import React from 'react';
import { Text,View,StyleSheet,ScrollView,TouchableOpacity } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';


const ChoseClinic = ({navigation}) => {
  return (
    <>
            <View style={style.container}>
            <ScrollView width="100%">
                <View style={{flex:1/10,backgroundColor:'white',width:'100%'}}> 
                    <Text style={{color:'black',marginTop:30,fontSize:20,textAlign:'center',fontWeight:'700'}}>
                        Select Clinic
                    </Text>
                </View>
                <View style={{flex:9/10,backgroundColor:'#FFFFFF',width:"100%",alignItems:'center'}}> 


                    {/* 1 - start */}
                    <View style={{backgroundColor:"#329998",width:"90%",height:100,borderRadius:10,justifyContent:'space-evenly',alignItems:'center',marginTop:20}}>
                        <View style={{width:"100%",justifyContent:'space-evenly',flexDirection:'row'}}>
                            {/* <Ionicons name='person' size={35} color='black' /> */}
                            <View style={{flexDirection:'column'}}>    
                                <Text style={{fontSize:25,fontWeight:'bold',color:'white'}}>Text Clinic</Text>
                                <View><Text style={{fontSize:11,color:'white'}}>Vaccines on the Official Vaccines pages ... </Text></View>
                            </View>
                        </View>
                        <View style={style.line}></View>
                        <View style={{width:"100%",justifyContent:'space-around',flexDirection:'row'}}>
                            <View style={{margin:10,backgroundColor:'white',borderRadius:10,}}><Text style={{fontSize:12,marginLeft:20,marginRight:20}}>Location</Text></View>
                            <TouchableOpacity onPress={()=>{
                                navigation.navigate("VaccineSelection")
                            }}>
                                <View style={{margin:10,backgroundColor:'white',borderRadius:10,}}><Text style={{fontSize:12,marginLeft:20,marginRight:20}}>Book</Text></View>
                            </TouchableOpacity>
                        </View>

                    </View>
                    {/* 1 - end */}


                </View>
                </ScrollView>
            </View>
    </>
  )
}

const style = StyleSheet.create({
    container : {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    }
    ,
    line: {
        height: 1,
        width:'90%',
        backgroundColor: '#B9B0B0',
  },
})

export default ChoseClinic;