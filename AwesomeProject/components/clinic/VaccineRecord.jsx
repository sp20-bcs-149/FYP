import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Modal,
  Alert,
} from "react-native";
import axios from "axios";
import * as Location from "expo-location";

import myURL from "../../services/myurls";

const VaccineRecord = ({ navigation, modalVisible, setModalVisible, token }) => {
  const my_ID = token._id;
  const my_ROLE = token.role;

  const [vaccine_name, Setvaccine_name] = useState("");
  const [manufacture, Setmanufacture] = useState("");
  const [vaccine_type, Setvaccine_type] = useState("");
  const [quantity, Setquantity] = useState("");
  const [price, Setprice] = useState("");
  const [latitude, SetLatitude] = useState("74.676346823");
  const [longitude, SetLongitude] = useState("31.2784783");

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [vaccineNameValid, setVaccineNameValid] = useState(false);
  const [manufacturerValid, setManufacturerValid] = useState(false);
  const [vaccineTypeValid, setVaccineTypeValid] = useState(false);
  const [quantityValid, setQuantityValid] = useState(false);
  const [priceValid, setPriceValid] = useState(false);

  useEffect(() => {
    setIsButtonDisabled(
      !(
        vaccineNameValid &&
        manufacturerValid &&
        vaccineTypeValid &&
        quantityValid &&
        priceValid
      )
    );
  }, [vaccineNameValid, manufacturerValid, vaccineTypeValid, quantityValid, priceValid]);

  const handleInputChange = (field, value) => {
    switch (field) {
      case "vaccine_name":
        Setvaccine_name(value);
        setVaccineNameValid(value.trim() !== "");
        break;
      case "manufacture":
        Setmanufacture(value);
        setManufacturerValid(value.trim() !== "");
        break;
      case "vaccine_type":
        Setvaccine_type(value);
        setVaccineTypeValid(value.trim() !== "");
        break;
      case "quantity":
        Setquantity(value);
        setQuantityValid(/^\d+$/.test(value));
        break;
      case "price":
        Setprice(value);
        setPriceValid(/^\d+$/.test(value));
        break;
      default:
        break;
    }
  };

  const handleAddVaccine = () => {
    Alert.alert(
      "Confirmation",
      "Are you sure you want to add the vaccine to the inventory?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            axios
              .post(`${myURL}/routes/Clinic/VaccineRecord/`, {
                my_ID,
                vaccine_name,
                manufacture,
                vaccine_type,
                quantity,
                price,
              })
              .then((res) => {
                console.log("Vaccine Record saved");
                setModalVisible(!modalVisible);
                Alert.alert("Record Saved");
                navigation.navigate("Homeclinic");
              })
              .catch((err) => {
                console.log(err);
              });
          },
          style: "default",
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={styles.textStyle}>X</Text>
          </Pressable>

          <View style={styles.modalView}>
            <ScrollView style={{ width: "100%" }}>
              <Text style={styles.label}>Vaccine Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={(vaccine_name) => {
                  handleInputChange("vaccine_name", vaccine_name);
                }}
                placeholder="Enter Vaccine Name"
              />

              <Text style={styles.label}>Manufacturer Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={(manufacture) => {
                  handleInputChange("manufacture", manufacture);
                }}
                placeholder="Enter Manufacture"
              />

              <Text style={styles.label}>Vaccine Type</Text>
              <TextInput
                style={styles.input}
                onChangeText={(vaccine_type) => {
                  handleInputChange("vaccine_type", vaccine_type);
                }}
                placeholder="Enter vaccine_type"
              />

              <Text style={styles.label}>Quantity</Text>
              <TextInput
                style={styles.input}
                onChangeText={(quantity) => {
                  handleInputChange("quantity", quantity);
                }}
                placeholder="Enter Quantity"
              />

              <Text style={styles.label}>Price($)</Text>
              <TextInput
                style={styles.input}
                onChangeText={(price) => {
                  handleInputChange("price", price);
                }}
                placeholder="Enter price"
              />

              <Pressable
                onPress={handleAddVaccine}
                style={[styles.addButton, isButtonDisabled && styles.disabledButton]}
                disabled={isButtonDisabled}
              >
                <Text style={styles.buttonText}>ADD VACCINE</Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    flex: 9 / 10,
    width: "90%",
    margin: 5,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    alignSelf: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "700",
    fontSize: 15,
  },
  addButton: {
    borderRadius: 10,
    alignSelf: "center",
    color: "white",
    fontSize: 15,
    marginTop: 20,
    backgroundColor: "#329998",
    height: 40,
    width: "60%",
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: "grey",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: "grey",
    padding: 15,
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  input: {
    backgroundColor: "white",
    width: "90%",
    height: 40,
    alignSelf: "center",
    borderRadius: 5,
    paddingLeft: 10,
    borderWidth: 2,
    borderColor: "gray",
    marginBottom: 10,
  },
  label: {
    alignSelf: "flex-start",
    color: "black",
    fontSize: 15,
    marginLeft: 20,
    marginBottom: 5,
  },
});

export default VaccineRecord;
