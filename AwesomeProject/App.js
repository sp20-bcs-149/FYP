import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import "react-native-gesture-handler";
import Navigation from "./components/Navigation";

import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { useFonts } from "expo-font";
import { UserLocationContext } from "./Context/UserLocationContext";
import Colors from "./components/user/findClinic/Colors";
import { ActivityIndicator } from "react-native";
import { Provider } from "react-redux";
import { store } from "./components/clinic/OrderPlacement/store";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [fontsLoaded] = useFonts({
    raleway: require("./assets/Fonts/Raleway-Regular.ttf"),
    "raleway-bold": require("./assets/Fonts/Raleway-SemiBold.ttf"),
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <>
      <UserLocationContext.Provider value={{ location, setLocation }}>
        <Provider store={store}>
          <Navigation />
        </Provider>
        <StatusBar style="auto" />
      </UserLocationContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
