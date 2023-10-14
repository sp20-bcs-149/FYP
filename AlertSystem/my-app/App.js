import React from "react";
import { View, Text, FlatList, StyleSheet, ScrollView,TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const App = () => {
  const bookedAppointments = [
    {
      id: 1,
      vaccineName: "Polio",
      patientName: "Alex",
      cnic: "35202-9830909-7",
      clinicName: "Clinix Clinic",
      date: "12/06/2023",
    },
    {
      id: 2,
      vaccineName: "Flu",
      patientName: "John",
      cnic: "35202-9830909-8",
      clinicName: "MediCare Center",
      date: "12/07/2023",
    },
    {
      id: 3,
      vaccineName: "COVID-19",
      patientName: "Jane",
      cnic: "35202-9830909-9",
      clinicName: "City Hospital",
      date: "12/08/2023",
    },
    {
      id: 4,
      vaccineName: "Hepatitis B",
      patientName: "Tom",
      cnic: "35202-9830909-6",
      clinicName: "Healthcare Hub",
      date: "12/09/2023",
    },
    {
      id: 5,
      vaccineName: "Measles",
      patientName: "Mary",
      cnic: "35202-9830909-5",
      clinicName: "Wellness Clinic",
      date: "12/10/2023",
    },
    {
      id: 6,
      vaccineName: "DTP",
      patientName: "Ella",
      cnic: "35202-9830910-1",
      clinicName: "Wellness Clinic",
      date: "12/11/2023",
    },
    {
      id: 7,
      vaccineName: "Typhoid",
      patientName: "Oliver",
      cnic: "35202-9830910-2",
      clinicName: "MediCare Center",
      date: "12/12/2023",
    },
    {
      id: 8,
      vaccineName: "Hepatitis A",
      patientName: "Liam",
      cnic: "35202-9830910-3",
      clinicName: "City Hospital",
      date: "12/13/2023",
    },
    {
      id: 9,
      vaccineName: "MMR",
      patientName: "Sophia",
      cnic: "35202-9830910-4",
      clinicName: "Healthcare Hub",
      date: "12/14/2023",
    },
    {
      id: 10,
      vaccineName: "Chickenpox",
      patientName: "Mia",
      cnic: "35202-9830910-5",
      clinicName: "Clinix Clinic",
      date: "12/15/2023",
    },
  ];

  function handleAppointmentPress(item) {
    console.log('Pressed appointment:', item);
  }
  const renderAppointment = ({ item }) => (
    
    <TouchableOpacity onPress={() => handleAppointmentPress(item)}>
    <View style={styles.appointmentContainer}>
    <Text style={styles.Pname}>Patient Name: {item.patientName}</Text>
      <Text style={styles.Vname}>Vaccine Name: {item.vaccineName}</Text>
      <Text style={styles.cnic}>CNIC: {item.cnic}</Text>
      <Text style={styles.date}>Appointment Date: {item.date}</Text>
      <Text style={styles.Cname}>Clinic: {item.clinicName}</Text>
    </View>
  </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notifications/Alerts</Text>
      </View>
      <FlatList
        data={bookedAppointments}
        keyExtractor={(item) => item.id.toString()}
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

export default App;
