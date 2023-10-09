import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CommonBtn from "../../components/user/schedule/CommonBtn";
import Header from "../../components/user/schedule/Header";
import { useRoute } from "@react-navigation/native";

const ScheduleHome = ({ navigation }) => {
  
  const route = useRoute();
  let user = route.params?.user;

  const topRatedClinics = Array.from({ length: 6 }, (_, index) => index + 1);
  const mydata = [
    {id:'kdfjkld1',my_ID:"11",my_ROLE:"clinic",name:'Iqra Clinic',cnic:'8748574395',country:'pak',phoneno:'9839384',latitude:"31.5204",longitude:'74.3587'},
    {id:'kdfjkld2',my_ID:"12",my_ROLE:"clinic",name:'Faisal Clinic',cnic:'8748574395',country:'pak',phoneno:'9839384',latitude:"31.5204",longitude:'74.3587'},
    {id:'kdfjkld3',my_ID:"13",my_ROLE:"clinic",name:'Hameed Latif',cnic:'8748574395',country:'pak',phoneno:'9839384',latitude:"31.5204",longitude:'74.3587'},
    {id:'kdfjkld4',my_ID:"14",my_ROLE:"clinic",name:'Chugtai Lab',cnic:'8748574395',country:'pak',phoneno:'9839384',latitude:"31.5204",longitude:'74.3587'},
    {id:'kdfjkld4',my_ID:"15",my_ROLE:"clinic",name:'Clinix Lab',cnic:'8748574395',country:'pak',phoneno:'9839384',latitude:"31.5204",longitude:'74.3587'},
    {id:'kdfjkld4',my_ID:"16",my_ROLE:"clinic",name:'Zeenat Lab',cnic:'8748574395',country:'pak',phoneno:'9839384',latitude:"31.5204",longitude:'74.3587'},
    {id:'kdfjkld4',my_ID:"17",my_ROLE:"clinic",name:'Tajamul Lab',cnic:'8748574395',country:'pak',phoneno:'9839384',latitude:"31.5204",longitude:'74.3587'},

  ]
  return (
    <View style={styles.container}>
      <Header
        title={"Schedule Appointment"}
        icon={require("../../components/src/images/clinic.png")}
        navigation={navigation}
      />
      <View>
        <Image source={require("../../components/src/images/main.png")} style={styles.banner} />
      </View>
      <Text style={styles.heading}>All Clinics</Text>
      {/* get => all clinic register in my app and get location,name,etc */}
      <FlatList
        data={mydata}
        numColumns={2}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.cliItem}>
              <Image
                source={require("../../components/src/images/vac.png")}
                style={styles.cliImage}
              />
              <Text style={styles.cliName}> {item.name}</Text>
              <Text style={styles.cliAdd}>Location {}</Text>
              <Text
                style={[
                  styles.cliStatus,
                  {
                    color: index / 2 == 0 ? "#41B675" : "red",
                    opacity: index / 2 == 0 ? 1 : 0.5,
                  },
                ]}
              >
                {index / 2 == 0 ? "Available" : "Busy"}
              </Text>
              <CommonBtn
                w={150}
                h={40}
                status={index / 2 == 0 ? true : false}
                txt={"Book Appointment"}
                onClick={() => {
                  if (index / 2 == 0) {
                    navigation.navigate("BookAppointment",{clinicName:item.name,user:user,longitude:item.longitude,latitude:item.latitude});
                  }
                }}
              />
            </View>
          );
        }}
      />
      <View style={styles.bottomView}>
        <TouchableOpacity  onPress={()=>{
          navigation.navigate('Completed',{user:user})
        }}>
          <Image
            source={require('../../components/src/images/complete.png')}
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Pending',{user:user})
        }}>
          <Image
            source={require('../../components/src/images/pending.png')}
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity  onPress={()=>{
          navigation.navigate('ScheduleHome',{user:user})
        }}>
          <Image
            source={require('../../components/src/images/BookAppointment.jpg')}
            style={styles.bottomIcon}
          />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  banner: {
    width: "75%",
    height: 175,
    borderRadius: 10,
    marginTop: 10,
    alignSelf: "center",
  },
  heading: {
    color: "#000",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 15,
    marginLeft: 15,
  },
  linearGradient: {
    width: 120,
    height: 80,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  clinicName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  cliItem: {
    width: "44%",
    // height: 200,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 0.2,
    margin: 10,
  },
  cliImage: {
    width: 70,
    height: 70,
    alignSelf: "center",
    marginTop: 7,
  },
  cliName: {
    fontSize: 18,
    fontWeight: "700",
    alignSelf: "center",
    marginTop: 10,
  },
  cliAdd: {
    fontSize: 14,
    marginTop: 5,
    alignSelf: "center",
    color: "#41B675",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 5,
    fontWeight: "600",
  },
  cliStatus: {
    fontSize: 14,
    marginTop: 5,
    alignSelf: "center",
    color: "#41B675",
    // backgroundColor: "#f2f2f2",
    borderRadius: 5,
    // marginTop:5,
    padding: 5,
    fontWeight: "700",
  },
  bottomView: {
    width: "90%",
    height: 60,
    borderRadius: 10,
    elevation: 5,
    position: "absolute",
    bottom: 20,
    backgroundColor: "#fff",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  bottomIcon:{
    width: 40,
    height: 40,
  }
});

export default ScheduleHome;