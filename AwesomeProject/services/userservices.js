import GenericService from "../services/GenericServices";
import jwtDecode from "jwt-decode";
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

import myURL from "./myurls";

class UserService extends GenericService{
    constructor() {
        super();   
    }

    login =  (email,password) => new Promise((resolve,reject)=>{
        this.post( myURL+"/login",{email,password})
        .then(async token=>{
            try {
                await AsyncStorage.setItem('token', token);
                console.log('Token stored in AsyncStorage.');
            } catch (error) {
                console.error('Error storing token:', error);
            }
            resolve(token);
        })
        .catch((err)=>{
            reject(err);
        })
    })

    logout = () => {
        // localStorage.removeItem("token");
    };

    getLoggedInUser = async ()=>{
        try {
            const storedToken = await AsyncStorage.getItem('token');
            console.log('Retrieved token:', storedToken);
            return jwtDecode(storedToken);
        } catch (error) {
            console.error('Error retrieving token:', error);
            return null;
        }
    }





    register = (name,email,password,role) => 
        this.post(myURL+"/signup",{name,email,password,role});
}



let userService = new UserService();
export default userService;