import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CommonBtn from "../../components/user/schedule/CommonBtn";
import Header from "../../components/user/schedule/Header";

const ScheduleHome = ({ navigation }) => {
  const topRatedClinics = Array.from({ length: 6 }, (_, index) => index + 1);

  return (
    <View style={styles.container}>
      <Header
        title={"Schedule Appointment"}
        icon={require("../../components/src/images/clinic.png")}
        navigation={navigation}
      />
      <View>
        <Image source={require("../../components/src/images/banner.jpg")} style={styles.banner} />
        <Text style={styles.heading}>Registered Clinics</Text>
        <FlatList
          data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity key={index}>
                <LinearGradient
                  colors={["#329998", "#52B4B3", "#8CECEA"]}
                  style={styles.linearGradient}
                >
                  <Text style={styles.clinicName}>
                    {"Clinic " + (index + 1)}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Text style={styles.heading}>Top Rated Clinics</Text>
      <FlatList
        data={topRatedClinics}
        numColumns={2}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.cliItem}>
              <Image
                source={require("../../components/src/images/vac.png")}
                style={styles.cliImage}
              />
              <Text style={styles.cliName}>Clinic {index + 1}</Text>
              <Text style={styles.cliAdd}>Location {index + 1}</Text>
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
                    navigation.navigate("BookAppointment");
                  }
                }}
              />
            </View>
          );
        }}
      />
      <View style={styles.bottomView}>
        <TouchableOpacity  onPress={()=>{
          navigation.navigate('Complete')
        }}>
          <Image
            source={require('../../components/src/images/complete.png')}
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Pending')
        }}>
          <Image
            source={require('../../components/src/images/pending.png')}
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>{
          navigation.navigate('BookAppointment')
        }}>
          <Image
            source={require('../../components/src/images/BookAppointment.jpg')}
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
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
    width: "100%",
    height: 200,
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