import React, { useState, useEffect } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Home Screen</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Notifications</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Profile Screen</Text>
    </View>
  );
}

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Show Home Screen for 2 seconds
    setTimeout(() => {
      setModalVisible(true);
      // Hide modal after 10 seconds
      setTimeout(() => {
        setModalVisible(false);
      }, 10000);
    }, 2000);
  }, []);

  const handleViewNotifications = () => {
    console.log("You have some Unseen Notifications. Tab on View Notification to see them");
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Notifications') {
              iconName = 'notifications';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarActiveTintColor="tomato"
        tabBarInactiveTintColor="gray"
        tabBarStyle={{
          display: 'flex',
          // Additional styling if needed
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: '#329998', padding: 20, borderRadius: 10 }}>
            <Text style={{ color: 'white', fontSize: 18, marginBottom: 10 }}>
              You have some Unseen Notifications. Click on View Notification to see them
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity onPress={handleViewNotifications}>
                <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5 }}>
                  <Text style={{ color: '#329998', fontSize: 16, textAlign: 'center', fontWeight: 'bold' }}>
                    View Notifications
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5 }}>
                  <Text style={{ color: '#329998', fontSize: 16, textAlign: 'center', fontWeight: 'bold' }}>
                    Close
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </NavigationContainer>
  ); 
}
