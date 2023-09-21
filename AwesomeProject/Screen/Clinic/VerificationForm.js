import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const VerificationForm = () => {
  const [cnic, setCNIC] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [vaccineType, setVaccineType] = useState('');
  const [clinicName, setClinicName] = useState('');
  const [diseaseName, setDiseaseName] = useState('');

  const [cnicError, setCNICError] = useState('');
  const [nameError, setNameError] = useState('');
  const [dateError, setDateError] = useState('');
  const [timeError, setTimeError] = useState('');
  const [vaccineTypeError, setVaccineTypeError] = useState('');
  const [clinicNameError, setClinicNameError] = useState('');
  const [diseaseNameError, setDiseaseNameError] = useState('');

  const validateCNIC = (cnic) => {
    const isValid = /^\d{13}$/.test(cnic);
    setCNICError(isValid ? '' : 'CNIC should be 13 digits and only digits allowed');
    return isValid;
  };

  const validateName = (name) => {
    const isValid = /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name);
    setNameError(isValid ? '' : 'Invalid name format');
    return isValid;
  };

  const validateDate = (date) => {
    const isValid = !isNaN(Date.parse(date));
    setDateError(isValid ? '' : 'Invalid date format');
    return isValid;
  };

  const validateTime = (time) => {
    const isValid = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(time);
    setTimeError(isValid ? '' : 'Invalid time format (HH:MM)');
    return isValid;
  };

  const validateVaccineType = (vaccineType) => {
    const isValid = /^[A-Za-z\s]+$/.test(vaccineType);
    setVaccineTypeError(isValid ? '' : 'Vaccine Type should be in word format');
    return isValid;
  };

  const validateClinicName = (clinicName) => {
    const isValid = /^[A-Za-z\s]+$/.test(clinicName);
    setClinicNameError(isValid ? '' : 'Clinic Name should be in word format');
    return isValid;
  };

  const validateDiseaseName = (diseaseName) => {
    const isValid = /^[A-Za-z\s]+$/.test(diseaseName);
    setDiseaseNameError(isValid ? '' : 'Disease Name should be in word format');
    return isValid;
  };

  const handleSubmit = () => {
    const isCNICValid = validateCNIC(cnic);
    const isNameValid = validateName(name);
    const isDateValid = validateDate(date);
    const isTimeValid = validateTime(time);
    const isVaccineTypeValid = validateVaccineType(vaccineType);
    const isClinicNameValid = validateClinicName(clinicName);
    const isDiseaseNameValid = validateDiseaseName(diseaseName);

    if (
      isCNICValid &&
      isNameValid &&
      isDateValid &&
      isTimeValid &&
      isVaccineTypeValid &&
      isClinicNameValid &&
      isDiseaseNameValid
    ) {
      // Other submission logic
      console.log({
        cnic,
        name,
        date,
        time,
        vaccineType,
        clinicName,
        diseaseName,
      });
    }
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Verification Form</Text>
      <TextInput
        style={styles.input}
        placeholder="CNIC"
        value={cnic}
        onChangeText={setCNIC}
        keyboardType="numeric"
      />
      {cnicError ? <Text style={styles.errorText}>{cnicError}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
      />
      {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={date}
        onChangeText={setDate}
        keyboardType="numeric"
      />
      {dateError ? <Text style={styles.errorText}>{dateError}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Time (HH:MM)"
        value={time}
        onChangeText={setTime}
      />
      {timeError ? <Text style={styles.errorText}>{timeError}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Vaccine Type"
        value={vaccineType}
        onChangeText={setVaccineType}
        autoCapitalize="words"
      />
      {vaccineTypeError ? (
        <Text style={styles.errorText}>{vaccineTypeError}</Text>
      ) : null}
      <TextInput
        style={styles.input}
        placeholder="Clinic Name"
        value={clinicName}
        onChangeText={setClinicName}
        autoCapitalize="words"
      />
      {clinicNameError ? (
        <Text style={styles.errorText}>{clinicNameError}</Text>
      ) : null}
      <TextInput
        style={styles.input}
        placeholder="Disease Name"
        value={diseaseName}
        onChangeText={setDiseaseName}
        autoCapitalize="words"
      />
      {diseaseNameError ? (
        <Text style={styles.errorText}>{diseaseNameError}</Text>
      ) : null}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 10,
    borderRadius: 4,
    color: '#333',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
  },
});

export default VerificationForm;
