import React,{useState,useEffect} from "react";
import {View,Text, SafeAreaView, StyleSheet, ScrollView,Pressable,FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import PersonalModel from "../../components/user/PersonalModel";
import myURL from "../../services/myurls";
import axios from "axios";
import Ionicons from '@expo/vector-icons/Ionicons';

import { useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons"; 
import FolderModel from "../../components/user/familyProfile/folderModel";
import { TouchableOpacity } from "react-native-gesture-handler";

const Family = ({navigation}) => {
  const route = useRoute();
  let Token_id = route.params?.token_id;

    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(false);


    console.log(" ====>setDATA FAMILY " + JSON.stringify(data));
    // console.log("=========================>HOME USER TOKEN USER SERVICE" + JSON.stringify(userService.getLoggedInUser()));
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
    try {
      const response = await axios.get(myURL + `/family/?my_ID=${Token_id}`);
      setData(response.data);
      console.log("============>FAMILY DATA: " + JSON.stringify(response.data));

    } catch (error) {
      console.error(error);
    }
    };

  const [modalVisible, setModalVisible] = useState(false);



    return(
        data ? (
        <>
            <View style={style.container}>
                <ScrollView>

                <View style={{flex:1/10,backgroundColor:'#3C7DA3',width:'100%',}}> 
                    <Text style={{color:'white',marginTop:30,marginBottom:10,fontSize:25,fontWeight:'900',flexDirection:'row',textAlign:'center'}}>
                        Family Profile
                    </Text>
                    <View>

                    </View>
                </View>

                <Pressable onPress={() => setModalVisible(!modalVisible)} >
                    <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#ffffff'}}>
                        <Text style={{padding:10,textAlign:'center',width:150,margin:10,backgroundColor:'#ffffff',borderWidth:1,borderRadius:20,color:'black'}}>Create Folder</Text>
                    </View>
                </Pressable>

                <View style={{flex:9/10,backgroundColor:'#FFFFFF',width:'100%',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}> 
 
                    {
                    data.map((item) => (
                        <Pressable key={item._id} onPress={()=>{navigation.navigate("ChildRecord",{child_id : item._id,folderName:item.Folder_Name})}}>
                        <View  style={{backgroundColor:"#3C7DA3",width:150,height:150,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
                            <Ionicons name='person' size={45} color='white' />
                            <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}>{item.Folder_Name}</Text>
                            <Text style={{color:"white"}}>Profile</Text>
                        </View>
                        </Pressable>

                        ))
                    }
                </View>
                
                </ScrollView>
                      <FolderModel
                            modalVisible={modalVisible}
                            setModalVisible={setModalVisible}
                            my_ID={Token_id}
                        />
                
            </View>
        </>
        ):(
            <Text>LOADINg....</Text>
        )
    )

}


const style = StyleSheet.create({
    container : {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:"100%",
       

    }
})


export default Family;