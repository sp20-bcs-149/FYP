import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors } from "../themes";
import DishRow from "../components/DishRow";
import CartIcon from "../components/CartIcon";
import { StatusBar } from "expo-status-bar";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../slices/RestaurantSlice";
import { emptyCart } from "../slices/cartSlice"; // Add this import

export default function ClinicScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  let item = params;
  const dispatch = useDispatch();

  useEffect(() => {
    if (item && item.id) {
      dispatch(setRestaurant({ ...item }));
    }
  }, [item]);

  const handleGoBack = () => {
    dispatch(emptyCart()); // Reset the cart when going back
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <CartIcon />
      <StatusBar style="light" />
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../../../assets/Images/main.png")}
          />
          <TouchableOpacity
            onPress={handleGoBack} // Use the new function here
            style={styles.backButton}
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.detailsRow}>
            {/* (existing code) */}
          </View>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View style={styles.dishesContainer}>
          <Text style={styles.dishesTitle}>Select Vaccine Quantity:</Text>
          {item.dishes.map((dish, index) => (
            <DishRow item={dish} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "90%",
    height: 300,
    alignSelf: "center",
  },
  backButton: {
    position: "absolute",
    top: 14,
    left: 16,
    backgroundColor: "#F9FAFB",
    borderRadius: 999,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  infoContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "#fff",
    marginTop: -40,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 16,
    shadowColor: themeColors.bgColor(0.2),
    shadowRadius: 10,
    shadowOpacity: 0.3,
    elevation: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  starRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  starIcon: {
    height: 16,
    width: 16,
  },
  starText: {
    fontSize: 12,
    color: "#000",
  },
  greenText: {
    color: "#000",
  },
  grayText: {
    color: "#000",
  },
  boldText: {
    fontWeight: "bold",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    color: "#000",
  },
  locationText: {
    color: "#000",
    fontSize: 12,
  },
  description: {
    color: "#718096",
    marginTop: 8,
  },
  dishesContainer: {
    backgroundColor: "#fff",
    paddingBottom: 36,
    paddingHorizontal: 20,
  },
  dishesTitle: {
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 16,
  },
});
