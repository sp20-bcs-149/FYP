import React,{useState,useEffect} from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CommonBtn from "../../components/user/schedule/CommonBtn";
import Header from "../../components/user/schedule/Header";
import axios from "axios";
import myURL from "../../services/myurls";

import { useRoute } from "@react-navigation/native";

const ScheduleHome = ({ navigation }) => {
  
  const route = useRoute();
  const { source } = route.params;
  let user = route.params?.user;
  let cnic,username_from_child,vaccinename,Token_id;

  
    if(source=='childTrack'){
      cnic = route.params?.cnic;
      username_from_child = route.params?.username;
      vaccinename = route.params?.vaccinename;
      Token_id = route.params?.Token_id;
      console.log(`Navigation source: CNIN = ${source} : ${vaccinename}`);

    }else{
      console.log(`Navigation source: ${source}`);

    }
    
  

  const [mydata,setMydata] = useState([]);
  const [mynewdata,setMynewdata] = useState([]);
   
  
  const topRatedClinics = Array.from({ length: 6 }, (_, index) => index + 1);
  // const mydata = [
  //   {id:'kdfjkld1',my_ID:"11",my_ROLE:"clinic",name:'Iqra Clinic',cnic:'8748574395',country:'pak',phoneno:'9839384',latitude:"31.5204",longitude:'74.3587'},
  //   {id:'kdfjkld2',my_ID:"12",my_ROLE:"clinic",name:'Faisal Clinic',cnic:'8748574395',country:'pak',phoneno:'9839384',latitude:"31.5204",longitude:'74.3587'},
  //   {id:'kdfjkld3',my_ID:"13",my_ROLE:"clinic",name:'Hameed Latif',cnic:'8748574395',country:'pak',phoneno:'9839384',latitude:"31.5204",longitude:'74.3587'},
  //   {id:'kdfjkld4',my_ID:"14",my_ROLE:"clinic",name:'Chugtai Lab',cnic:'8748574395',country:'pak',phoneno:'9839384',latitude:"31.5204",longitude:'74.3587'},
  //   {id:'kdfjkld4',my_ID:"15",my_ROLE:"clinic",name:'Clinix Lab',cnic:'8748574395',country:'pak',phoneno:'9839384',latitude:"31.5204",longitude:'74.3587'},
  //   {id:'kdfjkld4',my_ID:"16",my_ROLE:"clinic",name:'Zeenat Lab',cnic:'8748574395',country:'pak',phoneno:'9839384',latitude:"31.5204",longitude:'74.3587'},
  //   {id:'kdfjkld4',my_ID:"17",my_ROLE:"clinic",name:'Tajamul Lab',cnic:'8748574395',country:'pak',phoneno:'9839384',latitude:"31.5204",longitude:'74.3587'},

  // ]

useEffect(() => {
  getVaccineRecord();
  getClinic();
}, []);

const [myVaccine, setMyVaccine] = useState([]); // Initialize myVaccine state

  myVaccine.forEach(obj => {
      console.log("My Vaccine ================>+++++++++++" + obj.price);

  });

const getVaccineRecord = () => {
  if (source === 'childTrack') {
    axios
      // Fetch vaccine records where {vaccinename} matches
      .get(`${myURL}/clinic/VaccineRecord/name?vaccine_name=${vaccinename}`)
      .then((res) => {
        console.log("fetch by vaccine NAME" + JSON.stringify(res.data));
        setMyVaccine(res.data);

        // Extract my_ID values from myVaccine array
        const myIDValues = res.data.map(item => item.my_ID);

        // Use myIDValues to fetch clinic data
        getClinic(myIDValues);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

const getClinic = (myIDValues) => {
  // get only those clinics where myVaccine.my_ID matches
  if (source === 'childTrack') {
   axios
      .get(`${myURL}/routes/Clinic/clinicProfile/AllClinic`)
      .then((res) => {
        // Filter clinic data based on matching my_ID values
        const filteredData = res.data.filter(item => myIDValues.includes(item.my_ID));

        console.log("match User ID" + JSON.stringify(filteredData));
        setMydata(filteredData);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    axios
      .get(`${myURL}/routes/Clinic/clinicProfile/AllClinic`)
      .then((res) => {
        console.log("Match User ID" + res.data);
        setMydata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};


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
          console.log("index-->"+index);
          return (
            <View style={styles.cliItem}>
              <Image
                source={require("../../components/src/images/vac.png")}
                style={styles.cliImage}
              />
              <Text style={styles.cliName}> {item.name}</Text>
              {/* <Text style={styles.cliAdd}>Location {}</Text> */}
              <Text
                style={[
                  styles.cliStatus,
                  {
                    color:"#41B675",
                    opacity: 1 ,
                  },
                ]}
              >
                {"Available" }
              </Text>
              <CommonBtn
                w={150}
                h={40}
                status={ true }
                txt={"Book Appointment"}
                onClick={() => {
                   {
                    if(source == 'Homeuser'){
                      navigation.navigate("BookAppointment",{Schedulesource:'HomeuserPath',clinic_my_ID:item.my_ID,clinic_ID:item._id,clinicName:item.name,user:user,longitude:item.longitude,latitude:item.latitude});
                    }else if(source == 'childTrack'){
                      navigation.navigate("BookAppointment",{Schedulesource:'childTrackPath',clinic_my_ID:item.my_ID,clinic_ID:item._id,clinicName:item.name,user:user,longitude:item.longitude,latitude:item.latitude,cnic:cnic,username_from_child:username_from_child,vaccinename:vaccinename,User_Token_id:Token_id});
                    }
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