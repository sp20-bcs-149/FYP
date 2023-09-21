import {View, Text, StyleSheet,Image} from 'react-native';
import React, { useEffect } from 'react';


const Splash = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Home')  
    },3000)
    
  },[])
  return (
    <View style={styles.container}>
      <Image source={require('../../src/images/clinic.png')} style={styles.logo} />
      <Text style={styles.Title}>Schedule Appointment</Text>

    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  
  logo: {
    width: 100,
    height: 100,
    tintColor: '#fff',
  },
  Title: {
    color: 'white',fontSize: 20 , fontWeight:'800', marginTop:20

  }
});
