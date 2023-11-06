import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
// import OrdersScreen from '../screens/OrdersScreen';

const Tab = createBottomTabNavigator();

const BottomNavigatorOrder = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Cart') {
            iconName = 'shopping-cart';
          } 

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Cart' component={CartScreen} />
      {/* <Tab.Screen name='Orders' component={OrdersScreen} /> */}
    </Tab.Navigator>
  );
};

export default BottomNavigatorOrder;
