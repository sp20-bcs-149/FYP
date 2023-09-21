import { createDrawerNavigator } from '@react-navigation/drawer';

//
import Homeadmin from './Homeadmin';
import Extra1 from './extacomponent';
import AdminBottomNavigation from './bottomnavition';

const Drawer = createDrawerNavigator();
function AdminDrawer() {
  return (
    <>    
   <Drawer.Navigator initialRouteName="Home"    screenOptions={{drawerStyle: {  backgroundColor: 'white',width: 240,color:"white"},overlayColor: 'transparent',
      // headerStyle: {
      //       backgroundColor: '#94D8D7', // Set your desired background color
      //       height: 60,
      //     },
      //     // headerTintColor: 'white', // Set your desired text color
      //     headerTitleStyle: {
      //       fontWeight: 'bold', // Set your desired font weight
      //     },
        headerShown:false,
        // drawerLabelStyle: {
        //   color: 'orange', // Set your desired text color
        // },
    }}>

      <Drawer.Screen name="Home" component={AdminBottomNavigation} />
      {/* <Drawer.Screen name="Extra" component={Extra1} /> */}
    </Drawer.Navigator>
     </>
  );
}

export default AdminDrawer;