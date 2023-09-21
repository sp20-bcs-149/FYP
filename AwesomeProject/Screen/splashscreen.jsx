import React from "react";
import {Text,View,StyleSheet,SafeAreaView,Image, TouchableOpacity} from 'react-native';

import splashimage from "../assets/promo.png";


const SplashScreen = ({navigation}) => {
    return ( 
        <>
            <SafeAreaView style={styles.container}>
                <View style={{marginTop:40,alignSelf:'center'}}><Text style={{fontWeight:'bold',fontSize:20}}><Text style={{color:"#329998",fontSize:25}}>V</Text>accine <Text style={{color:"#329998",fontSize:25}}>A</Text>pp</Text></View>
                <View style={{flex:7/10,backgroundColor:"white",margin:40,borderRadius:20,}}><Image style={{margin:-5,resizeMode:"center",maxWidth:"100%",maxHeight:"100%"}} source={splashimage} /></View>
                <View style={{marginTop:40,alignSelf:'center'}}><Text style={{fontSize:20,fontWeight:'900'}}>Go & Get Vaccine!</Text></View>

                <View style={{marginTop:40,alignSelf:'center',margin:0}}><Text>“Your Health, Our Priority. Track</Text></View>
                <View style={{alignSelf:'center'}}><Text>Your Vaccine Progress”</Text></View>

                <TouchableOpacity onPress={()=>{navigation.navigate("Home")}} >
                    <View style={{marginTop:60,alignSelf:'center',backgroundColor:'#329998',padding:10,width:180,borderRadius:20}}><Text style={{alignSelf:'center',fontWeight:'bold',color:"white"}}>Next</Text></View>
                </TouchableOpacity>
            </SafeAreaView>
        </>
     );
}
 

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:"EDEEEF"

    }
})

export default SplashScreen;