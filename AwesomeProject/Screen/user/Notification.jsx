import React,{useState,useEffect} from "react";
import { View, Text, FlatList, StyleSheet, ScrollView,TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import myURL from "../../services/myurls";
import axios from "axios";
import { useRoute } from "@react-navigation/native";

const Notification = ({navigation}) => {
  const route = useRoute();
  let Token_id = route.params?.token_id;

    const [mydata,setResData] = useState([]);

    
    const getpendingAppointment = () => {

    axios
      .get(`${myURL}/user/scheduleAppointment/notification/`)
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



  function handleAppointmentPress(item) {
    console.log('Pressed appointment:', item);
  }
  const renderAppointment = ({ item }) => (
    
    <TouchableOpacity onPress={() => handleAppointmentPress(item)}>
    <View style={styles.appointmentContainer}>
    <Text style={styles.Pname}>Patient Name: {item.patientName}</Text>
      <Text style={styles.Vname}>Vaccine Name: {item.selectedVaccine}</Text>
      <Text style={styles.cnic}>CNIC: {item.cnicNumber}</Text>
      <Text style={styles.date}>Appointment Date: {item.selectedDay}</Text>
      <Text style={styles.Cname}>Clinic: {}</Text>
      <Text style={styles.Cname}>Type: {item.my_ID == Token_id ? 'User' : 'Family' }</Text>
    </View>
  </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={{
        backgroundColor: "#329998",
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        borderRadius: 10,
        flexDirection:'row'
      }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{backgroundColor:''}}>
              <Text style={{ color: '#fff', fontSize: 20,  marginTop: 0,marginLeft:0, marginRight: 30, }}>&#x2190;</Text>
          </TouchableOpacity>
        <Text style={styles.headerText}>Notifications/Alerts</Text>
      </View>
      <FlatList
        data={mydata}
         // keyExtractor={(item) => item.id.toString()}
        renderItem={renderAppointment}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 30,
    // alignItems:'center'
  },
  Vname:{
 fontSize: 15,
//  fontWeight:'bold',
//  alignSelf:'center'
  },
  header: {
    backgroundColor: "#329998",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
  },
  appointmentContainer: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    // alignItems:'center',
    // justifyContent:'center',

  },
  Pname:{
    fontSize:15,
    fontWeight:'bold'
  }
});

export default Notification;