import React, { useState } from "react";
import myURL from "../services/myurls";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  Modal,
} from "react-native";
import userService from "../services/userservices";

//
import img from "../assets/banner.png";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [pincode, setPincode] = useState("");
  const [dbpincode, setdbPincode] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const [errormsg, setErrormsg] = useState(null);
  const [passwordError, setpasswordError] = useState(null);

  const validatePassword = (password) => {
    // Define the regular expression pattern for the password rules
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

    // Test if the password matches the pattern
    const isValid = passwordPattern.test(password);

    // Return true if the password is valid, false otherwise
    return isValid;
  };

  async function senddata() {
    const isValidPassword = validatePassword(password);
    if (password.length < 8) {
      setErrormsg("Password should be at least 8 characters long.");
    }
    if (!name || !email || !password || !confirmPassword || !role) {
      setErrormsg("Please fillout all the filled !!! ");
    } else if (password != confirmPassword) {
      setErrormsg("Password and Confirm password is Incorrect");
    } else if (isValidPassword == false) {
      setpasswordError(
        "Password should be atleast 1 Small,Large and 1 special character and 1 digit and 8 digit"
      );
    } else {
      // navigation.navigate("EmailAuthentication",{name,email,password,role});

      userService
        .register(name, email, password, role)
        .then((data) => {
          console.log(data);
          // props.location.push("/login");
          navigation.navigate("Login");
        })
        .catch((err) => {
          console.log("Error");
          // toast.error(err.response.data,{
          // // toast.error(err.history.data,{
          // position: toast.POSITION.TOP_CENTER
          // });
        });
    }
    //console.log("Signup Successfully data : " +name,email,password,role);
  }

  return (
    <>
      <ImageBackground source={img} resizeMode="cover" style={styles.img}>
        {/* <KeyboardAvoidingView></KeyboardAvoidingView> */}
        <View style={styles.container}>
          <View style={styles.top}></View>
          <View style={styles.bottom}>
            <ScrollView>
              <View style={{ marginTop: 0, alignSelf: "center" }}>
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 35,
                    fontWeight: "bold",
                    marginTop: 40,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 40 }}>V</Text>accine{" "}
                  <Text style={{ color: "white", fontSize: 35 }}>A</Text>pp
                </Text>
              </View>
              <Text
                style={{
                  alignSelf: "center",
                  color: "white",
                  fontSize: 14,
                  marginTop: 10,
                }}
              >
                Create Your Account
              </Text>
              <Text
                style={{ alignSelf: "center", fontSize: 10, marginTop: 20 }}
              >
                {errormsg ? (
                  <View style={{ backgroundColor: "#C2185B", margin: 10 }}>
                    <Text
                      style={{
                        alignSelf: "center",
                        borderRadius: 10,
                        padding: 5,
                        color: "white",
                        fontSize: 10,
                      }}
                    >
                      {errormsg}
                    </Text>
                  </View>
                ) : null}
              </Text>
              {passwordError ? (
                <Text
                  style={{
                    alignSelf: "center",
                    backgroundColor: "white",
                    borderRadius: 10,
                    padding: 5,
                    color: "black",
                    fontSize: 10,
                  }}
                >
                  {passwordError}
                </Text>
              ) : null}

              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "white",
                  fontSize: 15,
                  margin: 0,
                  marginLeft: 60,
                }}
              >
                Name
              </Text>
              <TextInput
                onPressIn={() => {
                  setErrormsg(null);
                }}
                style={styles.input}
                onChangeText={(name) => {
                  setName(name.toUpperCase());
                }}
                placeholder="Enter Name"
              />

              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "white",
                  fontSize: 15,
                  margin: 10,
                  marginLeft: 60,
                }}
              >
                Email
              </Text>
              <TextInput
                onPressIn={() => {
                  setErrormsg(null);
                }}
                style={styles.input}
                onChangeText={(email) => {
                  setEmail(email);
                }}
                placeholder="Enter Email"
              />

              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "white",
                  fontSize: 15,
                  margin: 10,
                  marginLeft: 60,
                }}
              >
                Password
              </Text>
              <TextInput
                onPressIn={() => {
                  setErrormsg(null);
                }}
                style={styles.input}
                onChangeText={(pass) => {
                  setPassword(pass);
                }}
                placeholder="Enter Password"
                secureTextEntry={true}
              />

              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "white",
                  fontSize: 15,
                  margin: 10,
                  marginLeft: 60,
                }}
              >
                Confirm Password
              </Text>
              <TextInput
                onPressIn={() => {
                  setErrormsg(null);
                }}
                style={styles.input}
                onChangeText={(pass) => {
                  setConfirmPassword(pass);
                }}
                placeholder="Enter Confirm Password"
                secureTextEntry={true}
              />

              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "white",
                  fontSize: 15,
                  margin: 10,
                  marginLeft: 60,
                }}
              >
                Role
              </Text>
              <TextInput
                onPressIn={() => {
                  setErrormsg(null);
                }}
                style={styles.input}
                onChangeText={(role) => {
                  setRole(role.toLowerCase());
                }}
                placeholder="User || Admin || Delivery || Clinic"
              />

              <TouchableOpacity
                // onPress={() => {
                //   senddata();

                // }}
                onPress={(e) => {
                  axios
                    .post(`${myURL}/sendmail/`, {
                      email,
                    })

                    .then((res) => {
                      console.log("successfully request sent");
                      setModalVisible(true);
                      setdbPincode(res.data?.pincode);
                    })
                    .catch((err) => {
                      console.log("ok");
                    });
                }}
              >
                <Text
                  style={{
                    borderRadius: 10,
                    alignSelf: "center",
                    color: "white",
                    fontSize: 15,
                    marginTop: 20,
                    backgroundColor: "#2E6969",
                    height: 40,
                    width: "60%",
                    textAlign: "center",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Sign up
                </Text>
              </TouchableOpacity>

              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 75,
                  marginBottom: 30,
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    color: "#30353b",
                    fontSize: 14,
                    marginTop: 8,
                  }}
                >
                  Already Have an Account?
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Login");
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      color: "white",
                      fontSize: 14,
                      marginTop: 8,
                    }}
                  >
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modelcontainer}>
          <Text style={styles.modeltitle}>
            Pincode is sent On your Email Address
          </Text>
          <View style={styles.modelinputContainer}>
            <TextInput
              style={styles.modelinput}
              placeholder="enter pin"
              value={pincode}
              onChangeText={setPincode}
              keyboardType="number-pad"
              autoCapitalize="none"
            />
            {/* <Text style={[styles.modelradioLabel, { alignSelf: "center" }]}>
              oedf
            </Text> */}
          </View>
          <TouchableOpacity
            style={styles.modelbutton}
            onPress={() => {
              console.log(pincode + " " + dbpincode);
              if (pincode.toString() === dbpincode.toString()) {
                alert("Email Verified successfully");
                senddata();

                console.log("EQUAL");
              }
              setModalVisible(false);
            }}
          >
            <Text style={styles.modelbuttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  img: {
    flex: 1,
  },
  top: {
    flex: 2.5 / 10,
  },
  bottom: {
    flex: 7.5 / 10,
    backgroundColor: "#329998",
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  input: {
    backgroundColor: "#EDEEEF",
    width: "70%",
    height: 40,
    alignSelf: "center",
    borderRadius: 5,
    paddingLeft: 10,
  },
  modelcontainer: {
    flex: 1,
    backgroundColor: "#329998",
    alignItems: "center",
    justifyContent: "center",
  },
  modeltitle: {
    fontSize: 32,
    fontFamily: "",

    color: "#FFFFFF",
    marginBottom: 32,
  },
  modelinputContainer: {
    marginBottom: 32,
  },
  modelinput: {
    fontFamily: "",
    backgroundColor: "#FFFFFF",
    height: 50,
    width: 300,
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  modelradioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  modelradioLabel: {
    fontFamily: "",
    color: "#FFFFFF",
    marginRight: 16,
  },
  modelradioGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  modelradioButton: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    marginRight: 16,
  },
  modelradioButtonActive: {
    backgroundColor: "#1DBF73",
  },
  modelradioOption: {
    fontFamily: "",
    color: "#1DBF73",
    fontWeight: "bold",
  },
  modelradioOptionActive: {
    fontFamily: "",
    color: "#FFFFFF",
  },
  modelbutton: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 45,
    paddingVertical: 10,
    borderRadius: 10,
  },
  modelbuttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1DBF73",
  },
});

export default SignUp;
