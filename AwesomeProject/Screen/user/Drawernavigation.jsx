import { createDrawerNavigator } from '@react-navigation/drawer';
//
import UserBottomNavigation from './bottomnavition';
const Drawer = createDrawerNavigator();
function UserDrawer() {


  return (
    <>    

    {/* drawerActiveBackgroundColor: 'red' */}
    <Drawer.Navigator initialRouteName="Home"    screenOptions={{drawerStyle: {  backgroundColor: 'black',width: 240,color:"white"},overlayColor: 'transparent',
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

      <Drawer.Screen name="Home" component={UserBottomNavigation} />
      {/* <Drawer.Screen name="Extra" component={Extra1} /> */}
    </Drawer.Navigator>
    </>
  );
}

export default UserDrawer;