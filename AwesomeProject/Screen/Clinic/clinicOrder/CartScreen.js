import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import vaccines from '../../../components/clinic/clinicOrder/consts/vaccines';
import { PrimaryButton } from './Button';
import { useRoute } from '@react-navigation/native';


const CartScreen = ({ navigation }) => {
  // const route = useRoute();
  // let vaccines = route.params;

  console.log("vaccines ----- >" + vaccines)
  // State to hold cart items with a quantity property
  const [cartItems, setCartItems] = useState(
    vaccines.map((vaccine) => ({ ...vaccine, quantity: 0 }))
  );

  // Function to handle the quantity changes for increment and decrement
  const handleQuantityChange = (id, delta) => {
    setCartItems((currentItems) =>
      currentItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: Math.max(item.quantity + delta, 0) }; // Ensure quantity is not negative
        }
        return item;
      })
    );
  };

  // Function to calculate the total price of the cart
  const calculateTotalPrice = () => {
    return cartItems
      .reduce((acc, item) => acc + item.quantity * parseFloat(item.price), 0)
      .toFixed(2);
  };

  // The individual cart item component
  const CartCard = ({ item }) => {
    return (
      <View style={style.cartCard}>
        <Image source={item.image} style={{ height: 100, width: 90 }} />
        <View
          style={{ height: 100, marginLeft: 10, paddingVertical: 20, flex: 1 }}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
          <Text style={{ fontSize: 13, color: 'grey' }}>
            {item.ingredients}
          </Text>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
            ${parseFloat(item.price).toFixed(2)}
          </Text>
        </View>
        <View style={{ marginRight: 20, alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
            {item.quantity}
          </Text>
          <View style={style.actionBtn}>
            <MaterialIcons
              name="remove"
              size={25}
              color="white"
              onPress={() => handleQuantityChange(item.id, -1)}
            />
            <MaterialIcons
              name="add"
              size={25}
              color="white"
              onPress={() => handleQuantityChange(item.id, 1)}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <View style={style.header}>
        <MaterialIcons
          name="arrow-back"
          size={28}
          onPress={navigation.goBack}
        />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>
          Cart
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={cartItems}
        renderItem={({ item }) => <CartCard item={item} />}
        ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                Total Price
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                ${calculateTotalPrice()}
              </Text>
            </View>
            <View style={{ marginHorizontal: 30, marginTop: 30 }}>
              <PrimaryButton title="CHECKOUT" />
            </View>
          </View>
        )}
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
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: '#329998',
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 30,
    padding: 5,
  },
});

export default CartScreen;
