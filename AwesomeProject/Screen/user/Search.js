import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import GoogleMapViewFull from "../../components/user/findClinic/search/GoogleMapViewFull";
import SearchBar from "../../components/user/findClinic/search/SearchBar";
import { UserLocationContext } from "../../Context/UserLocationContext";
import GlobalApi from "../../services/GlobalApi";
import BusinessList from "../../components/user/findClinic/search/BusinessItem";

export default function Search({navigation}) {
  const [placeList, setPlaceList] = useState([]);
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    GetNearBySearchPlace("Vaccination Center");
  }, []);
  const GetNearBySearchPlace = (value) => {
    GlobalApi.searchByText(value).then((resp) => {
      setPlaceList(resp.data.results);
    });
  };
  return (
    <View>
      <View style={{ position: "absolute", zIndex: 20 }}>
        <SearchBar setSearchText={(value) => GetNearBySearchPlace(value)} />
      </View>

      <GoogleMapViewFull placeList={placeList} />
      <View style={{ position: "absolute", zIndex: 20, bottom: 0 }}>
        <BusinessList placeList={placeList} navigation={navigation} />
      </View>
    </View>
  );
}
