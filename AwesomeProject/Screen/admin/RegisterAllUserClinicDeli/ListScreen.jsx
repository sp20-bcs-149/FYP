import React,{useEffect,useState} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import myURL from '../../../services/myurls';
import axios from 'axios';

// // Sample data for demonstration, replace with actual data from your backend or state management
// const mockDetails = {
//   user: [
//     { name: 'User 1', email: 'user1@example.com', cnic: '42101-1234567-1' },
//     { name: 'User 2', email: 'user2@example.com', cnic: '42101-7654321-1' },
//     // ... other users
//   ],
//   clinics: [
//     { name: 'Clinic 1', email: 'contact@clinic1.com', address: '123 Clinic St, City' },
//     { name: 'Clinic 2', email: 'contact@clinic2.com', address: '456 Clinic Ave, City' },
//     // ... other clinics
//   ],
//   deliveryman: [
//     { name: 'Deliveryman 1', email: 'delivery1@example.com', vehicleNo: 'ABC-1234' },
//     { name: 'Deliveryman 2', email: 'delivery2@example.com', vehicleNo: 'XYZ-5678' },
//     // ... other delivery personnel
//   ],
// };


const DetailItem = ({ label, value }) => (
  <Text style={styles.detailText}>{`${label}: ${value}`}</Text>
);

export default function ListScreen({ route }) {


  
  const { category } = route.params;
  console.log("category ===> " + category);
  // const data = mockDetails[category];

  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    // Fetch news data from your backend
    axios
      .get(`${myURL}/${category}`)
      .then((res) => {
        console.log("match User ID" + res.data);
        setAllUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <DetailItem label="Name" value={item.name} />
      <DetailItem label="Email" value={item.email} />
      {item.role && <DetailItem label="ROLE" value={item.role} />}
      {item.address && <DetailItem label="Address" value={item.address} />}
      {item.vehicleNo && <DetailItem label="Vehicle No" value={item.vehicleNo} />}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={allUser}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listItem: {
    backgroundColor: '#329998',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  detailText: {
    color: '#fff',
    fontSize: 14, // Smaller text size as requested
    marginVertical: 2,
  },

});