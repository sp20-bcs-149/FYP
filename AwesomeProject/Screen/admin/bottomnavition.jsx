import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Homeadmin from './Homeadmin';
import Extra1 from './extacomponent';
const Tab = createMaterialBottomTabNavigator();

function AdminBottomNavigation() {
  return (
    <>
    <Tab.Navigator initialRouteName='Homeadmin' activeColor="orange" inactiveColor='' barStyle={{ backgroundColor: 'white' }}>

      <Tab.Screen name="Homeadmin" component={Homeadmin} options={{tabBarLabel:"Home",  tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="home" color="white" size={26} />), }}/>
      <Tab.Screen name="Setting" component={Extra1} options={{tabBarLabel:"Setting",  tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="home" color="orange" size={26} />), }}/>
      <Tab.Screen name="Delivery" component={Extra1}  options={{tabBarLabel:"Delivery",  tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="bell" color="orange" size={26} />), }}/>
      <Tab.Screen name="Card" component={Extra1} options={{tabBarLabel:"Card",  tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="bell" color="orange" size={26} />), }} />
    </Tab.Navigator>
    </>
  );
}


export default AdminBottomNavigation;