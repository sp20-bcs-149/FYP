import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import Categories from "../../components/clinic/OrderPlacement/components/categories";

// import CartIcon from "../components/CartIcon";
//import { themeColor } from "../../components/clinic/OrderPlacement/themes";
//import Categories from "../../components/clinic/OrderPlacement/components/categories";
import FeaturedRow from "../../components/clinic/OrderPlacement/components/featuredRow";
import { featured } from "../../components/clinic/OrderPlacement/Constants";

// import CartIcon from "../components/CartIcon";

import { themeColors } from "../../components/clinic/OrderPlacement/themes";


const handleGoBack = () => {
  dispatch(emptyCart());
  navigation.goBack();
};

export default function OrderClinicScreen() {
  const Token_id = "652526817e2e6e5e19dcd0a2";
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* search-bar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Icon.ArrowLeft strokeWidth={3} stroke={"red"} />
        </TouchableOpacity>
        {/* <View style={styles.searchInputContainer}>
          <Icon.Search height={45} width={35} stroke="gray" />
          <TextInput style={styles.searchInput} placeholder="Search Vaccine" />
          <View style={styles.separator} />
          <View style={styles.locationContainer}>
            <Icon.MapPin height={20} width={20} stroke="black" />
            <Text style={styles.locationText}>New York, NYC</Text>
          </View>
        </View>
        <View style={styles.filtersIcon}>
          <Icon.Sliders height={20} width={20} strokeWidth={3} stroke="white" />
        </View>  */}
        <Text style={styles.headerText}>Order Vaccine</Text>
      </View>

      {/* main-content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {/* categories */}
        {/* <Categories /> */}

        {/* featured */}
        <View style={{ marginTop: 25 }}>
          {[featured, featured].map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.title}
                categories={item.categories}
                description={item.description}
                Token_id ={Token_id}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backButton: {
    position: "absolute",
    top: 14,
    left: 16,
    backgroundColor: "#F9FAFB",
    borderRadius: 999,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  header: {
    backgroundColor: "#329998",
    padding: 20,
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "normal",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    // marginBottom:20,
    // width:40,
    // height:400
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "gray",
    paddingLeft: 10,
    paddingRight: 10,
    margin: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 5,
  },
  separator: {
    width: 1,
    height: "100%",
    backgroundColor: "gray",
    marginLeft: 10,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  locationText: {
    color: "black",
    marginLeft: 5,
  },
  filtersIcon: {
    backgroundColor: "red",
    borderRadius: 999,
    padding: 7,
    // marginLeft: 10,
  },
});

// import {
//   View,
//   Text,
//   StatusBar,
//   StyleSheet,
//   TextInput,
//   ScrollView,
// } from "react-native";
// import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import * as Icon from "react-native-feather";
// import { themeColors } from "../../theme";
// import Categories from "../../components/clinic/OrderPlacement/components/categories";

// export default function OrderClinicScreen() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" />
//       <View style={styles.outerView}>
//         <View style={styles.innerView}>
//           <Icon.Search height={25} width={25} stroke="gray" />
//           <TextInput
//             placeholder="vaccines"
//             style={{
//               marginLeft: 2,
//               flex: 1,
//             }}
//           />
//           <View style={styles.locationnContainer}>
//             <Icon.MapPin height="20" width="20" stroke="gray" />
//             <Text style={{ color: "gray" }}>New York, NYC</Text>
//           </View>
//         </View>
//         <View style={styles.ThemeContainer}>
//           <Icon.Sliders
//             height={20}
//             width={20}
//             strokeWidth="2.5"
//             stroke="white"
//           />
//         </View>
//       </View>
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.scrollViewContent}
//       >
//         {/* categories */}
//         <Categories />

//         {/* featured */}
//         <View style={{ marginTop: 25 }}>
//           {[featured, featured].map((item, index) => {
//             return (
//               <FeaturedRow
//                 key={index}
//                 title={item.title}
//                 categories={item.categories}
//                 description={item.description}
//               />
//             );
//           })}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white", // Change to your desired background color
//   },
//   outerView: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginRight: 8, // 2 * 4
//     paddingLeft: 16, // 4 * 4
//     paddingRight: 16, // 4 * 4
//     paddingBottom: 8, // 2 * 4
//   },
//   innerView: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 12, // 1rem = 12px
//     borderRadius: 999, // A large value to create a circular shape
//     borderWidth: 1,
//     borderColor: "#e5e5e5",
//   },
//   locationnContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginHorizontal: 1, // space-x-1 equivalent
//     borderLeftWidth: 2,
//     paddingLeft: 2,
//     borderLeftColor: "gray", // border-l-gray-300 equivalent
//   },
//   ThemeContainer: {
//     backgroundColor: themeColors.bgColor(1), // You can define themeColors.bgColor(1)
//     padding: 3,
//     borderRadius: 999, // A large value to create a rounded-full effect
//   },
//   scrollViewContent: {
//     paddingBottom: 50,
//   },
// });
