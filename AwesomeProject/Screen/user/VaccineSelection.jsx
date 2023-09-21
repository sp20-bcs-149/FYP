import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Button} from 'react-native';

function VaccineSelection({navigation}) {
  const [selectedVaccine, setSelectedVaccine] = useState(null);

  const vaccineData = [
    { id: '1', name: 'Pfizer', description: 'Pfizer COVID-19 Vaccine' },
    { id: '2', name: 'Moderna', description: 'Moderna COVID-19 Vaccine' },
    { id: '3', name: 'Johnson & Johnson', description: 'Johnson & Johnson COVID-19 Vaccine' },
    // Add more vaccine options as needed
  ];

  const handleVaccineSelection = (vaccine) => {
    setSelectedVaccine(vaccine);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.vaccineOption,
        selectedVaccine === item.id && styles.selectedOption,
      ]}
      onPress={() => handleVaccineSelection(item.id)}
    >
      <Text style={styles.optionText}>{item.name}</Text>
      <Text>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Vaccine</Text>
      <FlatList
        data={vaccineData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.selectedText}>
        {selectedVaccine ? vaccineData.find(vaccine => vaccine.id === selectedVaccine).name : 'Please Select Vaccine'}
      </Text>
      <TouchableOpacity onPress={()=>{selectedVaccine ?  navigation.navigate("DateDay") : <></>}} style={styles.button}>
        <Text style={styles.buttonText}>Select</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  vaccineOption: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: "100%",
    alignItems: 'center',
    borderRadius :20,
  },
  selectedOption: {
    backgroundColor: '#3498db', // Change the color when selected
    borderColor: '#3498db',
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  selectedText: {
    fontSize: 18,
    margin: 20,
  },
  button: {
    backgroundColor: '#3498db', // Button background color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10, // Rounded corners
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    elevation: 5, // Android shadow
  },
  buttonText: {
    color: '#fff', // Text color
    fontSize: 18,
    fontWeight: 'bold',
  },

});


export default VaccineSelection;