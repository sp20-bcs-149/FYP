import { React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//
import Home from "../Screen/Home";
import SignUp from "../Screen/Signup";
import Login from "../Screen/Login";
import EmailAuthentication from "../Screen/Authenticate";
import OnboardingScreen from "../Screen/OnboardingScreen";
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
import VaccineCardScreen from "../Screen/user/pdfofVaccine";
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
import Notification from "../Screen/user/Notification";
import AllPending from "./user/schedule/AllBookVaccineGet";
import Feedback from "../Screen/user/Feedback";
import Charts from "../Screen/user/Report";
import ReportMenu from "../Screen/user/ReportPre";
//findclinic
//import ClinicFinder from "../Screen/user/FindClinicMap";
import Search from "../Screen/user/Search";
import PlaceDetail from "./user/findClinic/search/PlaceDetail";
// all admin screen
import AlertSend from "../Screen/admin/alertsend";
import AlertAdminforEditDelete from "../Screen/admin/alertAdminforEditDelete";
import NewsSend from "../Screen/admin/NewsSend";
import NewsSendUpdate from "../Screen/admin/NewsSendUpdate";
import ReportChartsAdmin from "../Screen/admin/Report";
import NewsAdmin from "../Screen/admin/News";
import CategoriesScreen from "../Screen/admin/RegisterAllUserClinicDeli/HomeScreen";
import ListScreen from "../Screen/admin/RegisterAllUserClinicDeli/ListScreen";

//All clinic screen
import ClinicProfile from "../Screen/Clinic/CProfile";
import VaccineRecord from "../Screen/Clinic/VaccineRecord";
import AppointmentRecord from "../Screen/Clinic/AppointmentRecord";
import AppointmentDetails from "../Screen/Clinic/AppointmentDetails";
import Homeclinic from "../Screen/Clinic/Homeclinic";


import HomeScreen from '../Screen/Clinic/clinicOrder/HomeScreen';
import DetailsScreen from '../Screen/Clinic/clinicOrder/DetailsScreen';
import OrderScreen from '../Screen/Clinic/clinicOrder/OrdersScreen';
import CartScreen from '../Screen/Clinic/clinicOrder/CartScreen';


import OrderClinicScreen from "../Screen/Clinic/HomeScreen";
import Restaurent from "../Screen/Clinic/restaurent";
import ClinicScreen from "./clinic/OrderPlacement/screens/ClinicScreen";
// import CartScreen from "./clinic/OrderPlacement/screens/CartScreen";
import OrderPreparingScreen from "./clinic/OrderPlacement/screens/OrderPreparingScreen";
import DeliveryScreen from "./clinic/OrderPlacement/screens/DeliveryScreen";
import RestaurentScreen from "../Screen/Clinic/restaurent";



//delivery
import index from '../Screen/delivery/index'
import OrderDelivery from "./delivery/OrderDelivery";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator  screenOptions={{headerShown:false}} initialRouteName={'Splash'}> */}
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"OnboardingScreen"}
      >
      
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
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
        <Stack.Screen
          name="ClinicBottomNavigation"
          component={ClinicBottomNavigation}
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
        <Stack.Screen name="AllPending" component={AllPending} />
        {/* <Stack.Screen name="ClinicFinder" component={ClinicFinder} /> */}
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="PlaceDetail" component={PlaceDetail} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="Charts" component={Charts} />
        <Stack.Screen name="ReportMenu" component={ReportMenu} />
        <Stack.Screen name="VaccineCardScreen" component={VaccineCardScreen} />

        {/* all admin componets */}
        <Stack.Screen name="AlertSend" component={AlertSend} />
        <Stack.Screen name="NewsSend" component={NewsSend} />
        <Stack.Screen name="ReportChartsAdmin" component={ReportChartsAdmin} />
        <Stack.Screen name="NewsAdmin" component={NewsAdmin} />
        <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="NewsSendUpdate" component={NewsSendUpdate} />
        <Stack.Screen
          name="AlertAdminforEditDelete"
          component={AlertAdminforEditDelete}
        />


        {/* all clinic component */}
        <Stack.Screen name="VerificationForm" component={VerificationForm} />
        <Stack.Screen name="ClinicProfile" component={ClinicProfile} />
        <Stack.Screen name="VaccineRecord" component={VaccineRecord} />
        <Stack.Screen name="AppointmentRecord" component={AppointmentRecord} />
        <Stack.Screen
          name="AppointmentDetails"
          component={AppointmentDetails}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="OrderScreen" component={OrderScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="Homeclinic" component={Homeclinic} />



        <Stack.Screen name="OrderClinicScreen" component={OrderClinicScreen} />
        <Stack.Screen name="Restaurent" component={RestaurentScreen} />
        <Stack.Screen name="Clinic" component={ClinicScreen} />
        {/* <Stack.Screen name="Cart" component={CartScreen} /> */}
        <Stack.Screen name="OrderPreparing" component={OrderPreparingScreen} />
        <Stack.Screen name="Delivery" component={DeliveryScreen} />

        {/* all rider component */}
        <Stack.Screen name="index" component={index} />
        <Stack.Screen name="OrderDelivery" component={OrderDelivery} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
