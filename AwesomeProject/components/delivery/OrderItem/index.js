import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable, } from "react-native";
import orders from "../data/orders.json";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const OrderItem = ({ order,fetchdata }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={{
        flexDirection: "row",
        borderColor: "#329998",
        borderWidth: 2,
        borderRadius: 12,
        margin: 10,
        justifyContent: "space-between",
      }}
      onPress={() => navigation.navigate("OrderDelivery", { orderback: order,fetchdata2:fetchdata })}
    >
      <Image
        source={require('../../../components/clinic/clinicOrder/bikeGuy.png')}
        style={{
          width: "35%",
          height: "100%",
          borderBottomLeftRadius: 10,
          borderTopLeftRadius: 10,
        }}
      />
      <View style={{ marginLeft: 10, flex: 1, paddingVertical: 5 }}>
        <Text style={{ fontSize: 18, fontWeight: "500" }}>
          {order.vaccine_name}
        </Text>
        <Text style={{ color: "grey" }}>{}</Text>
        <Text style={{ color: "grey" }}>${order.price}</Text>
        {/* <Entypo name="chevron-right" size={24} color="#6978ff"/> */}
        <Text style={{ marginTop: 10, fontWeight: "500" }}>
          Delivery Details:
        </Text>
        <Text style={{ color: "grey" }}>{order.clinic_name}</Text>
        <Text style={{ color: "grey" }}>{order.address}</Text>
      </View>
      <View
        style={{
          padding: 5,
          backgroundColor: "#329998",
          borderBottomRightRadius: 10,
          borderTopRightRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Entypo
          name="check"
          size={30}
          color="white"
          style={{ marginLeft: "auto" }}
        />
      </View>
    </Pressable>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
