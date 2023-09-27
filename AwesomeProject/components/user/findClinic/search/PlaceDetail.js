import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import PlaceDetailItem from "./PlaceDetailItem";
import Colors from "../Colors";
import GoogleMapView from "../GoogleMapView";
import { TouchableOpacity } from "react-native";
import { Platform } from "react-native";
import { Linking } from "react-native";
import { ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useRoute } from "@react-navigation/native";


export default function PlaceDetail() {
      const route = useRoute();
      let Place = route.params?.place;
    console.log(" PLACE DETAILS" + place);
 
      const [place, setPlace] = useState(null);
  useEffect(() => {
    setPlace(Place);
  }, [param]);

  const onDirectionClick = () => {
    if (place) {
      const url = Platform.select({
        ios: `maps:0,0?q=${place.geometry.location.lat},${place.geometry.location.lng}(${place.name})`,
        android: `geo:${place.geometry.location.lat},${place.geometry.location.lng}?q=${place.name}`,
      });

      Linking.openURL(url);
    }
  };

  return (
    <ScrollView style={{ padding: 20, backgroundColor: Colors.WHITE, flex: 1 }}>
      {place && (
        <>
          <PlaceDetailItem place={place} onDirectionClick={onDirectionClick} />
          <GoogleMapView placeList={[place]} />
          <TouchableOpacity
            style={{
              backgroundColor: Colors.PRIMARY,
              padding: 15,
              alignItems: "center",
              justifyContent: "center",
              margin: 5,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              borderRadius: 50,
              paddingBottom: 15,
            }}
            onPress={onDirectionClick}
          >
            <Ionicons name="navigate-circle-outline" size={30} color="white" />

            <Text
              style={{
                fontFamily: "raleway",
                textAlign: "center",
                color: Colors.WHITE,
              }}
            >
              Get Direction on Google Map
            </Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
}
