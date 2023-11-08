import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
//
import Homeuser from "./Homeuser";
import Notification from "./Notification";

import News from "./News";

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
          name="News"
          component={News}
          options={{
            tabBarLabel: "News",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="all-inbox" size={26} color="white" />
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
