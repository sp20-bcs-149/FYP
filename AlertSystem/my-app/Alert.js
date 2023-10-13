import React from 'react';
import { View, Text } from 'react-native';

const Alert = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Vaccine Name: Polio(dummy value)</Text>
      <Text>Patient Name: Alex(dummy value)</Text>
      <Text>cnic: 35202-9830909-7(dummy value)</Text>
      <Text>date and clinic name: Clinix clinic and 12/06/2023</Text>
    </View>
  );
}

export default Alert;
