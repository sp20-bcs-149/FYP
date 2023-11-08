import React,{useEffect,useState} from 'react';
import { Text,View,StyleSheet,ScrollView, TouchableOpacity,Button,Pressable } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import axios from 'axios';
import { useRoute } from "@react-navigation/native";
import myURL from '../../services/myurls';
import CreateRecordModelUpdate from '../../components/user/familyProfile/CreateRecordssUpdate';

const ChildTrack = ({navigation}) => {
  const route = useRoute();
  let sourcePath = route.params?.sourcePath;
  let name = route.params?.name;
  let gender = route.params?.gender;
  let cnic = route.params?.cnic;
  let Token_id = route.params?.Token_id;
  let previousvaccine = route.params?.previousvaccine;
  // const vaccine_namesArray = previousvaccine.split(', ');
  let dob = route.params?.dob;
  let my_ID = route.params?.my_ID;
  let Clicked_child_id = route.params?.Clicked_child_id;
  let fetchData = route.params?.fetchDataRefresh;

  console.log("Clicked_child_id==========",Clicked_child_id);

  let weight;
  let height;
  if(sourcePath=="ChildFamily"){

    weight = route.params?.weight;
    height = route.params?.height;
  }

  const [user_Age_In_Day,setuser_Age_In_Day ] = useState('1');
  const [myvaccineArray, setMyVaccineArray] = useState([]);

  console.log("Vaccine array ++==" + previousvaccine); 
  const separateVaccinePrevious = () => {
    const separatedVaccines = previousvaccine.split(',');
    setMyVaccineArray(separatedVaccines);
  };

  console.log("Vaccine array ++==" + myvaccineArray); 

  
  function calculateAgeInDays(birthdate) {
    const birthDate = new Date(birthdate);  // Convert the birthdate string to a Date object.
    const currentDate = new Date();          // Get the current date.

    // Calculate the difference in milliseconds between the current date and birthdate.
    const differenceInMilliseconds = currentDate - birthDate;

    // Convert the difference to days.
    const ageInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

    return ageInDays;
  }

  useEffect(()=>{
    const birthdate = '2023-8-20'; // Replace this with the user's actual birthdate.
    const userAgeInDays = calculateAgeInDays(dob);
    setuser_Age_In_Day(userAgeInDays);
    console.log(`The user's age in days is: ${userAgeInDays} days`);
  },[])

   let UserAge = 1;
   console.log("UserAge",user_Age_In_Day);



    const [data,setResData] = useState([]);
    const [completedata,setCompleteData] = useState([]);
      
   

  const getpendingAppointment = () => {
      axios
        .get(`${myURL}/user/scheduleAppointment/pending/?my_ID=${Clicked_child_id}`)
        .then((res) => {
          console.log("match User ID" + res.data);
          setResData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    useEffect(()=>{
      getpendingAppointment();
      getCompletedAppointment();
      separateVaccinePrevious();
    },[])

    useEffect(() => {
      console.log("Vaccine array ++==", myvaccineArray);
    }, [myvaccineArray]);

    
  const getCompletedAppointment = () => {
    axios
      .get(`${myURL}/user/scheduleAppointment/completed/?my_ID=${Clicked_child_id}`)
      .then((res) => {
        console.log("match User ID" + res.data);
        setCompleteData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

 
    console.log("DATA ==== ???? " + JSON.stringify(completedata));
    const vaccines = [
      {
        "disease": "Childhood TB",
        "causative_agent": "Bacteria",
        "vaccine": "BCG",
        "doses": 1,
        "age_of_administration": "Soon after birth",
        "age": [
          {"dose": "BCG","age_in_days": 1}
        ]
      },
      {
        "disease": "Poliomyelitis",
        "causative_agent": "Virus",
        "vaccine": "OPV",
        "doses": 4,
        "age_of_administration": [
          "OPV0: Soon after birth",
          "OPV1: 6 weeks",
          "OPV2: 10 weeks",
          "OPV3: 14 weeks"  
        ],
        "age": [
          {"dose": "OPV1", "age_in_days": 42},
          {"dose": "OPV0", "age_in_days": 1},
          {"dose": "OPV2", "age_in_days": 70},
          {"dose": "OPV3", "age_in_days": 98}
        ]
      },
      {
        "disease": "Poliomyelitis",
        "causative_agent": "Virus",
        "vaccine": "IPV",
        "doses": 1,
        "age_of_administration": "IPV-I: 14 weeks",
        "age": [ 
          {"dose": "IPV-I","age_in_days": 98}
        ]
      },
      {
        "disease": "Diphtheria",
        "causative_agent": "Bacteria",
        "vaccine": "Pentavalent vaccine (DTP+Hep B + Hib)",
        "doses": 3,
        "age_of_administration": [
          "Penta1: 6 weeks",
          "Penta2: 10 weeks",
          "Penta3: 14 weeks"
        ],
        "age": [
          {"dose": "Penta1", "age_in_days": 42},
          {"dose": "Penta2", "age_in_days": 70},
          {"dose": "Penta3", "age_in_days": 98}
        ]
      },
      {
        "disease": "Tetanus",
        "causative_agent": "Bacteria",
        "vaccine": "Pentavalent vaccine (DTP+Hep B + Hib)",
        "doses": 3,
        "age_of_administration": [
          "Penta1: 6 weeks",
          "Penta2: 10 weeks",
          "Penta3: 14 weeks"
        ],
        "age": [
          {"dose": "Penta1", "age_in_days": 42},
          {"dose": "Penta2", "age_in_days": 70},
          {"dose": "Penta3", "age_in_days": 98}
        ]
      },
      {
        "disease": "Pertussis",
        "causative_agent": "Bacteria",
        "vaccine": "Pentavalent vaccine (DTP+Hep B + Hib)",
        "doses": 3,
        "age_of_administration": [
          "Penta1: 6 weeks",
          "Penta2: 10 weeks",
          "Penta3: 14 weeks"
        ],
        "age": [
          {"dose": "Penta1", "age_in_days": 42},
          {"dose": "Penta2", "age_in_days": 70},
          {"dose": "Penta3", "age_in_days": 98}
        ]
      },
      {
        "disease": "Hepatitis B",
        "causative_agent": "Virus",
        "vaccine": "Pentavalent vaccine (DTP+Hep B + Hib)",
        "doses": 3,
        "age_of_administration": [
          "Penta1: 6 weeks",
          "Penta2: 10 weeks",
          "Penta3: 14 weeks"
        ],
        "age": [
          {"dose": "Penta1", "age_in_days": 42},
          {"dose": "Penta2", "age_in_days": 70},
          {"dose": "Penta3", "age_in_days": 98}
        ]
      },
      {
        "disease": "Hib pneumonia and meningitis",
        "causative_agent": "Bacteria",
        "vaccine": "Pentavalent vaccine (DTP+Hep B + Hib)",
        "doses": 3,
        "age_of_administration": [
          "Penta1: 6 weeks",
          "Penta2: 10 weeks",
          "Penta3: 14 weeks"
        ],
        "age": [
          {"dose": "Penta1", "age_in_days": 42},
          {"dose": "Penta2", "age_in_days": 70},
          {"dose": "Penta3", "age_in_days": 98}
        ]
      },
      {
        "disease": "Diarrhoea due to rotavirus",
        "causative_agent": "Virus",
        "vaccine": "Rotavirus",
        "doses": 2,
        "age_of_administration": [
          "Rota 1: 6 weeks",
          "Rota 2: 10 weeks"
        ],
        "age": [
          {"dose": "Rota 1", "age_in_days": 42},
          {"dose": "Rota 2", "age_in_days": 70}
        ]
      },
      {
        "disease": "Measles",
        "causative_agent": "Virus",
        "vaccine": "Measles",
        "doses": 2,
        "age_of_administration": [
          "Measles1: 9 months",
          "Measles2: 15 months"
        ],
        "age": [
          {"dose": "Measles1", "age_in_days": 270},
          {"dose": "Measles2", "age_in_days": 450}
        ]
      }
    ]
    const [modalVisible, setModalVisible] = useState(false);


    return (
    <>
            <View style={style.container}>
            <ScrollView width="100%">
                <View style={{flex:1/10,backgroundColor:'#329998',width:'100%',flexDirection:'row'}}> 
                  <TouchableOpacity onPress={() => navigation.goBack()} style={{backgroundColor:''}}>
                    <Text style={{ color: '#fff', fontSize: 20,  marginTop: 50,marginLeft:40, marginRight: 10 }}>&#x2190;</Text>
                  </TouchableOpacity>
                    <Text style={{color:'white',marginTop:30,fontSize:20,padding:20,textAlign:'center',fontWeight:'700'}}>
                        Vaccination Track
                    </Text>
                </View>            



                <View style={{flex:9/10,backgroundColor:'#FFFFFF',width:"90%",alignItems:'center',alignSelf:'center',borderRadius:10,}}> 
                    <Text style={{fontSize:19,fontWeight:'900',color:'black',padding:10,textAlign:'center',marginTop:10}}>{name}</Text>
                    <View style={{backgroundColor:"#FFFFFF",width:"90%",alignSelf:'center',height:100,borderRadius:10,justifyContent:'space-evenly',alignItems:'center',marginTop:20,marginBottom:5,}}>
                        <View style={{width:"90%",flexDirection:'row',justifyContent:'space-between',alignContent:'center'}}>
                          
                            <View ><Text>Height: {height} cm </Text></View>
                            <View ><Text>Weight: {weight} Kg</Text></View>

                        </View>
                        <View style={style.line}></View>
                        { sourcePath=="ChildFamily" ?
                          <View style={{width:"90%",flexDirection:'row',justifyContent:'space-between',alignContent:'center'}}>
                              <Pressable onPress={() => setModalVisible(!modalVisible)}><View ><Text><Feather name="edit" size={24} color="#329998" /></Text></View></Pressable>
                              <Pressable onPress={() =>{
                                    axios
                                      .delete(myURL + "/family/familyInside/" + Clicked_child_id)
                                      .then((res) => {
                                        console.log(res.data);
                                        alert("Delete Record");
                                        navigation.navigate("ChildRecord");
                                      })
                                      .catch((err) => {
                                        console.log(err);
                                      });
                              } }><View ><AntDesign name="delete" size={24} color="#FF0000" /></View></Pressable>
                          </View>
                          : 
                          ''
                       }    
                    </View>
                    
                    <View style={{justifyContent:'flex-start',width:'80%'}}>
                        <View style={{backgroundColor:'#fff'}}><Text>PREVIOUS VACCINES</Text></View>

                        {/* 1 */}
                        {
                          myvaccineArray.length > 0 ? 
                            myvaccineArray.map((name,index) => 
                            <View key={index} style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
                              <AntDesign name="star" size={35} color="#329998" />


                              <View style={{flexDirection:'column',alignItems:"flex-start"}}>
                                {
                                  
                                  <Text key={index} style={{fontSize:11,padding:10,fontWeight:'bold',marginRight:180}}>{name.replace(/"/g,'')}</Text>
                                }
                              </View>
                              {/* <View><Text style={{backgroundColor:"#C2185B",borderRadius:5,padding:2,color:'white'}}></Text></View> */}
                          </View>
                          )
                        :
                        <Text>No Vaccine Selected</Text>
                        }
                        {/* 1 end */}
                      <View  style={{
                         width:'90%',
                          backgroundColor: 'white', // Set your desired line color
                          marginTop:0,
                          alignSelf:'center',
                          borderBottomWidth:0.5,
                          borderBottomColor:'gray',
                          marginTop:20}}>

                      </View>

                    </View>

                    <View style={{marginBottom:30,}}></View>

                    {/*--------------------  */}

                    <View style={{justifyContent:'flex-start',width:'80%'}}>
                        <View style={{backgroundColor:'#fff'}}><Text>INJECTED VACCINES</Text></View>
                        
                        {/* 1 */}
                        {
                          completedata.length > 0 ? 
                            completedata.map((injected_item,injected_index)=>

                              <View key={injected_index} style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
                                  <AntDesign name="star" size={35} color="#329998" />
                                  <View style={{flexDirection:'column',}}>
                                      <Text style={{fontSize:11,fontWeight:'bold'}}>{injected_item.selectedVaccine}</Text>
                                      <Text style={{fontSize:10,}}>Vaccine name: OPV</Text>
                                      <Text style={{fontSize:10,}}>Given on 05/06/2022 At ...</Text>
                                  </View>
                                  <View><Text style={{backgroundColor:"#fff",borderRadius:5,padding:2,color:'white'}}></Text></View>
                              </View>
                            )
                          :
                          <Text style={{padding:20,color:'gray'}}>No Vaccine Injected</Text>
                        }
                        {/* 1 end */}
                      <View style={{marginBottom:30,}}></View>

                      <View style={style.line}></View>

                    </View>


                    <View style={{justifyContent:'flex-start',width:'80%'}}>
                        <View style={{backgroundColor:'#fff',marginTop:20,}}><Text>REMAINING VACCINES</Text></View>
                        {/* 1 */}
                                {
                                  
                                  vaccines.map((item,index) => {
                                    if(parseInt(user_Age_In_Day) >= 1 && parseInt(user_Age_In_Day) < 42){
                                      ageItem = item.age.find(age => age.age_in_days === 1);
                                    }else if(parseInt(user_Age_In_Day) >= 42 && parseInt(user_Age_In_Day) < 70){
                                      ageItem = item.age.find(age => age.age_in_days === 42);
                                    }else if(parseInt(user_Age_In_Day) >= 70 && parseInt(user_Age_In_Day) < 98){
                                      ageItem = item.age.find(age => age.age_in_days === 70);
                                    }else if(parseInt(user_Age_In_Day) >= 98 && parseInt(user_Age_In_Day) < 270){
                                      ageItem = item.age.find(age => age.age_in_days === 270);
                                    }else if(parseInt(user_Age_In_Day) >= 270 && parseInt(user_Age_In_Day) < 450){
                                      ageItem = item.age.find(age => age.age_in_days === 450);
                                    }

                                    if (ageItem) {
                                      let vaccinename = ageItem.dose;

                                    let disableButton1 = data.filter((inside_item) => inside_item.selectedVaccine === ageItem.dose).length > 0;
                                    let disableButton2 = completedata.filter((inside_item) => inside_item.selectedVaccine === ageItem.dose).length > 0;
                                    let disableButton3 = myvaccineArray.filter((name) =>  name.replace(/"/g,'') == ageItem.dose ).length > 0;
                                    
                                    const Disable_condition = disableButton1 || disableButton2 || disableButton3;
                                    console.log("disable " + disableButton3);
                                    console.log("disable " + ageItem.dose);

                                      return (
                                        
                                        <View key={index} style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                                          <AntDesign name="staro" size={35} color="#329998" />

                                          <View style={{ flexDirection: 'column' }}>
                                            <Text style={{ fontSize: 11, fontWeight: 'bold' }}>
                                               {ageItem.dose} 
                                            </Text>
                                            <Text style={{ fontSize: 10 }}>Vaccine name: bOPV</Text>
                                            <Text style={{ fontSize: 10 }}>Given on 05/06/2022 At ...</Text>
                                          </View>

                                            <View>
                                            <Button disabled={Disable_condition}
                                             title={
                                               Disable_condition ? 'RECIEVED' : 'Schedule' 
                                              
                                              } style={{ backgroundColor: "#C2185B", borderRadius: 5, padding: 2, color: 'white' }}
                                              onPress={() => { navigation.navigate('ScheduleHome', { user: Clicked_child_id,source: 'childTrack',cnic:cnic,username:name,vaccinename:vaccinename, Token_id:Token_id }) }}
                                            ></Button>
                                            </View>
                                        </View>
                                        
                                      );
                                    } else {
                                      // Return null or an empty component if the condition is not met
                                      return null;
                                    }
                                  })

                                }


                        {/* 1 end */}

                    </View>
                    <View style={{marginBottom:30,}}></View>

                </View>
                </ScrollView>
              <CreateRecordModelUpdate
                navigation={navigation}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                _ID={Clicked_child_id}
                my_ID={my_ID}
                
                P_name={name}
                P_gender={gender}
                P_height={height}
                P_weight={weight}
                P_dob={dob}
                P_cnic={cnic}
                P_SelectedvaccineString={previousvaccine}
                fetchData2={fetchData}
              />
            </View>
    </>
  )



}

const style = StyleSheet.create({
    container : {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#329998'
    }
    ,
    line: {
        width:'90%',
        backgroundColor: 'white', // Set your desired line color
        marginTop:0,
        alignSelf:'center',
        borderBottomWidth:0.5,
        borderBottomColor:'gray'
  },
})

export default ChildTrack;