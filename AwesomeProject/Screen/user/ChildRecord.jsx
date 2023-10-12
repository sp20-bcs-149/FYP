import React,{useEffect,useState} from 'react';
import { Text,View,StyleSheet,ScrollView, Pressable } from 'react-native';
import myURL from '../../services/myurls';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';
import { Entypo } from "@expo/vector-icons"; 
import CreateRecordModel from '../../components/user/familyProfile/CreateRecords';
import { useRoute } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons'; 
const ChildRecord = ({navigation}) => {
  const route = useRoute();
  let child_id = route.params?.child_id;
  let Folder_Name = route.params?.folderName;


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

    // Polling setup (fetch data every X seconds)
    useEffect(() => {
        const pollingInterval = setInterval(() => {
        //fetchData();
        }, 1000); // Adjust the interval as needed (e.g., fetch data every minute)

        // Cleanup when the component unmounts
        return () => clearInterval(pollingInterval);
    }, []); // Run this effect only once, on component mount


    const [modalVisible, setModalVisible] = useState(false);

    return (
    <>
            <View style={style.container}>
            <ScrollView style={{width:'100%'}}>
                <View style={{flex:1/10,backgroundColor:'#329998',width:'100%',flexDirection:'column'}}> 
                    <Text style={{color:'white',marginTop:30,fontSize:25,textAlign:'center',fontWeight:'900'}}>
                        {Folder_Name}
                    </Text>
                </View>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#ffffff'}}>
                      <Text style={{padding:10,textAlign:'center',width:150,margin:10,backgroundColor:'#ffffff',borderWidth:1,borderRadius:20,color:'black'}}>Create New</Text>
                  </View>
                </Pressable>

                <View style={{flex:9/10,backgroundColor:'#FFFFFF',width:"100%",alignItems:'center'}}> 
                    {
                        ChildData.map((item) => (
                            <View key={item._id} style={{flexDirection:'row',justifyContent:'center',width:"90%",backgroundColor:"#E6EDED",width:"90%",height:80,borderRadius:10,alignItems:'center',marginTop:10}}>

                            <View  style={{}}>
                                <View style={{width:"85%",justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
                                    <Ionicons name='person' size={35} color='black' />
                                    <Text style={{fontSize:25,fontWeight:'bold'}}>{item.name}</Text>
                                    <View><Text style={{backgroundColor:'#329998',color:'white'}}>{item.gender}</Text></View>
                                </View>
                                {/* <View style={style.line}></View> */}
                                <View style={{width:"85%",justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
                                    <View><Text style={{fontSize:11,}}>Age : {item.dob} Year</Text></View>
                                    <View><Text style={{fontSize:11,}}>Weight : {item.weight} Kg</Text></View>
                                    <View><Text style={{fontSize:11,}}>Height : {item.height} cm</Text></View>
                                </View>
                            </View>
                            <Pressable style={{backgroundColor:'',padding:20}}  onPress={()=>{navigation.navigate("ChildTrack",{Clicked_child_id:item._id,name:item.name,weight:item.weight,height:item.height,dob:item.dob,previousvaccine:item.SelectedvaccineString,cnic:item.cnic})}}>
                                <View style={{alignSelf:'center',marginLeft:-20}}>
                                  <AntDesign name="caretright" size={24} color="#3C7DA3" style={{}} />
                                </View>
                            </Pressable>
                            </View>

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
        height: 0.5,
        width:'80%',
        backgroundColor: '#9A9292', // Set your desired line color
        alignItems:'center',
        alignSelf:'center'
  },
})

export default ChildRecord;