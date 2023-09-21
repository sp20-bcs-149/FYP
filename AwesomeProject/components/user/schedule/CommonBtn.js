import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CommonBtn = ({ w, h, txt, onClick, status }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onClick();
      }}
      style={{ alignSelf: "center", marginTop: 10, marginBottom: 5 }}
    >
      {status ? (
        <LinearGradient
          colors={["#329998", "#52B4B3", "#8CECEA"]}
          style={{
            width: w,
            height: h,
            justifyContent: "center",
            alignContent: "center",
            borderRadius: 15,
            marginBottom: 5,
            paddingLeft: 10,
            // opacity: 0.5
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>{txt}</Text>
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={["#8e8e8e", "#8e8e8e"]}
          style={{
            width: w,
            height: h,
            justifyContent: "center",
            alignContent: "center",
            borderRadius: 15,
            marginBottom: 5,
            paddingLeft: 5,
            opacity: 0.5
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>{txt}</Text>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};

export default CommonBtn;
