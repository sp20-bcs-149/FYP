import React,{useEffect,useState} from 'react';
import { StyleSheet, View, Text, Button, FlatList, SafeAreaView, Alert } from 'react-native';
import * as Print from 'expo-print';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { useRoute } from '@react-navigation/native';
import myURL from '../../services/myurls';
import axios from 'axios';

export default function VaccineCardScreen() {
    const route = useRoute();
    let token_id = route.params?.token_id;
    let CheckProfile = route.params?.CheckProfile;
    const [data,setResData] = useState([]);

    
  const getpendingAppointment = () => {
    axios
      .get(`${myURL}/user/scheduleAppointment/completed/?my_ID=${token_id}`)
      .then((res) => {
        console.log("match User ID" + res.data);
        setResData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(()=>{
    getpendingAppointment();
  },[])


    const generateHtmlContent = () => {
      let vaccineDetails = data.map((vaccine,index) => `
          <div key=${index} style="margin-top: 10px; margin-bottom: 10px; padding: 10px; border: 1px solid #ddd; border-radius: 10px;">
              <h2 style="font-size: 16px; font-weight: bold; text-align: center;">${vaccine.selectedVaccine}</h2>
              <div style="display: flex; justify-content: space-between;">
                  <span style="font-size: 14px; font-weight: bold; color: grey;">Date: ${vaccine.created_at.substring(0, 10) + '...'}</span>
                  <span style="font-size: 14px; font-weight: bold; color: grey;">Time: ${vaccine.currentTime}</span>
              </div>
              <p style="font-size: 12px; text-align: left; color: grey;">Clinic Address: [45 Near to Lahore]</p>
          </div>
      `).join('');

      return `
          <div style="font-family: Arial, sans-serif; padding: 20px; background-color: white; color: black;">
              <div style="display: flex; justify-content: space-between; padding: 10px; background-color: #f8f8f8;">
                  <h1 style="font-size: 20px; font-weight: bold;">Vaccine Card</h1>
              </div>

              <div style="padding: 10px; margin-top: 20px; border: 1px solid #ddd; border-radius: 10px;">
                  <p style="margin: 10px;">Name: MUHAMMAD ADEEL</p>
                  <p style="margin: 10px;">Age: 21</p>
                  <p style="margin: 10px;">CNIC: 35201-378374873-9</p>
                  <p style="margin: 10px;">Address: [45 Near to Lahore]</p>
                  <hr style="border: 0; height: 1px; background-color: grey; margin: 10px 0;" />
                  <h2 style="text-align: center; font-size: 20px; color: grey; margin: 10px;">Injected Vaccine</h2>

                  ${vaccineDetails}
              </div>
          </div>
      `;
  };

    const handlePrint = async () => {
        const htmlContent = generateHtmlContent(); // This can be expanded to reflect your full content

        try {
            const { uri } = await Print.printToFileAsync({ html: htmlContent });
            const localSaveUri = FileSystem.documentDirectory + 'vaccineCard.pdf';
            await FileSystem.copyAsync({
                from: uri,
                to: localSaveUri
            });

            if (!(await Sharing.isAvailableAsync())) {
                alert("Uh oh", "sharing isn't available on your platform");
                return;
            }

            await Sharing.shareAsync(localSaveUri);
        } catch (error) {
            Alert.alert('Error', 'There was an error while printing.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Vaccine Card</Text>
                </View>

                <View style={styles.card}>
                    <Text style={{ margin: 10 }}>Name: {CheckProfile.name}</Text>
                    <Text style={{ margin: 10 }}>DOB: {CheckProfile.dob}</Text>
                    <Text style={{ margin: 10 }}>CNIC: {CheckProfile.cnic}</Text>
                    <Text style={{ margin: 10 }}>Address: [Address Here]</Text>
                    <View style={styles.separator}></View>
                    <Text style={{ alignSelf: 'center', justifyContent: 'center', fontSize: 20, color: "grey", margin: 10 }}>Injected Vaccine</Text>
                    {
                        data.map((item,index)=>(
                            <View key={index} style={styles.vaccineContainer}>
                                <Text style={styles.vaccineName}>{item.selectedVaccine}</Text>
                                <View style={styles.dateTimeContainer}>
                                    <Text style={styles.vaccineDate}>Date: {item.created_at}</Text>
                                    <Text style={styles.vaccineTime}>Time: {item.currentTime}</Text>
                                </View>
                                <Text style={styles.CAddress}>Clinic Address: 45 Near to Lahore</Text>
                            </View>
                        )) 
                    }
                </View>
            </View>
            <View style={styles.footer}>
                <Button title="Print" onPress={handlePrint} color="#329998" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    content: {
        flex: 1,
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#f8f8f8'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 20
    },
    CAddress: {
        fontSize: 12,
        textAlign: 'left',
        color: "grey",
        textAlign:'center'
    },
    card: {
        padding: 10,
        marginTop: 20,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10
    },
    separator: {
        height: 1,
        backgroundColor: 'grey',
        marginVertical: 10
    },
    vaccineContainer: {
        marginTop: 10,
        marginBottom: 10,  
        padding: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10
    },
    dateTimeContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    vaccineName: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    vaccineDate: {
        fontSize: 14,
        fontWeight: 'bold',
        color: "grey"
    },
    vaccineTime: {
        fontSize: 14,
        fontWeight: 'bold',
        color: "grey"
    },
    footer: {
        padding: 10,
        backgroundColor: '#f8f8f8',
    }
});