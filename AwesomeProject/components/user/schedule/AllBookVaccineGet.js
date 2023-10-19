import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, } from "react-native";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook
import axios from "axios";
import myURL from "../../../services/myurls";
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
const AllPending = () => {
  const route = useRoute();
  let token_id = route.params?.token_id;
  const navigation = useNavigation(); // Initialize the navigation object
    const [data,setResData] = useState([]);

    
  const getpendingAppointment = () => {
    axios
      .get(`${myURL}/user/scheduleAppointment/All/pending/?User_Token_id=${token_id}`)
      .then((res) => {
        console.log("match User ID" + res.data);
        setResData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(()=>{
    getpendingAppointment();
  },[])

  const handleBackButton = () => {
    navigation.goBack(); // Navigate back
  };

  return (
    <ScrollView style={styles.container}>
      <Header
        icon={require("../../src/images/backbutton.png")}
        title={"All Appointments"}
        navigation={navigation} // Pass the navigation prop
      />
      <View>
      {
          data.map((item,index)=>(
              <View key={index} style={styles.itemView}>
                <Image
                  source={require("../../src/images/vac.png")}
                  style={styles.docImage}
                />
                <View>
                  <Text style={styles.name}>{item.selectedVaccine}</Text>
                  <Text style={styles.timing}>{item.currentTime} AM</Text>
                  <Text style={styles.timing}>{item.patientName}</Text>
                  <Text style={styles.timing}>TYPE : {item.my_ID == item.User_Token_id ? <><Text style={{fontWeight:'bold'}}>User</Text> <Text style={{color:'gray'}}>/Family</Text></> : <><Text style={{color:'gray'}}>User/</Text> <Text style={{fontWeight:'bold'}}>Family</Text></>}</Text>
                </View>
                <Text style={{    marginLeft:0,    borderRadius: 10,backgroundColor: "#f2f2f2", padding: 5,color: item.status == 'pending'? "orange": 'green',}}>{item.status}</Text>
              </View>
              ))
      }

      
      </View>
    </ScrollView>
  );
};

export default AllPending;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemView: {
    width: "94%",
    height: 100,
    borderRadius: 10,
    borderWidth: 0.5,
    alignSelf: "center",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  docImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 20,
  },
  timing: {
    fontSize: 16,
    marginLeft: 20,
    marginTop: 5,
  },
  status: {
    marginLeft: 60,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    padding: 5,
    color: "orange",
  },
});
