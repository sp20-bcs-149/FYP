import {React,useEffect,useState} from 'react';
import { Text,View,StyleSheet,ScrollView,FlatList } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import myURL from '../../services/myurls';

const AlertAdminforEditDelete = () => {
          const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    // Fetch news data from your backend
    
    fetch(`${myURL}/admin/alert/`)
      .then((response) => response.json())
      .then((data) => {
        setNewsData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching news data:', error);
      });
  }, []);
  return (
    <>
            <View style={style.container}>
                <View style={{flex:1/10,backgroundColor:'#3C7DA3',width:'100%'}}> 
                    <Text style={{color:'white',marginTop:30,fontSize:20,padding:20,textAlign:'center',fontWeight:'700'}}>
                        Alert Record
                    </Text>
                </View>
                
                <View style={{flex:9/10,backgroundColor:'#FFFFFF',width:"100%",alignItems:'center'}}> 
                <FlatList
                        data={newsData}
                        keyExtractor={(item) => item._id}
                        renderItem={({ item }) => (
                    
                            <View style={{backgroundColor:"#3C7DA3",width:"90%",alignSelf:'center',height:150,borderRadius:10,justifyContent:'flex-start',flexDirection:'column'}}>
                                <View style={{padding:20,justifyContent:'flex-start',flexDirection:'row'}}>
                                    <Text style={{borderWidth:1,borderColor:'red',borderRadius:50,padding:10,}}>PIC</Text>
                                    <View style={{flexDirection:'column'}}>
                                        <Text style={{marginLeft:20,fontSize:18,fontWeight:'900',}}>{item.disease}</Text>
                                        <Text style={{marginLeft:20,}}>1 Month, Boy</Text>
                                    </View>
                                </View>                    
                                <View style={{justifyContent:'flex-start',flexDirection:'row'}}>
                                    <Text style={{paddingLeft:35,fontSize:15,fontWeight:'900',marginTop:-10,}}>Hep B</Text>
                                </View>                    
                                <View style={{flexDirection:'column',width:"100%"}}>
                                    <Text style={{alignSelf:'flex-end',paddingRight:20}}>19 Jun, 2023</Text>
                                    <Text style={{alignSelf:'flex-end',paddingRight:20,padding:5,}}><Text style={{backgroundColor:"#C2185B",color:'white'}}>1 day, Boy</Text></Text>
                                </View>                    

                            </View>
                        
                        )}
                    />

                </View>



                    
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
        backgroundColor:'#3C7DA3',
        width:'100%'
    }
    ,
    line: {
        height: 1,
        width:'90%',
        backgroundColor: '#B9B0B0', // Set your desired line color
        marginTop:10,
        alignSelf:'center'
  },
})

export default AlertAdminforEditDelete;