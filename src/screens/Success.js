import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native";

const Success = ({ route, navigation }) => {
  const {
    selectedVaccine,
    selectedDay,
    selectedSlot,
    patientName,
    cnicNumber,
  } = route.params;

  return (
    <View>
      <Image
        source={require("../images/success.png")}
        style={styles.success}
      />
      <View style={styles.card}>
        <Text style={styles.cardText}>Vaccine: {selectedVaccine}</Text>
        <Text style={styles.cardText}>Date: {selectedDay}</Text>
        <Text style={styles.cardText}>Slot: {selectedSlot}</Text>
        <Text style={styles.cardText}>Patient's Name: {patientName}</Text>
        <Text style={styles.cardText}>CNIC: {cnicNumber}</Text>
      </View>
      <TouchableOpacity
        style={styles.bckBtn}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text>Go To Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  success: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 200,
  },
  card: {
    backgroundColor: "#F3F3F3",
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 10,
  },
  bckBtn: {
    opacity: 5,
    alignSelf: "center",
    width: 150,
    height: 50,
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 15,
    paddingLeft: 30,
  },
});
