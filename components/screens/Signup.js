import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

const Signup = () => {

    [firstName, setFirstName] = useState('');
    [lastName, setLastName] = useState('');
    [email, setEmail] = useState('');
    [password, setPassword] = useState('');

    return(
        <View style={styles.container}>
            <TextInput placeholder="First name" onChangeText={(val) => setFirstName(val)}/>
            <TextInput placeholder="Last name" onChangeText={(val) => setLastName(val)}/>
            <TextInput placeholder="Email" onChangeText={(val) => setEmail(val)}/>
            <TextInput placeholder="Password" onChangeText={(val) => setPassword(val)} secureTextEntry={true} />
        </View>
    );
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