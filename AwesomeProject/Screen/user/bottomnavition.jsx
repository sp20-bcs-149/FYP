import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from '@expo/vector-icons';
//
import Homeuser from "./Homeuser";
import Notification from "./Notification";

import Extra2 from "./extacomponent";


const Tab = createMaterialBottomTabNavigator();

function UserBottomNavigation() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Homeadmin"
        activeColor="white"
        backgroundColor="red"
        inactiveColor="#94D8D7"
        barStyle={{
          backgroundColor: "#329998",
          borderTopColor: "white",
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
          borderTopWidth: 0.2,
          marginTop:-0.5,
        }}
     >
        <Tab.Screen
          name="Homeuser"
          component={Homeuser}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color="white" size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile3"
          component={Extra2}
          options={{
            tabBarLabel: "Notification",
            tabBarIcon: ({ color }) => (
              // <MaterialCommunityIcons name="home" color="black" size={26} />
              <Ionicons name="notifications" size={24} color="white" />

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
              <MaterialCommunityIcons name="face-man-profile" size={24} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile2"
          component={Extra2}
          options={{
            tabBarLabel: "Profile2",
            tabBarIcon: ({ color }) => (
              // <MaterialCommunityIcons name="bell" color="black" size={26} />
              <MaterialCommunityIcons name="face-man-profile" size={24} color="white" />
            ),
          }}
        />

        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarLabel: "Notification",
            tabBarIcon: ({ color }) => (
              // <MaterialCommunityIcons name="bell" color="black" size={26} />
              <Ionicons name="notifications" size={24} color="white" />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default UserBottomNavigation;
