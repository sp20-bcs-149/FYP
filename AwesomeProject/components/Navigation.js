import { React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//
import Home from "../Screen/Home";
import SignUp from "../Screen/Signup";
import Login from "../Screen/Login";
import EmailAuthentication from "../Screen/Authenticate";
//
import SplashScreen from "../Screen/splashscreen";
import Homeuser from "../Screen/user/Homeuser";
import Homeadmin from "../Screen/admin/Homeadmin";
// import Homedelivery from '../Screen/delivery/Homedelivery';
//
import DeliveryBottomNavigation from "../Screen/delivery/bottomnavition";
import AdminBottomNavigation from "../Screen/admin/bottomnavition";
import UserBottomNavigation from "../Screen/user/bottomnavition";
import ClinicBottomNavigation from "../Screen/Clinic/bottomnavition";

//
import AdminDrawer from "../Screen/admin/Drawernavigation";
import UserDrawer from "../Screen/user/Drawernavigation";
import DeliveryDrawer from "../Screen/delivery/Drawernavigation";
import ClinicDrawer from "../Screen/Clinic/Drawernavigation";

// all inside compoents
import UserProfile from "../Screen/user/Profile";
import PersonalModel from "./user/PersonalModel";

//All User Screen Import
import Family from "../Screen/user/Family";
import ChildRecord from "../Screen/user/ChildRecord";
import Schedule from "../Screen/user/Schedule";
import News from "../Screen/user/News";
import PdfPrintOut from "../Screen/user/PdfPrintOut";
import ReminderVaccine from "../Screen/user/ReminderVaccine";
import ChildTrack from "../Screen/user/ChildTrack";
import VerificationForm from "../Screen/Clinic/VerificationForm";
import UserSchedule from "../Screen/user/UserSchedule";
import Alert from "../Screen/user/alert";
import ScheduleHome from "../Screen/user/ScheduleHome";
import BookAppointment from "./user/schedule/BookAppointment";
import Completed from "./user/schedule/Complete";
import Pending from "./user/schedule/Pending";
import Success from "./user/schedule/Success";
//findclinic
<<<<<<< HEAD
import ClinicFinder from "../Screen/user/FindClinicMap";
=======
import ClinicFinder from '../Screen/user/FindClinicMap';
import Search from '../Screen/user/Search';
import PlaceDetail from './user/findClinic/search/PlaceDetail';
>>>>>>> a6c92553ab2bef9dc889ede980ffa84aeaf8f124

// all admin screen
import AlertSend from "../Screen/admin/alertsend";
import AlertAdminforEditDelete from "../Screen/admin/alertAdminforEditDelete";
import NewsSend from "../Screen/admin/NewsSend";

const Stack = createNativeStackNavigator();

<<<<<<< HEAD
const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator  screenOptions={{headerShown:false}} initialRouteName={'Splash'}> */}
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"Login"}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="EmailAuthentication"
          component={EmailAuthentication}
        />
        <Stack.Screen
          name="DeliveryBottomNavigation"
          component={DeliveryBottomNavigation}
        />
        <Stack.Screen
          name="AdminBottomNavigation"
          component={AdminBottomNavigation}
        />
        <Stack.Screen
          name="UserBottomNavigation"
          component={UserBottomNavigation}
        />
        <Stack.Screen name="AdminDrawer" component={AdminDrawer} />
        <Stack.Screen name="UserDrawer" component={UserDrawer} />
        <Stack.Screen name="DeliveryDrawer" component={DeliveryDrawer} />
        <Stack.Screen name="ClinicDrawer" component={ClinicDrawer} />
        {/* all user components */}

        <Stack.Screen name="Homeuser" component={Homeuser} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="PersonalModel" component={PersonalModel} />
        <Stack.Screen name="Family" component={Family} />
        <Stack.Screen name="ChildRecord" component={ChildRecord} />
        <Stack.Screen name="ChildTrack" component={ChildTrack} />
        <Stack.Screen name="Schedule" component={Schedule} />
        <Stack.Screen name="UserSchedule" component={UserSchedule} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="PdfPrintOut" component={PdfPrintOut} />
        <Stack.Screen name="ReminderVaccine" component={ReminderVaccine} />
        <Stack.Screen name="Alert" component={Alert} />
        <Stack.Screen name="ScheduleHome" component={ScheduleHome} />
        <Stack.Screen name="BookAppointment" component={BookAppointment} />
        <Stack.Screen name="Completed" component={Completed} />
        <Stack.Screen name="Pending" component={Pending} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="ClinicFinder" component={ClinicFinder} />
=======
const Navigation = () =>{
    return (
      <NavigationContainer>
        {/* <Stack.Navigator  screenOptions={{headerShown:false}} initialRouteName={'Splash'}> */}
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={"Homeuser"}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="EmailAuthentication"
            component={EmailAuthentication}
          />
          <Stack.Screen
            name="DeliveryBottomNavigation"
            component={DeliveryBottomNavigation}
          />
          <Stack.Screen
            name="AdminBottomNavigation"
            component={AdminBottomNavigation}
          />
          <Stack.Screen
            name="UserBottomNavigation"
            component={UserBottomNavigation}
          />
          <Stack.Screen name="AdminDrawer" component={AdminDrawer} />
          <Stack.Screen name="UserDrawer" component={UserDrawer} />
          <Stack.Screen name="DeliveryDrawer" component={DeliveryDrawer} />
          {/* all user components */}

          <Stack.Screen name="Homeuser" component={Homeuser} />
          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen name="PersonalModel" component={PersonalModel} />
          <Stack.Screen name="Family" component={Family} />
          <Stack.Screen name="ChildRecord" component={ChildRecord} />
          <Stack.Screen name="ChildTrack" component={ChildTrack} />
          <Stack.Screen name="Schedule" component={Schedule} />
          <Stack.Screen name="UserSchedule" component={UserSchedule} />
          <Stack.Screen name="News" component={News} />
          <Stack.Screen name="PdfPrintOut" component={PdfPrintOut} />
          <Stack.Screen name="ReminderVaccine" component={ReminderVaccine} />
          <Stack.Screen name="Alert" component={Alert} />
          <Stack.Screen name="ScheduleHome" component={ScheduleHome} />
          <Stack.Screen name="BookAppointment" component={BookAppointment} />
          <Stack.Screen name="Completed" component={Completed} />
          <Stack.Screen name="Pending" component={Pending} />
          <Stack.Screen name="Success" component={Success} />
          <Stack.Screen name="ClinicFinder" component={ClinicFinder} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="PlaceDetail" component={PlaceDetail} />
>>>>>>> a6c92553ab2bef9dc889ede980ffa84aeaf8f124

        {/* all admin componets */}
        <Stack.Screen name="AlertSend" component={AlertSend} />
        <Stack.Screen name="NewsSend" component={NewsSend} />
        <Stack.Screen
          name="AlertAdminforEditDelete"
          component={AlertAdminforEditDelete}
        />

        {/* all clinic component */}
        <Stack.Screen name="VerificationForm" component={VerificationForm} />

        {/* all rider component */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
