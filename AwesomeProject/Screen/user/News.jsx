import {React,useEffect,useState} from 'react';
import { Text,View,StyleSheet,ScrollView,FlatList } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';
import myURL from '../../services/myurls';

const News = () => {

      const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    // Fetch news data from your backend
    
    fetch(`${myURL}/admin/news`)
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
                <View style={{flex:1/10,backgroundColor:'#329998',width:'100%'}}> 
                    <Text style={{color:'white',marginTop:30,fontSize:25,textAlign:'center',fontWeight:'900'}}>
                        News
                    </Text>
                </View>
                <View style={{flex:9/10,backgroundColor:'#FFFFFF',width:"100%",alignItems:'center'}}> 

                <FlatList
                    data={newsData}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (                    
                        <View style={{backgroundColor:"#E6EDED",width:"90%",height:100,borderRadius:10,justifyContent:'space-evenly',alignSelf:'center',marginTop:20}}>
                            <View style={{width:"100%",justifyContent:'space-evenly',flexDirection:'row'}}>
                                <Ionicons name='person' size={35} color='black' />
                                <View style={{flexDirection:'column'}}>    
                                    <Text style={{fontSize:20,fontWeight:'bold'}}>{item.vaccine_name}</Text>
                                    <View><Text style={{fontSize:11,}}>vaccines on the Official Vaccines pages ... </Text></View>
                                </View>
                            </View>
                            <View style={style.line}></View>
                            <View style={{width:"100%",justifyContent:'space-around',flexDirection:'row'}}>
                                <View><Text style={{fontSize:11,}}>15/10/2023</Text></View>
                                <Ionicons name='person' size={25} color='#E6EDED' />
                                <View><Text style={{fontSize:11,}}>10 : 00 AM</Text></View>
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
    }
    ,
    line: {
        height: 1,
        width:'90%',
        backgroundColor: '#B9B0B0', // Set your desired line color
        alignSelf:'center'
  },
})

export default News;