import { View, Text, StyleSheet, Dimensions } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import React from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");

export default function OnboardingScreen() {
  const navigation = useNavigation(); 
  const handleDone = () => {
    navigation.navigate('Login')
  }
  return (
    <View style={styles.container}>
      <Onboarding
      onDone={handleDone}
      onSkip={handleDone}
      
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#329998",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require("../assets/animations/Animation - 1699263838143.json")}
                  autoPlay
                />
              </View>
            ),
            title: "Stay Updated, Stay Protected",
            subtitle:
              "Keep track of your and your family's vaccination progress with real-time updates",
          },
          {
            backgroundColor: "#191970",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require("../assets/animations/reminder_Faiyaz.json")}
                  autoPlay
                />
              </View>
            ),
            title: "Never Miss a Shot",
            subtitle:
              "Get timely reminders for your next vaccine and organize your vaccine schedules effortlessly.",
          },
          {
            backgroundColor: "#b22222",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require("../assets/animations/PDF.json")}
                  autoPlay
                />
              </View>
            ),
            title: "Document Your Health Journey",
            subtitle:
              "Easily generate and print PDF reports of your vaccination records for convenient access and sharing",
          },
          {
            backgroundColor: "#4b0082",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require("../assets/animations/FINDER.json")}
                  autoPlay
                />
              </View>
            ),
            title: "Stay Ahead with Nearby Clinics",
            subtitle:
              "Locate authorized vaccination centers and schedule your visit with our real-time clinic finder.",
          },
          {
            backgroundColor: "#daa520",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require("../assets/animations/animation_feedback.json")}
                  autoPlay
                />
              </View>
            ),
            title: "Your Feedback Matters",
            subtitle:
              "Help us improve by providing your valuable feedback on our services and features.",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
});