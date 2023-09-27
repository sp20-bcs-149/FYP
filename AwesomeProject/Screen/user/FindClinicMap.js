import { View, Text, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/user/findClinic/Header'
import GoogleMapView from "../../components/user/findClinic/GoogleMapView";
import CategoryList from "../../components/user/findClinic/CategoryList";
import GlobalApi from '../../services/GlobalApi'
import PlaceList from "../../components/user/findClinic/PlaceList";
import { ScrollView } from 'react-native'
import { UserLocationContext } from '../../Context/UserLocationContext'

export default function ClinicFinder({navigation}) {



  
  const [placeList,setPlaceList]=useState([]);
  const {location,setLocation}=useContext(UserLocationContext);

  
  useEffect(()=>{
    if(location)
    {
       GetNearBySearchPlace('hospital'); 
    }
  },[location])
  
  const GetNearBySearchPlace=(value)=>{
   
    GlobalApi.nearByPlace(location.coords.latitude,
      location.coords.longitude,value).then(resp=>{

          setPlaceList(resp.data.results);

    })
  } 
  return (
    <ScrollView style={{ padding: 20, backgroundColor: "#fff", flex: 1 }}>
      <Header navigation={navigation} />
      <GoogleMapView placeList={placeList} />
      <CategoryList
        setSelectedCategory={(value) => GetNearBySearchPlace(value)}
      />
      {placeList ? <PlaceList placeList={placeList} /> : null}
    </ScrollView>
  );
}