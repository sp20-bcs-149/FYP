import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { categories } from "../Constants";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {categories.map((category, index) => {
          let isActive = category.id === activeCategory;

          return (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveCategory(category.id)}
              style={[
                styles.touchableOpacity,
                {
                  backgroundColor: isActive ? "#329998" : "#ccc",
                },
              ]}
            >
              <Image
                style={styles.categoryImage}
                source={category.image}
              />
              <Text
                style={[
                  styles.categoryText,
                  isActive ? styles.activeText : styles.inactiveText,
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    flexDirection: "row",
  },
  scrollViewContent: {
    paddingHorizontal: 15,
  },
  touchableOpacity: {
    padding: 1,
    borderRadius: 999,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,  // Added margin for spacing between categories
  },
  categoryImage: {
    width: 100, // Set a fixed width
    height: 60, // Set a fixed height
    borderRadius: 999, // Make sure image is rounded
  },
  categoryText: {
    fontSize: 12,
    marginTop: 4,
    marginTop:10,

  },
  activeText: {
    fontWeight: "bold",
    color: "#FFF",
    marginTop:10,
  },
  inactiveText: {
    color: "#555",
    marginTop:10,

  },
});
