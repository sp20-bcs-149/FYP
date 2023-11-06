import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import orders from '../../../components/clinic/clinicOrder/consts/orders';
const OrderScreen = ({ navigation }) => {

  // Component for individual order item
  const OrderCard = ({ item }) => {
    return (
      <View style={style.orderCard}>
        <Image source={item.image} style={{ height: 50, width: 50 }} />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.orderName}</Text>
          <Text style={{ fontSize: 13, color: 'grey' }}>Order ID: {item.orderId}</Text>
        </View>
        <View style={{ marginRight: 20 }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: item.status === 'Completed' ? 'green' : 'red' }}>
            {item.status}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <View style={style.header}>
        <MaterialIcons name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>
          Orders
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        data={orders}
        renderItem={({ item }) => <OrderCard item={item} />}
        keyExtractor={item => item.orderId}
      />
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
