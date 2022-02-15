import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput } from 'react-native';
import storeData from "../../functions/storeData";

const LoginScreen = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');


    const login = () => {
        console.log("login pressed")
    }

    return(
        <View style={styles.container}>
            <TextInput placeholder="Email" onChangeText={(val) => setEmail(val)}/>
            <TextInput placeholder="Password"secureTextEntry={true} onChangeText={(val) => setPassword(val)}/>
            <TouchableOpacity title="Login"style={styles.loginButton}  onPress={login}><Text>Login</Text></TouchableOpacity>
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