import React,{useEffect,useState} from 'react';
import { Text,View,StyleSheet,ScrollView, Pressable } from 'react-native';
import myURL from '../../services/myurls';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';
import { Entypo } from "@expo/vector-icons"; 
import CreateRecordModel from '../../components/user/familyProfile/CreateRecords';
import { useRoute } from "@react-navigation/native";

const ChildRecord = ({navigation}) => {
  const route = useRoute();
  let child_id = route.params?.child_id;


    const [ChildData, setChildData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      try {
        const response = await axios.get(myURL + `/family/familyInside/?my_ID=${child_id}`);
        setChildData(response.data);
        console.log(
          "============>FAMILYInside DATA: " + JSON.stringify(response.data)
        );
      } catch (error) {
        console.error(error);
      }
    };
    const [modalVisible, setModalVisible] = useState(false);

    return (
    <>
            <View style={style.container}>
            <ScrollView style={{width:'100%'}}>
                <View style={{flex:1/10,backgroundColor:'#3C7DA3',width:'100%',flexDirection:'column'}}> 
                    <Text style={{color:'white',marginTop:30,fontSize:25,textAlign:'center',fontWeight:'900'}}>
                        ChildRecord
                    </Text>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                      <Entypo name="add-user" size={45} color="white" />
                    </Pressable>
                </View>
                <View style={{flex:9/10,backgroundColor:'#FFFFFF',width:"100%",alignItems:'center'}}> 
                    {
                        ChildData.map((item) => (
                            <Pressable key={item._id} onPress={()=>{navigation.navigate("ChildTrack")}}>
                            <View  style={{backgroundColor:"#E6EDED",width:"90%",height:100,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
                                <View style={{width:"100%",justifyContent:'space-around',flexDirection:'row'}}>
                                    <Ionicons name='person' size={35} color='black' />
                                    <Text style={{fontSize:25,fontWeight:'bold'}}>{item.name}</Text>
                                    <View><Text style={{backgroundColor:'#329998',color:'white'}}>{item.gender}</Text></View>
                                </View>
                                <View style={style.line}></View>
                                <View style={{width:"100%",justifyContent:'space-around',flexDirection:'row'}}>
                                    <View><Text style={{fontSize:11,}}>Age : {item.age} Year</Text></View>
                                    <View><Text style={{fontSize:11,}}>Weight : {item.weight} Kg</Text></View>
                                    <View><Text style={{fontSize:11,}}>Height : {item.height} cm</Text></View>
                                </View>

                            </View>
                            </Pressable>
                        ))

                    }


                </View>
                
            </ScrollView>

            <CreateRecordModel
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              my_ID={child_id}
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
    }
    ,
    line: {
        height: 1,
        width:'90%',
        backgroundColor: '#B9B0B0', // Set your desired line color
  },
})

export default ChildRecord;