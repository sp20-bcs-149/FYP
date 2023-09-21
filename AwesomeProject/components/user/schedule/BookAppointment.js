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
} from "react-native";
import Header from "./Header";
import { FlatList } from "react-native";
import CommonBtn from "./CommonBtn";

const BookAppointment = ({ navigation }) => {
  const [selectedSlot, setSelectedSlot] = useState(-1);
  const [selectedVaccine, setSelectedVaccine] = useState(null);
  const [selectedDay, setSelectedDay] = useState(-1);
  const [modalVisible, setModalVisible] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [cnicNumber, setCnicNumber] = useState("");

  const [isDateSelected, setIsDateSelected] = useState(false);
  const [isSlotSelected, setIsSlotSelected] = useState(false);
  const [isNameEntered, setIsNameEntered] = useState(false);
  const [isCnicEntered, setIsCnicEntered] = useState(false);

  const [slots, setSlots] = useState([
    { sloT: "10:00-12:00PM", selected: false },
    { sloT: "12:00-02:00PM", selected: false },
    { sloT: "02:00-04:00PM", selected: false },
    { sloT: "04:00-06:00PM", selected: false },
    { sloT: "06:00-08:00PM", selected: false },
    { sloT: "08:00-10:00PM", selected: false },
  ]);
  const [days, setDays] = useState([]);
  useEffect(() => {
    let DaysList = [];
    for (let i = 1; i <= getDays(new Date().getMonth() + 1); i++) {
      DaysList.push({ day: i, selected: false });
    }
    setDays(DaysList);
  }, []);

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

    // Passing the appointment details to Success screen
    navigation.navigate("Success", {
      selectedVaccine,
      selectedDay: days[selectedDay].day,
      selectedSlot: slots[selectedSlot].sloT,
      patientName,
      cnicNumber,
    });
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
          <Image source={require("../../src/images/vac.png")} style={styles.cliImg} />
          <Text style={styles.name}>Iqra Medical Complex</Text>

          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.dropdownButton}
          >
            <Text style={styles.dropdownButtonText}>Available Vaccines</Text>
          </TouchableOpacity>

          <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                {vaccineOptions.map((vaccine, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleConfirmVaccination(vaccine)}
                  >
                    <Text style={styles.modalText}>{vaccine}</Text>
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
});

export default BookAppointment;
