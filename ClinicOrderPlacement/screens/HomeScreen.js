import React from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { themeColors } from "../themes";
import Categories from "../components/categories";
import FeaturedRow from "../components/featuredRow";
import { featured } from "../Constants";

export default function ClinicScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* search-bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Icon.Search height={45} width={35} stroke="gray" />
          <TextInput style={styles.searchInput} placeholder="Search Vaccine" />
          <View style={styles.separator} />
          <View style={styles.locationContainer}>
            <Icon.MapPin height={20} width={20} stroke="black" />
            <Text style={styles.locationText}>New York, NYC</Text>
          </View>
        </View>
        <View style={styles.filtersIcon}>
          <Icon.Sliders height={20} width={20} strokeWidth={3} stroke="white" />
        </View>
      </View>

      {/* main-content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {/* categories */}
        <Categories />

        {/* featured */}
        <View style={{ marginTop: 25 }}>
          {[featured, featured, featured].map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    // marginBottom:20,
    // width:40,
    // height:400
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "gray",
    paddingLeft: 10,
    paddingRight: 10,
    margin: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 5,
  },
  separator: {
    width: 1,
    height: "100%",
    backgroundColor: "gray",
    marginLeft: 10,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  locationText: {
    color: "black",
    marginLeft: 5,
  },
  filtersIcon: {
    backgroundColor: themeColors.bgColor(1),
    borderRadius: 999,
    padding: 7,
    // marginLeft: 10,
  },
});
