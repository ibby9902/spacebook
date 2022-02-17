import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import createUser from '../../functions/createUser'
import validateEmail from '../../functions/validateEmail';
import validatePassword from '../../functions/validatePassword';
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';
const Signup = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accountCreated, setAccountCreated] = useState(false);

    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    const [errorOnSignup, setErrorOnSignup] = useState(false);
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
            setAccountCreated,
            setErrorOnSignup,
            
        )
    }

    const statusText = () => {
        if(accountCreated)
            return <Text>Account Created!</Text>
        else if(errorOnSignup)
            return <Text>Something went wrong</Text>
    }
        return(
            <View style={styles.container}>
                <CustomInput placeholder="First name" setValue={(val) => setFirstName(val)}/>
                <CustomInput placeholder="Last name" setValue={(val) => setLastName(val)}/>
                <CustomInput placeholder="Email" setValue={(val) => setEmail(val)} style={(validEmail ? {color: 'green'} : {color: 'red'})}/>
                <CustomInput placeholder="Password" setValue={(val) => setPassword(val)} secureEntry={true} />
                <CustomButton text="Sign up" onClick={onSignupPress} style={styles.signupButton} textStyle={styles.signupText}/>
                {statusText()}
            </View>
        );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EAEDF4'
    },
    signupButton: {
        width: '75%',
        height: 50,
        padding: 15,
        marginVertical: 5,
        borderRadius: 5,
        backgroundColor: '#768EDD'
        
    },
    signupText: {
        fontWeight: 'bold',
        color: 'white'
    },
})

export default Signup;