import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Homedelivery from './Homedelivery';
import Extra1 from './extacomponent';
// import Login from '../Login';

const Tab = createMaterialBottomTabNavigator();

function DeliveryBottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Homedelivery" component={Homedelivery} />
      <Tab.Screen name="Profile" component={Extra1} />
    </Tab.Navigator>
  );
}


export default DeliveryBottomNavigation;