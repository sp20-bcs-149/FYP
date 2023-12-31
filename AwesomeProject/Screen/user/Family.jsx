import React,{useState,useEffect} from "react";
import {View,Text, SafeAreaView, StyleSheet, ScrollView,Pressable,FlatList,Modal,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import PersonalModel from "../../components/user/PersonalModel";
import myURL from "../../services/myurls";
import axios from "axios";
import Ionicons from '@expo/vector-icons/Ionicons';

import { useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons"; 
import FolderModel from "../../components/user/familyProfile/folderModel";
import FolderModelUpdate from "../../components/user/familyProfile/folderModelUpdate";
//import { TouchableOpacity } from "react-native-gesture-handler";

const Family = ({navigation}) => {
  const route = useRoute();
  let Token_id = route.params?.token_id;

    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(false);
const [isContextMenuVisible, setContextMenuVisible] = useState(false);
const [current_ID, setcurrent_ID] = useState(null);
const [Selected_FolderName, setSelected_FolderName] = useState(null);
const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleUpdate, setModalVisibleUpdate] = useState(false);


  const handleLongPress = (event, item_id,item_Folder_Name) => {
    const { pageX, pageY } = event.nativeEvent;
    setContextMenuPosition({ x: pageX, y: pageY });
    setcurrent_ID(item_id);
    setSelected_FolderName(item_Folder_Name);
    setTimeout(() => {
      setContextMenuVisible(true);
    }, 1000); // Show options after 2 seconds
    console.log("current_ID ===============================>>>>>>>>>>>>>>>>>>>>>>>>> " + item_id);
  };

  const handleEdit = (current_ID) => {
    setContextMenuVisible(false);
    setModalVisibleUpdate(!modalVisibleUpdate);

    // alert("Edit Option Pressed" + current_ID);

    // axios
    // .put(myURL + "/family/" + current_ID  + {})
    // .then((res) => {
    //     console.log(res.data);
    //     alert("Updated Option Pressed" + current_ID);

    // })
    // .catch((err) => {
    //     console.log(err);
    // });


  };

  const handleDelete = (current_ID) => {
    alert("Delete Option Pressed" + current_ID);
    setContextMenuVisible(false);

    axios
    .delete(myURL + `/family/${current_ID}`)
    .then((res) => {
        console.log(res.data);
        alert("Delete Option Pressed" + current_ID);

    })
    .catch((err) => {
        console.log(err);
    });
    fetchData();
  };

  

    console.log(" ====> setDATA FAMILY " + JSON.stringify(data));

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

    // Polling setup (fetch data every X seconds)
    useEffect(() => {
        const pollingInterval = setInterval(() => {
        // fetchData();
        }, 1000); // Adjust the interval as needed (e.g., fetch data every minute)

        // Cleanup when the component unmounts
        return () => clearInterval(pollingInterval);
    }, []); // Run this effect only once, on component mount





    return(
        data ? (
        <>
            <View style={styles.container1}>
                <ScrollView>

                <View style={{flex:1/10,backgroundColor:'#3C7DA3',width:'100%',flexDirection:'row',justifyContent:'space-evenly'}}> 
                  <TouchableOpacity onPress={() => navigation.goBack()} style={{backgroundColor:''}}>
                    <Text style={{ color: '#fff', fontSize: 20,  marginTop: 35,marginLeft:-20, marginRight: 10, }}>&#x2190;</Text>
                  </TouchableOpacity>

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

                <View style={{flex:9/10,backgroundColor:'#FFFFFF',width:'100%',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly',alignItems:'flex-start',}}> 
 
                    {
                    data.map((item) => (
                        <TouchableOpacity key={item._id}  onLongPress={(event)=>{handleLongPress(event, item._id,item.Folder_Name)}} onPress={()=>{navigation.navigate("ChildRecord",{child_id : item._id,folderName:item.Folder_Name,Token_id:Token_id})}} >
                        <View  style={{backgroundColor:"#3C7DA3",width:150,height:150,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
                            <Ionicons name='person' size={45} color='white' />
                            <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}>{item.Folder_Name}</Text>
                            <Text style={{color:"white"}}>Profile</Text>
                        </View>
                        </TouchableOpacity>

                        ))
                    }
                </View>
                
                </ScrollView>


            </View>
<FolderModel
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      my_ID={Token_id}
      fetchData = {fetchData}
  />


<FolderModelUpdate
      modalVisibleUpdate={modalVisibleUpdate}
      setModalVisibleUpdate={setModalVisibleUpdate}
      my_ID={Token_id}
      current_ID ={current_ID}
      old_name = {Selected_FolderName}
      fetchData = {fetchData}
  />


<Modal
    transparent={true}
    visible={isContextMenuVisible}
    // animationType="slide"
    onRequestClose={() => setContextMenuVisible(false)}
>
<View
    style={[
    styles.contextMenu,
    {
        top: contextMenuPosition.y - 40, // Adjusted position
        left: contextMenuPosition.x - 10, // Adjusted position
    },
    ]}
>
    <TouchableOpacity onPress={()=>handleEdit(current_ID)} style={styles.contextMenuItem}>
    <Text>Edit</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>handleDelete(current_ID)} style={styles.contextMenuItem}>
    <Text>Delete</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setContextMenuVisible(false)} style={styles.contextMenuItem}>
    <Text>Cancel</Text>
    </TouchableOpacity>
</View>
</Modal>
        </>
        ):(
            <Text>LOADINg....</Text>
        )
    )

}


const styles  = StyleSheet.create({
    container1 : {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:"100%",
       

    },
      container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 8,
    width: 150,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contextMenu: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contextMenuItem: {
    padding: 10,
  },
})


export default Family;