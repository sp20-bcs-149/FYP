import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { themeColors } from "../themes";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../slices/cartSlice";

export default function CartIcon() {
    const navigation =useNavigation();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    if(!cartItems.length ) return ;
  return (
    <View style={styles.container}>
      <TouchableOpacity
      onPress={()=> navigation.navigate('Cart')}
        style={styles.cartButton}
        activeOpacity={0.8}
        
      >
        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {cartItems.length}
          </Text>
        </View>
        <Text style={styles.cartText}>View Cart Vaccines</Text>
        <Text style={styles.priceText}>${cartTotal}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 5,
    width: "100%",
    zIndex: 50,
  },
  cartButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 999,
    paddingVertical: 3,
    paddingHorizontal: 20,
    backgroundColor: themeColors.bgColor(1),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  badge: {
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 999,
    padding: 8,
  },
  badgeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
  },
  cartText: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
  priceText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
});
