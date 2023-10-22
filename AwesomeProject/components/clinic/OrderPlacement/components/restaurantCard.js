import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import * as Icon from "react-native-feather";
import { themeColors } from "../themes";
import { useNavigation } from "@react-navigation/native";
import { Svg } from "react-native-svg";
export default function RestaurantCard({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Clinic", { ...item })}
    >
      <View style={styles.cardContainer}>
        <Image style={styles.cardImage} source={item.image} />
        <View style={styles.cardContent}>
          <Text style={styles.restaurantName}>{item.name}</Text>
          <View style={styles.starRow}>
            <Image
              source={require("../../../../assets/Images/fullStar.png")}
              style={styles.starIcon}
            />
            <Text style={styles.starText}>
              <Text style={styles.greenText}>{item.stars}</Text>
              <Text style={styles.grayText}>
                ({item.reviews} review) ·
                <Text style={styles.boldText}> {item.category}</Text>
              </Text>
            </Text>
          </View>
          <View style={styles.locationRow}>
            <Icon.MapPin color="white" width={15} height={15} />
            <Text style={styles.locationText}> Nearby·{item.address}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    shadowColor: themeColors.bgColor(0.2),
    shadowRadius: 10,
    marginRight: 6,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#329998",
    borderRadius: 30,
    shadowOpacity: 0.3,
    elevation: 5,
  },
  cardImage: {
    height: 144,
    width: 256,
    borderTopLeftRadius: 20,
  },
  cardContent: {
    paddingHorizontal: 12,
    paddingBottom: 16,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  starRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  starIcon: {
    height: 16,
    width: 16,
  },
  starText: {
    fontSize: 12,
  },
  greenText: {
    color: "#fff",
  },
  grayText: {
    color: "#fff",
  },
  boldText: {
    fontWeight: "bold",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    color: "#fff",
    fontSize: 12,
  },
});
