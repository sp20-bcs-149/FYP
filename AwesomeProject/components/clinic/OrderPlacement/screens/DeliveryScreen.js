import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { featured } from "../Constants";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../themes";
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../slices/RestaurantSlice";
import { emptyCart } from "../slices/cartSlice";

export default function DeliveryScreen() {
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const cancelOrder = () => {
    Alert.alert("Cancel Order", "Are you sure to cancel the order?", [
      {
        text: "No",
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          navigation.navigate("Home");
          dispatch(emptyCart());
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.name}
          description={restaurant.description}
        />
      </MapView>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <View>
            <Text style={styles.infoTitle}>Estimated Arrival time</Text>
            <Text style={styles.infoText}>20-30 Minutes</Text>
            <Text style={styles.infoT}>Your Order is on its way!</Text>
          </View>
          <Image
            style={styles.bikeImage}
            source={require("../../../../assets/Images/bikeGuy2.gif")}
          />
        </View>
        <View
          style={[
            styles.buttonsContainer,
            { backgroundColor: themeColors.bgColor(0.8) },
          ]}
        >
          <View style={styles.deliveryPersonContainer}>
            <View style={styles.profileImageContainer}>
              <Image
                style={styles.profileImage}
                source={require("../../../../assets/Images/deliveryGuy.png")}
              />
            </View>
            <View style={styles.deliveryPersonDetails}>
              <Text style={styles.deliveryPersonName}>Adil Hussain</Text>
              <Text style={styles.deliveryPersonRole}>Your Rider</Text>
            </View>
            <View style={styles.actionButtonsContainer}>
              <TouchableOpacity style={styles.actionButton}>
                <Icon.Phone
                  fill={themeColors.bgColor(1)}
                  stroke={themeColors.bgColor(1)}
                  strokeWidth={1}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={cancelOrder}
                style={styles.actionButton}
              >
                <Icon.X stroke={"red"} strokeWidth={5} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  infoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  infoText: {
    fontSize: 30,
    color: "black",
    fontWeight: "900",
  },
  infoT: {
    fontSize: 16,
    color: "black",
  },
  bikeImage: {
    width: 100,
    height: 100,
  },
  buttonsContainer: {
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  deliveryPersonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImageContainer: {
    marginLeft: 5,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 999,
    padding: 1,
    height: 50,
  },
  profileImage: {
    width: 44,
    height: 44,
    borderRadius: 32,
  },
  deliveryPersonDetails: {
    marginLeft: 5,
  },
  deliveryPersonName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  deliveryPersonRole: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
  },
  actionButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    borderRadius: 999,
  },
  actionButton: {
    backgroundColor: "white",
    borderRadius: 999,
    padding: 10,
    marginLeft: 15,
  },
});
