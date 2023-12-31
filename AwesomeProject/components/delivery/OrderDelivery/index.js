import React, { useRef, useMemo, useEffect, useState } from "react";
import {
  View,
  Text,
  useWindowDimensions,
  ActivityIndicator,
  Pressable,
  Alert
} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  FontAwesome5,
  Fontisto,
  MaterialIcons,
  Ionicons
} from "@expo/vector-icons";
import orders from "../data/orders.json";
import styles from "./styles";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

import axios from "axios";
import myURL from "../../../services/myurls";
//  ------------------------------------
const order = orders[0];

const ORDER_STATUSES = {
  ACCEPTED: "ACCEPTED",
  DELIVERED: "DELIVERED",
};

const OrderDelivery = () => {
    const route = useRoute();
  let orderback = route.params?.orderback;
  let id = orderback._id;

  let fetchdata2 = route.params?.fetchdata2;

  
  let order_status = "Pending";

  console.log( "ID ______>" + id);
  const [driverLocation, setDriverLocation] = useState(null);
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [totalKm, setTotalKm] = useState(0);
  const [deliveryStatus, setDeliveryStatus] = useState(ORDER_STATUSES.ACCEPTED);
  const [isDriverClose, setIsDriverClose] = useState(false);

  const bottomSheetRef = useRef();
  const mapRef = useRef(null);
  const { width, height } = useWindowDimensions();

  const snapPoints = useMemo(() => ["12%", "95%"], []);
  const Navigation = useNavigation();

  useEffect(() => {
    let isMounted = true;

    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission not granted");
        return;
      }

      let location = await Location.getCurrentPositionAsync();
      if (isMounted) {
        setDriverLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });

        const foregroundSubscription = Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.Highest,
            distanceInterval: 100,
          },
          (updatedLocation) => {
            setDriverLocation({
              latitude: updatedLocation.coords.latitude,
              longitude: updatedLocation.coords.longitude,
            });
          }
        );

        return () => {
          foregroundSubscription.remove();
        };
      }
    };

    getLocation();

    return () => {
      isMounted = false;
    };
  }, []);

  if (!driverLocation) {
    return <ActivityIndicator size={"large"} />;
  }

  const onButtonPressed = () => {
    if (deliveryStatus === ORDER_STATUSES.ACCEPTED) {
      let order_status = "Accepted";

      bottomSheetRef.current?.collapse();
      mapRef.current.animateToRegion({
        latitude: driverLocation.latitude,
        longitude: driverLocation.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
      setDeliveryStatus(ORDER_STATUSES.DELIVERED);
        axios
          .put(myURL + "/clinic/clinicOrderPlacement/" + id, {
          order_status
          })
          .then((res) => {
          console.log(res.data);

          // {Alert.alert("Hi")}
          })
          .catch((err) => {
          console.log(err);
          });

    }
    if (deliveryStatus === ORDER_STATUSES.DELIVERED) {
      bottomSheetRef.current?.collapse();
      let order_status = "Completed";
        axios
          .put(myURL + "/clinic/clinicOrderPlacement/" + id, {
          order_status
          })
          .then((res) => {
            fetchdata2();
            Alert.alert("Order Completed");

          console.log(res.data);

          })
          .catch((err) => {
          console.log(err);
          });

      Navigation.goBack();
      // console.warn("Delivery Finished");
    }
  };

  const RenderButtonTitle = () => {
    if (deliveryStatus === ORDER_STATUSES.ACCEPTED) {
      return "Accept Order";

    }
    if (deliveryStatus === ORDER_STATUSES.DELIVERED) {

      return "Complete Delivery";
    }
  };

  const isButtonDisable = () => {
    if (deliveryStatus === ORDER_STATUSES.ACCEPTED) {

      return false;
    }
    if (deliveryStatus === ORDER_STATUSES.DELIVERED && isDriverClose) {
      return false;
    }

    return true;
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <MapView
        ref={mapRef}
        style={{ height, width }}
        showsUserLocation
        followsUserLocation
        initialRegion={{
          latitude: driverLocation.latitude,
          longitude: driverLocation.longitude,
          latitudeDelta: 0.07,
          longitudeDelta: 0.07,
        }}
      >
        <MapViewDirections
          origin={driverLocation}
          destination={{
            latitude: orderback.latitude,
            longitude: orderback.longitude,
          }}
          strokeWidth={2}
          strokeColor="black"
          apikey={"AIzaSyAdTGHxXBhLcQUcmZpsFS5cNvZzPf_AnEM"} // Replace with your Google Maps API key
          onReady={(result) => {
            if (result.distance <= 0.01) {
              setIsDriverClose(true);
            }
            setTotalMinutes(result.duration);
            setTotalKm(result.distance);
          }}
        />
        <Marker
          coordinate={{
            latitude: orderback.latitude,
            longitude: orderback.longitude,
          }}
          title={order.Clinic.name}
          description={order.Clinic.address}
        >
          <View
            style={{
              backgroundColor: "#329998",
              padding: 5,
              borderRadius: 15,
            }}
          >
            <MaterialIcons name="local-hospital" size={30} color="white" />
          </View>
        </Marker>
      </MapView>

      {deliveryStatus === ORDER_STATUSES.ACCEPTED && (
        <Ionicons 
          onPress={() => Navigation.goBack()}
          name= "arrow-back-circle"
          size={45}
          color="black"
          style={{top:40, left:14, position:'absolute'}}
        />
      )}

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        handleIndicatorStyle={{ backgroundColor: "grey", width: 100 }}
      >
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{totalMinutes.toFixed(0)} min</Text>
          <FontAwesome5
            name="shopping-bag"
            size={30}
            color="#329998" 
            style={styles.icon}
          />
          <Text style={styles.infoText}>{totalKm.toFixed(1)} km</Text>
        </View>
        <View style={styles.productDetailsContainer}>
          <Fontisto name="shopping-store" style={styles.iconStore} />
          <Text style={styles.heading}>Product Details:</Text>
          <Text style={styles.productName}>{orderback.vaccine_name}</Text>
          <Text style={styles.productPrice}>Price: ${orderback.price}</Text>
          <Text style={styles.productRating}>
            Rating: {order.Vaccine.rating}
          </Text>
          <Fontisto name="map-marker-alt" style={styles.iconLocation} />
          <View style={styles.destinationContainer}>
            <Text style={styles.destinationHeading}>Destination Address:</Text>
            <Text style={styles.destinationAddress}>{orderback.clinic_name}</Text>
            <Text style={styles.destinationAddress}>
              {orderback.address}
            </Text>
          </View>
        </View>

        {/*  post request status accepted, from pending ,*/}
        <Pressable
          style={{
            ...styles.acceptButtonContainer,
            backgroundColor: isButtonDisable() ? "grey" : "#329998",
          }}
          onPress={onButtonPressed}
          disabled={isButtonDisable()}
        >
          <Text style={styles.acceptButtonText}>{RenderButtonTitle()}</Text>
          {/* <Text style={styles.acceptButtonText}>{order_status == "Pending" ? "Accepted" : "Completed"}</Text> */}

        </Pressable>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default OrderDelivery;
