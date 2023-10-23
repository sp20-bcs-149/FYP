import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const clinics = [
  { label: 'City Clinic', value: 'City Clinic' },
  { label: 'Lahore Clinic', value: 'Lahore Clinic' },
  // Add the rest of your clinics here
];

const vaccinesData = [
  { label: 'Measles', value: 'Measles' },
  { label: 'Flu', value: 'Flu' },
  { label: 'Hepatitis B', value: 'Hepatitis B' },
  { label: 'Rabies', value: 'Rabies' },
  { label: 'Yellow fever', value: 'Yellow fever' },
  { label: 'Hepatitis A', value: 'Hepatitis A' },
  { label: 'Rubella', value: 'Rubella' },
  { label: 'HPV', value: 'HPV' },
  { label: 'Mumps', value: 'Mumps' },
  { label: 'Japanese encephalitis', value: 'Japanese encephalitis' }
];

const specificPeriod = [
  { label: 'Year', value: 'Year' },
  { label: 'Month', value: 'Month' },
  { label: 'Week', value: 'Week' },
  { label: 'Day', value: 'Day' },
];

const ReportMenu = ({navigation}) => {
  const [clinicValue, setClinicValue] = useState(null);
  const [vaccineValue, setVaccineValue] = useState(null);
  const [periodValue, setPeriodValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const generateReport = () => {
    navigation.navigate('Charts')
    const reportData = {
      Clinic: clinicValue,
      Vaccine: vaccineValue,
      Period: periodValue,
    };

    alert(JSON.stringify(reportData, null, 2));

    // Reset all state values to null
    setClinicValue(null);
    setVaccineValue(null);
    setPeriodValue(null);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, marginBottom: 50,textAlign:'center' }}>Analytics Report</Text>

      <Text style={{marginBottom:15, marginTop: 15}}>Clinic Name</Text>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={clinics}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select Clinic' : '...'}
        searchPlaceholder="Search..."
        value={clinicValue}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setClinicValue(item.value);
          setIsFocus(false);
        }}
      />
      <Text style={{marginBottom:15, marginTop: 15}}>Vaccine Name</Text>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={vaccinesData}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select Vaccine' : '...'}
        searchPlaceholder="Search..."
        value={vaccineValue}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setVaccineValue(item.value);
          setIsFocus(false);
        }}
      />
      <Text style={{marginBottom:15, marginTop: 15}}>Specific Period</Text>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={specificPeriod}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select Period' : '...'}
        searchPlaceholder="Search..."
        value={periodValue}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setPeriodValue(item.value);
          setIsFocus(false);
        }}
      />
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity onPress={generateReport} style={styles.generateButton}>
          <Text style={{ color: 'white',fontWeight:'700',fontSize: 20 }}>Generate Report</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    padding: 16,
    justifyContent: 'center',
    alignContent: 'center'
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  generateButton: {
    backgroundColor: '#329998',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default ReportMenu;