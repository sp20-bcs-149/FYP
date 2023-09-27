import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { featured } from "../Constants";
import { themeColors } from "../themes";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../slices/RestaurantSlice";
import { removeFromCart, selectCartItems, selectCartTotal } from "../slices/cartSlice";

export default function CartScreen() {
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItems, setGroupedItems] = useState({});
  const deliveryFee = 2;
  const dispatch = useDispatch();

  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    setGroupedItems(items);
  }, [cartItems]);

  return (
    <View style={styles.container}>
      {/* backbutton */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.title}> Your Cart</Text>
          <Text style={styles.subtitle}>{restaurant.name}</Text>
        </View>
      </View>

      {/* delivery Time */}
      <View style={styles.deliveryTimeContainer}>
        <Image
          source={require("../assets/Images/bikeGuy.png")}
          style={styles.deliveryIcon}
        />
        <Text style={styles.deliveryText}>Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text style={styles.changeText}>Change</Text>
        </TouchableOpacity>
      </View>

      {/* Vaccines */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {
          Object.entries(groupedItems).map(([key, items]) => {
            let dish =items[0];
          return (
            <View key={key} style={styles.dishContainer}>
              <Text style={styles.quantityText}>{items.length}x </Text>
              <Image source={dish.image} style={styles.dishImage} />
              <Text style={styles.dishName}>{dish.name}</Text>
              <Text style={styles.dishPrice}>${dish.price}</Text>
              <TouchableOpacity 
              onPress={()=>
dispatch(removeFromCart({id: dish.id}))}
              style={styles.minusButton}>
                <Icon.Minus
                  stroke="white"
                  height={20}
                  width={20}
                  strokeWidth={2}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      {/* total payment calculation */}
      <View style={styles.totalContainer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Subtotal</Text>
          <Text style={styles.totalValue}>${cartTotal}</Text>
        </View>

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Delivery Charges</Text>
          <Text style={styles.totalValue}>${deliveryFee}</Text>
        </View>

        <View style={styles.totalRow}>
          <Text style={styles.totalLabelBold}>Order Total</Text>
          <Text style={styles.totalValueBold}>${deliveryFee + cartTotal}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("OrderPreparing")}
            style={styles.placeOrderButton}
          >
            <Text style={styles.placeOrderButtonText}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: themeColors.bgColor(1),
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    backgroundColor: themeColors.bgColor(1),
    borderRadius: 999,
    padding: 10,
    position: "absolute",
    top: 16,
    left: 16,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 14,
    color: "white",
  },
  deliveryTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: themeColors.bgColor(0.2),
  },
  deliveryIcon: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  deliveryText: {
    flex: 1,
    paddingLeft: 10,
  },
  changeText: {
    fontWeight: "bold",
    color: themeColors.text,
  },
  scrollViewContent: {
    paddingBottom: 50,
    backgroundColor: "white",
    paddingTop: 5,
  },
  dishContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "white",
    borderRadius: 20,
    marginHorizontal: 2,
    marginBottom: 3,
    shadowColor: themeColors.bgColor(0.2),
    shadowRadius: 10,
    shadowOpacity: 0.3,
    elevation: 5,
  },
  quantityText: {
    fontWeight: "bold",
    color: themeColors.text,
    marginRight: 10,
  },
  dishImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  dishName: {
    flex: 1,
    paddingLeft: 16,
    fontWeight: "bold",
    color: themeColors.text,
  },
  dishPrice: {
    fontWeight: "bold",
    fontSize: 16,
    color: themeColors.text,
    marginRight: 10,
    alignSelf: "center",
  },
  minusButton: {
    backgroundColor: themeColors.bgColor(1),
    borderRadius: 999,
    padding: 8,
  },
  totalContainer: {
    paddingHorizontal: 24,
    paddingTop: 16,
    backgroundColor: themeColors.bgColor(0.2),
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  totalLabel: {
    color: themeColors.text,
  },
  totalValue: {
    color: themeColors.text,
  },
  totalLabelBold: {
    fontWeight: "bold",
    color: themeColors.text,
  },
  totalValueBold: {
    fontWeight: "bold",
    color: themeColors.text,
  },
  buttonContainer: {
    marginTop: 16,
  },
  placeOrderButton: {
    backgroundColor: themeColors.bgColor(1),
    borderRadius: 999,
    paddingVertical: 12,
  },
  placeOrderButtonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
});
