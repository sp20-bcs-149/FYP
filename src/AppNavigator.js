import { View, Text, Image } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./screens/Splash";
import Home from "./screens/Home";
import BookAppointment from "./screens/BookAppointment";
import Success from "./screens/Success";
import Pending from "./screens/Pending";
import Incomplete from "./screens/Incomplete";
import Complete from "./screens/Complete";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Splash}
          name="Splash"
          options={{ headerShown: false }}
        />
         <Stack.Screen
          component={Home}
          name="Home"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={BookAppointment}
          name="BookAppointment"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Success}
          name="Success"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Pending}
          name="Pending"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Complete}
          name="Complete"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Incomplete}
          name="Incomplete"
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
