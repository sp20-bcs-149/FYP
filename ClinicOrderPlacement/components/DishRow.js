import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { themeColors } from "../themes";
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  selectCartItemsById,
  removeFromCart,
} from "../slices/cartSlice";

export default function DishRow({ item }) {
  const dispatch = useDispatch();
  const totalItems = useSelector((state) =>
    selectCartItemsById(state, item.id)
  );

  const handleIncrease = () => {
    dispatch(addToCart({ ...item }));
  };
  const handleDecrease = () => {
    dispatch(removeFromCart({ id: item.id }));
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.infoContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>${item.price}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={handleDecrease}
              disabled={!totalItems.length}
              style={styles.quantityButton}
            >
              <Icon.Minus strokeWidth={2} height={20} stroke={"white"} />
            </TouchableOpacity>
            <Text style={styles.quantity}>{totalItems.length}</Text>
            <TouchableOpacity
              onPress={handleIncrease}
              style={styles.quantityButton}
            >
              <Icon.Plus strokeWidth={2} height={20} stroke={"white"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 30,
    shadowColor: themeColors.bgColor(0.2),
    shadowRadius: 10,
    marginBottom: 10,
    marginHorizontal: 5,
    shadowOpacity: 0.3,
    elevation: 5,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 30,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  nameContainer: {
    paddingLeft: 3,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  descriptionText: {
    color: "#718096",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 3,
  },
  priceText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A5568",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    padding: 6,
    borderRadius: 999,
    backgroundColor: themeColors.bgColor(1),
    marginHorizontal: 3,
  },
  quantity: {
    paddingHorizontal: 6,
    fontSize: 18,
    fontWeight: "bold",
  },
});
