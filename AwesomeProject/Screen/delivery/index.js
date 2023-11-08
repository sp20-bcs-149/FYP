import React, { useRef, useMemo,useEffect,useState } from "react";
import { View, Text, FlatList, useWindowDimensions, ScrollView,  } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import OrderItem from "../../components/delivery/OrderItem/index";
import orders from "../../components/delivery/data/orders.json";
import MapView, { Marker } from "react-native-maps";
import { Entypo } from "@expo/vector-icons";
import myURL from "../../services/myurls";
import axios from "axios";

const OrdersScreen = () => {

  const bottomSheetRef = useRef();
  const { width, height } = useWindowDimensions(); 

  const snapPoints = useMemo(() => ["12%", "95%"], []);
  
  const [resData, setResData] = useState([]);


  useEffect(()=>{
    fetch();
  },[])

  const fetch = async() => {
    axios
      .get(`${myURL}/clinic/clinicOrderPlacement`)
      .then((res) => {
        setResData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }
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
      {/*  */}
        {resData.map((item) => (
          <Marker
            key={item._id}
            title={item.clinic_name}
            description={"nothing"}
            coordinate={{
              latitude:item.latitude,
              longitude: item.longitude,
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
          {/*  */}
            Available Orders: {resData.length}
          </Text>
        </View>
        <View style={{ flex: 1 }}>


{/*  */}
          <FlatList
            data={resData}
            renderItem={({ item }) => <OrderItem order={item} fetchdata={fetch} />}
            keyExtractor={(item) => item._id.toString()}
          />
          
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default OrdersScreen;
