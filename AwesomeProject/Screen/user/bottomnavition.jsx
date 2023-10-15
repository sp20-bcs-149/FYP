import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from '@expo/vector-icons';
//
import Homeuser from "./Homeuser";
import Extra2 from "./extacomponent";
const Tab = createMaterialBottomTabNavigator();

function UserBottomNavigation() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Homeadmin"
        activeColor="white"
        inactiveColor="black"
        barStyle={{
          backgroundColor: "#329998",
          borderTopColor: "orange",
          borderTopWidth: 0.2,
        }}
      >
        <Tab.Screen
          name="Homeuser"
          component={Homeuser}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color="black" size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Extra2}
          options={{
            tabBarLabel: "Notifications",
            tabBarIcon: ({ color }) => (
              // <MaterialCommunityIcons name="home" color="black" size={26} />
              <Ionicons name="notifications" size={24} color="black" />

            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Extra2}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              // <MaterialCommunityIcons name="bell" color="black" size={26} />
              <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Extra2}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color }) => (
              // <MaterialCommunityIcons name="bell" color="black" size={26} />
              <Ionicons name="settings" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default UserBottomNavigation;
