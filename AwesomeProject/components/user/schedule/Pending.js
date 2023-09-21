import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook

const Pending = () => {
  const navigation = useNavigation(); // Initialize the navigation object

  const handleBackButton = () => {
    navigation.goBack(); // Navigate back
  };

  return (
    <View style={styles.container}>
      <Header
        icon={require("../../src/images/backbutton.png")}
        title={"Pending Appointments"}
        navigation={navigation} // Pass the navigation prop
      />
      <View>
        <FlatList
          data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.itemView}>
                <Image
                  source={require("../../src/images/vac.png")}
                  style={styles.docImage}
                />
                <View>
                  <Text style={styles.name}>{"Pending  Appointment"}</Text>
                  <Text style={styles.timing}>{"08:10PM"}</Text>
                </View>
                <Text style={styles.status}>{"Pending"}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Pending;

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
