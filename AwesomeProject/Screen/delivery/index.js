import React, { useRef, useMemo } from "react";
import { View, Text, FlatList, useWindowDimensions,  } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import OrderItem from "../../components/delivery/OrderItem/index";
import orders from "../../components/delivery/data/orders.json";
import MapView, { Marker } from "react-native-maps";
import { Entypo } from "@expo/vector-icons";

const OrdersScreen = () => {

  const bottomSheetRef = useRef();
  const { width, height } = useWindowDimensions(); 

  const snapPoints = useMemo(() => ["12%", "95%"], []);
  

  //   useEffect(() => {
  //     (async () => {
  //       const { status } = await Location.requestForegroundPermissionsAsync();
  //       if (status !== "granted") {
  //         // Handle permission denied
  //       }
  //     })();
  //   }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "lightblue" }}>
      <MapView
        style={{
          height,
          width,
        }}
        showsUserLocation
        followsUserLocation
        
      >
        {orders.map((order) => (
          <Marker
            key={order.id}
            title={order.Clinic.name}
            description={order.Clinic.address}
            coordinate={{
              latitude: order.Clinic.lat,
              longitude: order.Clinic.lng,
            }}
          >
            <View
              style={{
                backgroundColor: "#329998",
                padding: 5,
                borderRadius: 15,
              }}
            >
              <Entypo name="shop" size={24} color="white" />
            </View>
          </Marker>
        ))}
      </MapView>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        handleIndicatorStyle={{ backgroundColor: "grey", width: 100 }}
      >
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 20,
              letterSpacing: 0.5,
              paddingBottom: 5,
            }}
          >
            You're Online
          </Text>
          <Text style={{ letterSpacing: 0.5, color: "grey" }}>
            Available Orders: {orders.length}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={orders}
            renderItem={({ item }) => <OrderItem order={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default OrdersScreen;
