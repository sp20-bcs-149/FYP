import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  Dimensions,
  Linking
} from "react-native";
import Header from "./Header";
import { FlatList } from "react-native";
import CommonBtn from "./CommonBtn";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import myURL from "../../../services/myurls";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

// GET => Clicked Clinic name , clinic vaccine registered, 
// post => clinic id, vaccine name, data , slot, user_id & name, cnic 
// post => clinic id, vaccine name, date , slot, name, cnic 
const BookAppointment = ({ navigation }) => {
  const route = useRoute();

  let clinic = route.params?.clinicName;
  let clinic_ID = route.params?.clinic_ID;
  let my_ID = route.params?.user;
  let clinic_my_ID = route.params?.clinic_my_ID;
  let longi = route.params?.longitude;
  let lati = route.params?.latitude;
  let Schedulesource = route.params?.Schedulesource;

  let cnic,username_from_child,vaccinename;


  if(Schedulesource == "childTrackPath"){
    cnic = route.params?.cnic;
    username_from_child = route.params?.username_from_child;
    vaccinename = route.params?.vaccinename;
    console.log(`Navigation source: CNIN ${Schedulesource} : ${username_from_child}`);

  }else{
    console.log(`Navigation source: ${Schedulesource}`);

  }






  console.log("location " +typeof parseFloat(longi) + " " +typeof parseFloat(lati) );
  console.log(" User_id ===>" +my_ID + " "+clinic_ID);
  // const mydata = [
  //   {id:'kdfjkld',vaccine_name:'Hep B',description:'haha',price:'$10',img:'no',},
  //   {id:'kdfjkld',vaccine_name:'DPT',description:'haha',price:'$10',img:'no',},
  //   {id:'kdfjkld',vaccine_name:'Rabies',description:'haha',price:'$10',img:'no',},
  //   {id:'kdfjkld',vaccine_name:'Polio',description:'haha',price:'$10',img:'no',},
  //   {id:'kdfjkld',vaccine_name:'Hep A',description:'haha',price:'$10',img:'no',},
  // ]

  const clinicLocation = {
    latitude: parseFloat(lati), // Dummy latitude for clinic location
    longitude: parseFloat(longi), // Dummy longitude for clinic location
  };

  const [selectedSlot, setSelectedSlot] = useState(-1);
  const [selectedVaccine, setSelectedVaccine] = useState(vaccinename? vaccinename : null);
  const [selectedDay, setSelectedDay] = useState(-1);
  const [modalVisible, setModalVisible] = useState(false);
  const [patientName, setPatientName] = useState(username_from_child? username_from_child : "");
  const [cnicNumber, setCnicNumber] = useState(cnic?cnic:'');
  const [status, setStatus] = useState("pending");
//  const [currentTime, setCurrentTime] = useState("");

  const [isDateSelected, setIsDateSelected] = useState(false);
  const [isSlotSelected, setIsSlotSelected] = useState(false);
  const [isNameEntered, setIsNameEntered] = useState(false);
  const [isCnicEntered, setIsCnicEntered] = useState(false);
  const [mydata,setMydata] = useState([]);

  const [mapRegion, setmapRegion] = useState({
    latitude: 31.5204,
    longitude: 74.3587,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0121,
  });

  const [slots, setSlots] = useState([
    { sloT: "10:00-12:00PM", selected: false },
    { sloT: "12:00-02:00PM", selected: false },
    { sloT: "02:00-04:00PM", selected: false },
    { sloT: "04:00-06:00PM", selected: false },
    { sloT: "06:00-08:00PM", selected: false },
    { sloT: "08:00-10:00PM", selected: false },
    { sloT: "08:00-10:00PM", selected: false },
  ]);
  const [days, setDays] = useState([]);
  useEffect(() => {
    getVaccineRecord();
    let DaysList = [];
    for (let i = 1; i <= getDays(new Date().getMonth() + 1); i++) {
      DaysList.push({ day: i, selected: false });
    }
    setDays(DaysList);
  }, []);

    const getVaccineRecord = () => {
    
      axios
        .get(`${myURL}/clinic/VaccineRecord/ID?my_ID=${clinic_my_ID}`)
        .then((res) => {
          console.log("match User ID" + res.data);
          setMydata(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      
  }

  const getDays = (month) => {
    let days = 0;
    if (month == 1) {
      days = 31;
    } else if (month == 2) {
      days = 28;
    } else if (month == 3) {
      days = 31;
    } else if (month == 4) {
      days = 30;
    } else if (month == 5) {
      days = 31;
    } else if (month == 6) {
      days = 30;
    } else if (month == 7) {
      days = 31;
    } else if (month == 8) {
      days = 31;
    } else if (month == 9) {
      days = 30;
    } else if (month == 10) {
      days = 31;
    } else if (month == 11) {
      days = 30;
    } else if (month == 12) {
      days = 31;
    }
    return days;
  };

  console.log("----->> " + typeof my_ID,typeof selectedVaccine,typeof selectedDay,typeof selectedSlot,typeof patientName,typeof cnicNumber);
  const vaccineOptions = ["Polio", "Hep A", "Hep B", "Influenza", "Monococcal"];

  const handleConfirmVaccination = (vaccine) => {
    setModalVisible(false);
    setSelectedVaccine(vaccine);
  };

  const formatCnic = (input) => {
    let cnic = input.replace(/\D/g, "");

    if (cnic.length > 5) {
      cnic =
        cnic.substring(0, 5) +
        "-" +
        cnic.substring(5, 12) +
        "-" +
        cnic.substring(12, 13);
    } else if (cnic.length > 5 && cnic.length <= 12) {
      cnic = cnic.substring(0, 5) + "-" + cnic.substring(5, 12);
    }

    setCnicNumber(cnic);
  };

  const handleBookAppointment = () => {
    setIsDateSelected(false);
    setIsSlotSelected(false);
    setIsNameEntered(false);
    setIsCnicEntered(false);

    const nameRegex = /^[^\d]+$/;
    if (!nameRegex.test(patientName)) {
      setIsNameEntered(true);
      Alert.alert("Error", "Please enter patient name in alphabets");
      return;
    }

    const cnicRegex = /^([0-9]{5})[\-]([0-9]{7})[\-]([0-9]{1})+/;
    if (!cnicRegex.test(cnicNumber)) {
      setIsCnicEntered(true);
      Alert.alert("Error", "Please enter a valid CNIC");
      return;
    }

    if (selectedDay === -1) {
      setIsDateSelected(true);
      Alert.alert("Error", "Please select a date");
      return;
    }

    if (selectedSlot === -1) {
      setIsSlotSelected(true);
      Alert.alert("Error", "Please select a slot");
      return;
    }

      // Create a new Date object to get the current date and time
      const currentDate = new Date();

      // Extract hours, minutes, and seconds
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();

      // Format the time as a string
      const formattedTime = `${hours}:${minutes}:${seconds}`;

      // Update the state with the current time
      currentTime = formattedTime;

    axios
      .post(myURL+"/user/scheduleAppointment/", {my_ID,clinic_ID,selectedVaccine,selectedDay,selectedSlot,patientName,cnicNumber,currentTime,status})
      .then((res) => {
      console.log(res.data);
      Alert.alert("BOOK SCHEDULE");
      navigation.navigate("Success", {
          selectedVaccine,
          selectedDay: days[selectedDay].day,
          selectedSlot: slots[selectedSlot].sloT,
          patientName,
          cnicNumber,
      })
      
      // {Alert.alert("Hi")}
      })
      .catch((err)=> {
      console.log(err);
      })

      
  

  };

  return (
    // <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
      <ScrollView
       style={styles.container}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled" 
        keyboardDismissMode="on-drag" 
       > 
          <Header
            icon={require("../../src/images/backbutton.png")}
            title={"Book Appointment"}
            navigation={navigation}
          />
          <View style={{ borderRadius: 20, overflow: "hidden" }}>
            <MapView
              style={{
                width: Dimensions.get("screen").width * 1,
                height: Dimensions.get("screen").height * 0.25,
                alignSelf: "center",
                marginBottom: 10,
              }}
              provider={PROVIDER_GOOGLE}
              showsUserLocation={true}
              followsUserLocation={true}
              region={mapRegion}
            >
              <Marker
                coordinate={{
                  latitude: clinicLocation.latitude,
                  longitude: clinicLocation.longitude,
                }}
                title="Clinic Name"
                description="Address"
              />
            </MapView>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  `https://www.google.com/maps/dir/?api=1&destination=${clinicLocation.latitude},${clinicLocation.longitude}`
                )
              }
            >
              <Text style={styles.directions}>Get Directions</Text>
            </TouchableOpacity>
          </View>

          <Image source={require("../../src/images/vac.png")} style={styles.cliImg} />
          <Text style={styles.name}>{clinic}</Text>

          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.dropdownButton}
          >
            <Text style={styles.dropdownButtonText}>Available Vaccines</Text>
          </TouchableOpacity>

          <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                {mydata.map((vaccine, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleConfirmVaccination(vaccine.vaccine_name)}
                  >
                    <Text style={styles.modalText}>{vaccine.vaccine_name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </Modal>

          <Text style={styles.selectedVaccine}>{selectedVaccine}</Text>
          <Text style={styles.date}>Select Date</Text>

      <Text>{/* Change this to a regular View */}</Text>
        <View style={styles.innerContainer}>
          <Text>{/* ... Rest of your code ... */}</Text>
          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={days}
              keyExtractor={(item, index) => index.toString()} 
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={{
                      width: 50,
                      height: 60,
                      borderRadius: 50,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor:
                        selectedDay == index ? "#329998" : "#fff",
                      borderWidth: selectedDay == index ? 0 : 1,
                      borderColor: "#f2f2f2f2",
                      marginLeft: 10,
                    }}
                    onPress={() => {
                      if (item.day < new Date().getDate()) {
                      } else {
                        setSelectedDay(index);
                      }
                    }}
                  >
                    <Text
                      style={{
                        color: selectedDay == index ? "#fff" : "#329998",
                        fontWeight: "bold",
                      }}
                    >
                      {item.day}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <Text style={styles.heading}> Error in FlatList Available Slots</Text>
          <View>
            <FlatList
              numColumns={2}
              data={slots}
              renderItem={({ item, index }) => {
                return (
                  <>
                  {/* {if(selectedDay)} */}
                  <TouchableOpacity
                    style={[
                      styles.timeSlot,
                      {
                        borderColor: selectedSlot == index ? "blue" : "black",
                      },
                    ]}
                    onPress={() => {
                      setSelectedSlot(index);
                    }}
                  >
                    <Text
                      style={{
                        color: selectedSlot == index ? "blue" : "black",
                      }}
                    >
                      {item.sloT}
                    </Text>
                  </TouchableOpacity>
                  </>
                );
              }}
            />
          </View>
          <Text style={styles.heading}>Patient Name</Text>
          <TextInput
            style={styles.nameInput}
            placeholder={"Enter Patients Name"}
            value={patientName}
            onChangeText={setPatientName}
          />
          <Text style={styles.heading}>Enter CNIC Number</Text>
          <TextInput
            style={styles.nameInput}
            placeholder={"Enter Patients CNIC Number"}
            value={cnicNumber}
            onChangeText={formatCnic}
          />
          <View style={{ marginTop: 20, marginBottom: 20 }}>
            <CommonBtn
              w={100}
              h={45}
              txt={"Book Now"}
              status={true}
              onClick={handleBookAppointment}
            />
          </View>
        </View>
      </ScrollView>
    // </KeyboardAvoidingView>
  );
};



const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  innerContainer: {
    padding: 20,
  },
  cliImg: {
    width: 100,
    height: 100,
    marginTop: 50,
    alignSelf: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    alignSelf: "center",
    marginTop: 10,
  },
  dropdownButton: {
    marginTop: 10,
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#329998",
    borderRadius: 10,
  },
  dropdownButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
  },
  selectedVaccine: {
    fontSize: 18,
    alignSelf: "center",
    marginTop: 10,
  },
  heading: {
    color: "#000",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 15,
    marginLeft: 15,
  },
  timeSlot: {
    width: "46%",
    height: 40,
    borderRadius: 10,
    borderWidth: 0.5,
    margin: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  nameInput: {
    borderRadius: 10,
    marginTop: 10,
    width: "94%",
    height: 45,
    borderWidth: 0.5,
    alignSelf: "center",
    paddingLeft: 20,
  },
  date: {
    color: "#000",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 5,
    marginLeft: 15,
    marginBottom: 5,
  },
  errorText: {
    color: "red",
    marginTop: 5,
    marginLeft: 15,
    fontSize: 16,
  },
  directions: {
    textAlign: "center",
    color: "#329998",
    fontSize: 16,
    textDecorationLine: "underline",
    marginTop: 10,
  },
});

export default BookAppointment;
