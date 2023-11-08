import React,{useEffect,useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';

import { RadioButton } from 'react-native-paper';
import myURL from '../../services/myurls';
import axios from 'axios';

const Feedback = ({navigation}) => {

    



  const [feedback, setFeedback] = useState('');
  const [satisfaction, setSatisfaction] = useState(null);

  const handleSubmit = () => {
    if (feedback.trim() === '' || satisfaction === null) {
      Alert.alert('Error', 'Please provide feedback and select satisfaction level');
    } else {
     
        axios
        .post(myURL + "/user/feedback", {feedback,satisfaction })
        .then((res) => {
             Alert.alert('Success', 'Feedback submitted!');
             setFeedback(null);
             setSatisfaction(null);
             navigation.navigate("Homeuser");
        })
        .catch((err) => {
            console.log(err);
        });
    }
  };
  return (
    <View style={{ flex: 1, padding: 20, margin : 10 }}>
      {/* Header View */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: '#329998', fontSize: 20, paddingRight: 10, marginTop: 10, marginRight: 10 }}>&#x2190;</Text>
        </TouchableOpacity>
        <Text style={{ color: '#329998', fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Feedback</Text>
      </View>

      {/* Radio Buttons View */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ color: '#329998' }}>How satisfied are you?</Text>
        <View>
          <RadioButton.Group onValueChange={newValue => setSatisfaction(newValue)} value={satisfaction}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton value="satisfied" color="#329998" />
              <Text>Satisfied</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton value="notSatisfied" color="#329998" />
              <Text>Not Satisfied</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' , fontWeight: "700"}}>
              <RadioButton value="neither" color="#329998" />
              <Text>Neither Satisfied nor Dissatisfied</Text>
            </View>
          </RadioButton.Group>
        </View>
      </View>

      {/* Feedback Box */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ color: '#329998', fontWeight: 'bold', marginBottom: 5 }}>Help us to improve your App!</Text>
        <TextInput
          multiline
          maxLength={200}
          placeholder="Type your feedback here..."
          style={{
            borderWidth: 1,
            borderColor: '#329998',
            borderRadius: 5,
            padding: 10,
            // height: 100,
          }}
          value={feedback}
          onChangeText={text => setFeedback(text)}
        />
        <Text style={{ color: '#329998', fontSize: 12, marginTop: 5, fontWeight: "700" }}>
          Note: Please keep your feedback under 200 words.
        </Text>
      </View>

      {/* Submit Feedback */}
      <TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: '#329998', padding: 10, borderRadius: 5 }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Submit Feedback</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Feedback;