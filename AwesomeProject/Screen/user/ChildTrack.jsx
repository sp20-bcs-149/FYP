import React from 'react';
import { Text,View,StyleSheet,ScrollView } from 'react-native';

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

    return (
    <>
            <View style={style.container}>
            <ScrollView width="100%">
                <View style={{flex:1/10,backgroundColor:'#3C7DA3',width:'100%'}}> 
                    <Text style={{color:'white',marginTop:30,fontSize:20,padding:20,textAlign:'center',fontWeight:'700'}}>
                        ChildTrack
                    </Text>
                </View>            



                <View style={{flex:9/10,backgroundColor:'#FFFFFF',width:"90%",alignItems:'center',alignSelf:'center',borderRadius:10,}}> 
                    <Text style={{fontSize:19,fontWeight:'900',color:'black',padding:10,textAlign:'center'}}>{name}</Text>
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
                        <View style={{backgroundColor:'#F6F6F6'}}><Text>INJECTED VACCINE</Text></View>
                        {/* 1 */}
                        <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
                            <AntDesign name="star" size={35} color="#329998" />


                            <View style={{flexDirection:'column',}}>
                                <Text style={{fontSize:11,fontWeight:'bold'}}>Hepatitus B</Text>
                                <Text style={{fontSize:10,}}>Vaccine name: bOPV</Text>
                                <Text style={{fontSize:10,}}>Given on 05/06/2022 At ...</Text>
                            </View>
                            <View><Text style={{backgroundColor:"#C2185B",borderRadius:5,padding:2,color:'white'}}>feedback</Text></View>
                        </View>
                        {/* 1 end */}
                        {/* 1 */}
                        <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
                            <AntDesign name="star" size={35} color="#329998" />


                            <View style={{flexDirection:'column',}}>
                                <Text style={{fontSize:11,fontWeight:'bold'}}>Hepatitus B</Text>
                                <Text style={{fontSize:10,}}>Vaccine name: bOPV</Text>
                                <Text style={{fontSize:10,}}>Given on 05/06/2022 At ...</Text>
                            </View>
                            <View><Text style={{backgroundColor:"#C2185B",borderRadius:5,padding:2,color:'white'}}>feedback</Text></View>
                        </View>
                        {/* 1 end */}
                        {/* 1 */}
                        <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
                            <AntDesign name="star" size={35} color="#329998" />


                            <View style={{flexDirection:'column',}}>
                                <Text style={{fontSize:11,fontWeight:'bold'}}>Hepatitus B</Text>
                                <Text style={{fontSize:10,}}>Vaccine name: bOPV</Text>
                                <Text style={{fontSize:10,}}>Given on 05/06/2022 At ...</Text>
                            </View>
                            <View><Text style={{backgroundColor:"#C2185B",borderRadius:5,padding:2,color:'white'}}>feedback</Text></View>
                        </View>
                        {/* 1 end */}

                    </View>
                    <View style={{marginBottom:30,}}></View>


                    <View style={{justifyContent:'flex-start',width:'80%'}}>
                        <View style={{backgroundColor:'#F6F6F6',marginTop:20,}}><Text>REMANING VACCINE</Text></View>
                        {/* 1 */}
                        <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
                            <AntDesign name="staro" size={35} color="#329998" />

                            <View style={{flexDirection:'column',}}>
                                <Text style={{fontSize:11,fontWeight:'bold'}}>Hepatitus B</Text>
                                <Text style={{fontSize:10,}}>Vaccine name: bOPV</Text>
                                <Text style={{fontSize:10,}}>Given on 05/06/2022 At ...</Text>
                            </View>
                            <View><Text style={{backgroundColor:"#C2185B",borderRadius:5,padding:2,color:'white'}}>Schedule</Text></View>
                        </View>
                        {/* 1 end */}
                        {/* 1 */}
                        <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
                            <AntDesign name="staro" size={35} color="#329998" />

                            <View style={{flexDirection:'column',}}>
                                <Text style={{fontSize:11,fontWeight:'bold'}}>Hepatitus B</Text>
                                <Text style={{fontSize:10,}}>Vaccine name: bOPV</Text>
                                <Text style={{fontSize:10,}}>Given on 05/06/2022 At ...</Text>
                            </View>
                            <View><Text style={{backgroundColor:"#C2185B",borderRadius:5,padding:2,color:'white'}}>Schedule</Text></View>
                        </View>
                        {/* 1 end */}
                        {/* 1 */}
                        <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
                            <AntDesign name="staro" size={35} color="#329998" />

                            <View style={{flexDirection:'column',}}>
                                <Text style={{fontSize:11,fontWeight:'bold'}}>Hepatitus B</Text>
                                <Text style={{fontSize:10,}}>Vaccine name: bOPV</Text>
                                <Text style={{fontSize:10,}}>Given on 05/06/2022 At ...</Text>
                            </View>
                            <View><Text style={{backgroundColor:"#C2185B",borderRadius:5,padding:2,color:'white'}}>Schedule</Text></View>
                        </View>
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
        backgroundColor:'#3C7DA3'
    }
    ,
    line: {
        height: 1,
        width:'90%',
        backgroundColor: '#B9B0B0', // Set your desired line color
        marginTop:0,
        alignSelf:'center'
  },
})

export default ChildTrack;