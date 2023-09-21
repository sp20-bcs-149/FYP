import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//
import Homeuser from './Homeuser';
import Extra2 from './extacomponent';
const Tab = createMaterialBottomTabNavigator();


function UserBottomNavigation() {

  return (
    <>
    <Tab.Navigator initialRouteName='Homeadmin'  activeColor="white" inactiveColor='' barStyle={{backgroundColor: '#329998',borderTopColor:"orange",borderTopWidth:0.2 }}>

      <Tab.Screen name="Homeuser" component={Homeuser} options={{tabBarLabel:"Home",  tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="home" color="black" size={26} />), }}/>
      <Tab.Screen name="Setting" component={Extra2} options={{tabBarLabel:"Setting",  tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="home" color="black" size={26} />), }}/>
      <Tab.Screen name="Delivery" component={Extra2}  options={{tabBarLabel:"Delivery",  tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="bell" color="black" size={26} />), }}/>
      <Tab.Screen name="Card" component={Extra2} options={{tabBarLabel:"Card",  tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="bell" color="black" size={26} />), }} />
    </Tab.Navigator>
    </>
  );
}


export default UserBottomNavigation;