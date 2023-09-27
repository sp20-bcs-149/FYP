import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { themeColors } from "../themes";
import RestaurantCard from "./restaurantCard";

export default function FeaturedRow({ title, description, restaurants }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {restaurants.map((restaurant, index) => (
          <RestaurantCard item={restaurant} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    color: "#888",
    fontSize: 12,
  },
  seeAll: {
    color: themeColors.text,
    fontWeight: "bold",
  },
  scrollViewContent: {
    paddingHorizontal: 15,
  },
});
