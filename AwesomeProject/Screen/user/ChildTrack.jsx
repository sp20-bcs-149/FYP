import React,{useEffect,useState} from 'react';
import { Text,View,StyleSheet,ScrollView, TouchableOpacity } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

import { useRoute } from "@react-navigation/native";


const ChildTrack = ({navigation}) => {
  const route = useRoute();
  let name = route.params?.name;
  let weight = route.params?.weight;
  let height = route.params?.height;
  let cnic = route.params?.cnic;
  let previousvaccine = route.params?.previousvaccine;
  const vaccine_namesArray = previousvaccine.split(', ');
  let dob = route.params?.dob;

  const [user_Age_In_Day,setuser_Age_In_Day ] = useState('1');


  console.log("Vaccine array ++==" + vaccine_namesArray); 

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

   
  let Clicked_child_id = route.params?.Clicked_child_id;
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
    return (
    <>
            <View style={style.container}>
            <ScrollView width="100%">
                <View style={{flex:1/10,backgroundColor:'#329998',width:'100%'}}> 
                    <Text style={{color:'white',marginTop:30,fontSize:20,padding:20,textAlign:'center',fontWeight:'700'}}>
                        Track
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
                        <View style={{width:"90%",flexDirection:'row',justifyContent:'space-between',alignContent:'center'}}>
                            <View ><Text><Feather name="edit" size={24} color="#329998" /></Text></View>
                            <View ><AntDesign name="delete" size={24} color="#FF0000" /></View>
                        </View>
                    </View>
                    
                    <View style={{justifyContent:'flex-start',width:'80%'}}>
                        <View style={{backgroundColor:'#fff'}}><Text>PREVIOUS VACCINES</Text></View>
                        {/* 1 */}
                        {
                          vaccine_namesArray.map((name,index) => 
                          <View key={index} style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
                            <AntDesign name="star" size={35} color="#329998" />


                            <View style={{flexDirection:'column',}}>
                                <Text style={{fontSize:11,fontWeight:'bold'}}>{name}</Text>
                                <Text style={{fontSize:10,}}></Text>
                                <Text style={{fontSize:10,}}></Text>
                            </View>
                            <View><Text style={{backgroundColor:"#C2185B",borderRadius:5,padding:2,color:'white'}}>feedback</Text></View>
                        </View>
                        )
                        }
                        {/* 1 end */}

                    </View>
                    <View style={{marginBottom:30,}}></View>

                    {/*--------------------  */}

                    <View style={{justifyContent:'flex-start',width:'80%'}}>
                        <View style={{backgroundColor:'#fff'}}><Text>INJECTED VACCINES</Text></View>
                        {/* 1 */}
                        <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
                            <AntDesign name="star" size={35} color="#329998" />


                            <View style={{flexDirection:'column',}}>
                                <Text style={{fontSize:11,fontWeight:'bold'}}>Polio</Text>
                                <Text style={{fontSize:10,}}>Vaccine name: OPV</Text>
                                <Text style={{fontSize:10,}}>Given on 05/06/2022 At ...</Text>
                            </View>
                            <View><Text style={{backgroundColor:"#C2185B",borderRadius:5,padding:2,color:'white'}}>feedback</Text></View>
                        </View>
                        {/* 1 end */}

                    </View>
                    <View style={{marginBottom:30,}}></View>


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

                                          <TouchableOpacity onPress={() => { navigation.navigate('ScheduleHome', { user: Clicked_child_id,source: 'childTrack',cnic:cnic,username:name,vaccinename:vaccinename }) }}>
                                            <View><Text style={{ backgroundColor: "#C2185B", borderRadius: 5, padding: 2, color: 'white' }}>Schedule</Text></View>
                                          </TouchableOpacity>
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
        height: 1,
        width:'90%',
        backgroundColor: 'white', // Set your desired line color
        marginTop:0,
        alignSelf:'center'
  },
})

export default ChildTrack;