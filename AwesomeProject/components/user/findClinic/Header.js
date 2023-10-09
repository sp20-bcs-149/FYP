import { View, Text, Image, StyleSheet, TextInput, Dimensions, Pressable } from 'react-native'
import React from 'react'
import Colors from './Colors'
import { Ionicons } from "@expo/vector-icons";

export default function Header({navigation}) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        alignItems: "center",
      }}
    >
      {/* <Image
        source={require("./../../../assets/logo.png")}
        style={styles.logo}
      /> */}

      {/* <Pressable onPress={()=>{navigation.navigate("Search");}}>
        <Ionicons name="search-circle" size={35} color="black" />
      </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
    logo:{
      width:50,
      height:50  
    },
    searchBar:{
        borderWidth:1,
        borderColor:Colors.GRAY,
        padding:4,
        borderRadius:50,
        paddingLeft:10,
        width:Dimensions.get('screen').width*0.53,
        borderColor:Colors.PRIMARY,
        
    },
    userImage:{
        width:50,
        height:50,
        borderRadius:100
    }
})