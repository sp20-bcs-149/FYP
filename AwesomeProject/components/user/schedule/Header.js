import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Header = ({ title, icon, navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}  
        underlayColor="#8e8e"
      >
        <Image source={icon} style={styles.back} />
      </TouchableOpacity>

      <Text style={{ ...styles.title, marginLeft: 20 }}>{title}</Text>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  header: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#ffff",
    elevation: 5,
    alignItems: "center",
    paddingLeft: 20,
    marginTop: 20,
  },
  back: {
    width: 24,
    height: 24,
    // marginBottom: 10,
  },
  backBtn: {
    width: 40,
    height: 30,
    borderRadius: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
});
