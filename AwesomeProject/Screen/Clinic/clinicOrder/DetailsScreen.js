import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  Alert
} from "react-native";
import React,{useState,useEffect} from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { SecondaryButton } from "./Button";
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from "axios";
import { useRoute } from "@react-navigation/native";
import myURL from "../../../services/myurls";

const DetailsScreen = ({ navigation }) => {
  const route = useRoute();
  const item = route.params?.vaccine;
  const passDatatoOrder = route.params?.passDatatoOrder;

  // State to hold cart items with a quantity property
  const [quantity, setquantity] = useState(0);
  const [disablebutton, setdisablebutton] = useState(false);

  // Function to handle the quantity changes for increment and decrement
  const handleQuantityChange = (delta) => {
    setquantity(Math.max(quantity + delta, 0));

    // setCartItems((currentItems) =>
    //   currentItems.map((item) => {
    //     if (item.id === id) {
    //       return { ...item, quantity: Math.max(item.quantity + delta, 0) }; // Ensure quantity is not negative
    //     }
    //     return item;
    //   })
    // );
  };

    let  clinic_ID = passDatatoOrder.clinic_ID;
    let  vaccine_name = item.name;
    let  price= item.price;
    let  clinic_name= passDatatoOrder.clinic_name;
    let  address= passDatatoOrder.address;
    let  order_status= "Pending";
    let  longitude= passDatatoOrder.longitude;
    let  latitude= passDatatoOrder.latitude;

  console.log("vaccine ---- > " + JSON.stringify(item))
  const [newitemString,setnewitemString] = useState([]);

  // useEffect( async ()=>{
  //   try {
  //     const itemsString = await AsyncStorage.getItem('vaccines');
  //     if (itemsString !== null) {
  //       setnewitemString(itemsString);
  //       console.log("ITEMSTRING" + JSON.parseitemsString(itemsString));
  //     }
  //   } catch (error) {
  //     console.error('Error retrieving items from local storage:', error);
  //   }
  // },[])


  const retrieveItemsFromLocalStorage = async () => {
    try {
      const itemsString = await AsyncStorage.getItem('vaccines');
      if (itemsString !== null) {
        setnewitemString(itemsString);
        console.log("ITEMSTRING" + JSON.parse(itemsString)); // Corrected this line
        return JSON.parse(itemsString);
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error retrieving items from local storage:', error);
      return [];
    }
  };



  const addItemToLocalStorage = async (item) => {
    const existingItems = await retrieveItemsFromLocalStorage();
    existingItems.push(item);

    try {
      await AsyncStorage.setItem('vaccines', JSON.stringify(existingItems));
      console.log('Item added to local storage successfully.');
    } catch (error) {
      console.error('Error adding item to local storage:', error);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <View style={style.header}>
        <MaterialIcons
          name="arrow-back"
          size={28}
          color="black"
          onPress={navigation.goBack}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
          Details
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 280,
          }}
        >
          <Image source={item.image} style={{ height: 280, width: 280 }} />
        </View>
        <View style={style.details}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "#fff" }}>
              {item.name}
            </Text>
          </View>
          <Text style={style.detailsText}>
          The hepatitis A vaccine is a dose of inactive virus that stimulates
          your natural immune system. After the hepatitis A vaccine is given,
          your body makes antibodies that will protect you against the hepatitis
          A virus.
          {passDatatoOrder.latitude  }
          {passDatatoOrder.longitude}
          </Text>

          <Text style={{marginTop:5, fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            ${item.price}
          </Text>

        <View style={{ marginRight: 0, alignItems: 'center' }}>

          <View style={style.actionBtn}>
            <MaterialIcons
              name="remove"
              size={25}
              color="black"
              onPress={() => handleQuantityChange( -1)}
            />
            <Text style={{ fontWeight: 'bold', fontSize: 18,color:'black',paddingLeft:30,paddingRight:30 }}>
             {quantity}
            </Text>
            <MaterialIcons
              name="add"
              size={25}
              color="black"
              onPress={() => handleQuantityChange( 1)}
            />
          </View>
        </View>
            
        <View style={{marginTop: 80, marginBottom:20}}>
          <SecondaryButton title="ORDER" onPress={() => {
            if(quantity == 0){
                Alert.alert("Quantity is not given");
            }else{
              axios
                .post(myURL+"/clinic/clinicOrderPlacement", {clinic_ID,vaccine_name,price,quantity,clinic_name,address,order_status,longitude,latitude})
                .then((res) => {
                 
                  console.log(res.data);
                  navigation.navigate("Homeclinic")
                  Alert.alert("Order PLACE");
                  
                })
                .catch((err)=> {
                console.log(err);
                })

            }
          }} />
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: "#329998",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  detailsText:{
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: "#fff"
  },
  actionBtn: {
    width: 150,
    height:30,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 30,
    padding: 5,
  },

});

export default DetailsScreen;
