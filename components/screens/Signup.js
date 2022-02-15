import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import createUser from '../../functions/createUser'
import validateEmail from '../../functions/validateEmail';
import validatePassword from '../../functions/validatePassword';
const Signup = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accountCreated, setAccountCreated] = useState(false);

    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);

    useEffect(() => {
        validateEmail(email, setValidEmail)
        validatePassword(password, setValidPassword)
    })

    const onSignupPress = () => {
        if(validEmail && validPassword)
        createUser(
            firstName,
            lastName,
            email,
            password,
            setAccountCreated
        )
    }
    if(accountCreated){
        return (<View><Text>CREATED</Text></View>)
    }
    else {
        return(
            <View style={styles.container}>
                <TextInput placeholder="First name" onChangeText={(val) => setFirstName(val)}/>
                <TextInput placeholder="Last name" onChangeText={(val) => setLastName(val)}/>
                <TextInput placeholder="Email" onChangeText={(val) => setEmail(val)}/>
                <TextInput placeholder="Password" onChangeText={(val) => setPassword(val)} secureTextEntry={true} />
                <TouchableOpacity title="Sign up" onPress={onSignupPress} style={styles.signupButton}><Text>Sign up</Text></TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupButton: {
        backgroundColor: 'red',
        
    }
})

export default Signup;