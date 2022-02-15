import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput } from 'react-native';
import storeData from '../../functions/storeData';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');


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
                response.json().then(data => {
                    storeData("id",data.id)
                    storeData("token",data.token)
                })
                navigation.navigate("Main")
            })
    }

    return(
        <View style={styles.container}>
            <TextInput placeholder="Email" onChangeText={(val) => setEmail(val)}/>
            <TextInput placeholder="Password"secureTextEntry={true} onChangeText={(val) => setPassword(val)}/>
            <TouchableOpacity title="Login"style={styles.loginButton}  onPress={onLoginPress}><Text>Login</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButton: {
        backgroundColor: 'red',
        
    }
})
export default LoginScreen;