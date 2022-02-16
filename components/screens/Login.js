import React, { useState } from 'react'
import { StyleSheet, Text, View, Image} from 'react-native';
import storeData from '../../functions/storeData';
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';
const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onLoginPress = () => {
        let to_send = {
            email: email,
            password: password
        };
    
        return fetch("http://localhost:3333/api/1.0.0/login" , {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(to_send)
            })
            .then((response) => {
                if(response.status === 200){
                    return response.json()
                }
                else if(response.status === 400) {
                    throw "Invalid email or passord"
                }
                else {
                    throw "Something went wrong"
                }
            })
            .then(async (responseJson) => {
                await storeData("id",responseJson.id)
                await storeData("token",responseJson.token)
                navigation.navigate("Main");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image source={require('../../assets/logo.png')} style={styles.image}/>
            </View>
            <View style={styles.formContainer}>
                <CustomInput placeholder="Email" setValue={setEmail} value={email}/>
                <CustomInput placeholder="Password" secureEntry={true} setValue={setPassword} value={password}/>
                <CustomButton text="Login"  onClick={onLoginPress} style={styles.loginButton} textStyle={styles.loginText}/>
                <CustomButton text="Sign Up "  onClick={() => navigation.navigate("Signup")} style={styles.signupButton} textStyle={styles.signupText}/>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAEDF4'
    },
    loginButton: {
        width: '75%',
        height: 50,
        padding: 15,
        marginVertical: 5,
        borderRadius: 5,
        backgroundColor: '#768EDD'
    },
    signupButton: {
        width: '75%',
        height: 50,
        padding: 15,
        marginVertical: 5,
        borderRadius: 5,
        marginBottom: 200,
        
    },
    signupText: {
        fontWeight: 'bold',
        color: '#4d5655'
    },
    loginText: {
        fontWeight: 'bold',
        color: 'white'
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 220,
        width: 220,

    }
})
export default LoginScreen;