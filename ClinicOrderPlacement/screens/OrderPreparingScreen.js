import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OrderPreparingScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      // Navigate to Delivery Screen after 3000 milliseconds (3 seconds)
      navigation.navigate('Delivery');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Images/delivery.gif')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '45%',
    width: '100%',
  },
});
