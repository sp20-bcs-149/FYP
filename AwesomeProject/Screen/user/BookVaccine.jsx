import React from 'react';
import { Text,View,StyleSheet,ScrollView } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';


const BookVaccine = () => {
  return (
    <>
            <View style={style.container}>
            <ScrollView style={{width:'100%'}}>
                <View style={{flex:1/10,backgroundColor:'#3C7DA3',width:'100%'}}> 
                    <Text style={{color:'white',marginTop:30,fontSize:25,textAlign:'center',fontWeight:'900'}}>
                        Book Vaccine
                    </Text>
                </View>

                <View style={{flex:9/10,backgroundColor:'#FFFFFF',width:"100%",alignItems:'center'}}> 
                    <Text style={{alignSelf:'flex-start',margin:22,color:'gray'}}>Book Slot</Text>
                    {/* 1 - start */}
                    <View style={{backgroundColor:"#E6EDED",width:"90%",height:100,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                        <View style={{width:"100%",justifyContent:'space-around',flexDirection:'row'}}>
                            <Ionicons name='person' size={35} color='black' />
                            <Text style={{fontSize:25,fontWeight:'bold'}}>Adil Hussain</Text>
                            <View><Text style={{backgroundColor:'#329998',color:'white'}}>Male</Text></View>
                        </View>
                        <View style={style.line}></View>
                        <View style={{width:"100%",justifyContent:'space-around',flexDirection:'row'}}>
                            <View><Text style={{fontSize:11,}}>Age : 22 Year</Text></View>
                            <View><Text style={{fontSize:11,}}>Weight : 89 Kg</Text></View>
                            <View><Text style={{fontSize:11,}}>Height : 72.00 Cm</Text></View>
                        </View>

                    </View>
                    {/* 1 - end */}
                </View>
                
                <View style={style.line}></View>

                <View style={{flex:9/10,backgroundColor:'#FFFFFF',width:"100%",justifyContent:'center',flexWrap:'wrap'}}> 
                    <Text style={{alignSelf:'flex-start',margin:22,color:'gray'}}>Free Slot</Text>
                    {/* 1 - start */}
                    <View style={{flexWrap:'wrap',justifyContent:'center',alignContent:'center',width:"100%",flexDirection:'row'}}>
                        <Text style={{ backgroundColor:'#3C7DA3',padding:10,borderRadius:20,color:'#FFFFFF',textAlign:'center',marginLeft:20,marginTop:20,}}>10 : 00 AM</Text>
                        <Text style={{backgroundColor:'#3C7DA3',padding:10,borderRadius:20,color:'#FFFFFF',textAlign:'center',marginLeft:20,marginTop:20,}}>10 : 00 AM</Text>
                        <Text style={{backgroundColor:'#3C7DA3',padding:10,borderRadius:20,color:'#FFFFFF',textAlign:'center',marginLeft:20,marginTop:20,}}>10 : 00 AM</Text>
                        <Text style={{backgroundColor:'#3C7DA3',padding:10,borderRadius:20,color:'#FFFFFF',textAlign:'center',marginLeft:20,marginTop:20,}}>10 : 00 AM</Text>
                        <Text style={{backgroundColor:'#3C7DA3',padding:10,borderRadius:20,color:'#FFFFFF',textAlign:'center',marginLeft:20,marginTop:20,}}>10 : 00 AM</Text>
                        <Text style={{backgroundColor:'#3C7DA3',padding:10,borderRadius:20,color:'#FFFFFF',textAlign:'center',marginLeft:20,marginTop:20,}}>10 : 00 AM</Text>
                        <Text style={{backgroundColor:'#3C7DA3',padding:10,borderRadius:20,color:'#FFFFFF',textAlign:'center',marginLeft:20,marginTop:20,}}>10 : 00 AM</Text>
                        <Text style={{backgroundColor:'#3C7DA3',padding:10,borderRadius:20,color:'#FFFFFF',textAlign:'center',marginLeft:20,marginTop:20,}}>10 : 00 AM</Text>
                        <Text style={{backgroundColor:'#3C7DA3',padding:10,borderRadius:20,color:'#FFFFFF',textAlign:'center',marginLeft:20,marginTop:20,}}>10 : 00 AM</Text>
                        <Text style={{backgroundColor:'#3C7DA3',padding:10,borderRadius:20,color:'#FFFFFF',textAlign:'center',marginLeft:20,marginTop:20,}}>10 : 00 AM</Text>
                        <Text style={{backgroundColor:'#3C7DA3',padding:10,borderRadius:20,color:'#FFFFFF',textAlign:'center',marginLeft:20,marginTop:20,}}>10 : 00 AM</Text>
                        <Text style={{backgroundColor:'#3C7DA3',padding:10,borderRadius:20,color:'#FFFFFF',textAlign:'center',marginLeft:20,marginTop:20,}}>10 : 00 AM</Text>
                        <Text style={{backgroundColor:'#3C7DA3',padding:10,borderRadius:20,color:'#FFFFFF',textAlign:'center',marginLeft:20,marginTop:20,}}>10 : 00 AM</Text>
                        <Text style={{backgroundColor:'#3C7DA3',padding:10,borderRadius:20,color:'#FFFFFF',textAlign:'center',marginLeft:20,marginTop:20,}}>10 : 00 AM</Text>
                        <Text style={{backgroundColor:'#3C7DA3',padding:10,borderRadius:20,color:'#FFFFFF',textAlign:'center',marginLeft:20,marginTop:20,}}>10 : 00 AM</Text>
                        <Text style={{backgroundColor:'#3C7DA3',padding:10,borderRadius:20,color:'#FFFFFF',textAlign:'center',marginLeft:20,marginTop:20,}}>10 : 00 AM</Text>
                        <Text style={{backgroundColor:'#3C7DA3',padding:10,borderRadius:20,color:'#FFFFFF',textAlign:'center',marginLeft:20,marginTop:20,}}>10 : 00 AM</Text>
                        <Text style={{backgroundColor:'#3C7DA3',padding:10,borderRadius:20,color:'#FFFFFF',textAlign:'center',marginLeft:20,marginTop:20,}}>10 : 00 AM</Text>
                        <Text style={{backgroundColor:'#3C7DA3',padding:10,borderRadius:20,color:'#FFFFFF',textAlign:'center',marginLeft:20,marginTop:20,}}>10 : 00 AM</Text>
                        <Text style={{backgroundColor:'#3C7DA3',padding:10,borderRadius:20,color:'#FFFFFF',textAlign:'center',marginLeft:20,marginTop:20,}}>10 : 00 AM</Text>
                        <Text style={{backgroundColor:'#3C7DA3',padding:10,borderRadius:20,color:'#FFFFFF',textAlign:'center',marginLeft:20,marginTop:20,}}>10 : 00 AM</Text>

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
        backgroundColor: '#B9B0B0', // Set your desired line color
        margin:20,
  },
})

export default BookVaccine;