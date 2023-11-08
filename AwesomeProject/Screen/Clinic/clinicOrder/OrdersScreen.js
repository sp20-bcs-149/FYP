import React,{useEffect,useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import myURL from '../../../services/myurls';
import axios from 'axios';
import { TouchableOpacity } from 'react-native';

const OrderScreen = ({ navigation }) => {
  const [resData, setResData] = useState([]);


  useEffect(()=>{
    axios
      .get(`${myURL}/clinic/clinicOrderPlacement/all`)
      .then((res) => {
        setResData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[])

  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
    <ScrollView>
      <View style={style.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <MaterialIcons name="arrow-back" size={28}  />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>
          Orders
        </Text>
      </View>
      {
        resData.map((item,index)=>(
            <View key={index} style={style.orderCard}>
              <Image source={require('../../../components/clinic/clinicOrder/bikeGuy.png')} style={{ height: 50, width: 50 }} />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.vaccine_name}</Text>
                <Text style={{ fontSize: 13, color: 'grey' }}>Order ID: 00{index}</Text>
              </View>
              <View style={{ marginRight: 20 }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: item.order_status === 'Completed' ? 'green' : 'red' }}>
                  {item.order_status}
                </Text>
              </View>
            </View>

        ))
      }
    </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop:20
  },
  orderCard: {
    height: 70,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default OrderScreen;
