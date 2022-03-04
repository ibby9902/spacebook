import React, {useEffect, useState} from 'react'; 
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../common/CustomButton';
import CustomInput from '../common/CustomInput';
import getId from '../../functions/getId';
import theme from '../../assets/theme';
import validateEmail from '../../functions/validateEmail';
import validatePassword from '../../functions/validatePassword';
import updateInfo from '../../functions/requests/updateInfo';
const AccountInfo = (props) => {

    const [myID, setID] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);

    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [errorUpdating, setErrorUpdating] = useState(false);
    const [successUpdate, setSuccessUpdate] = useState(false);
    useEffect(() => {
        getId().then((id) => setID(parseInt(id)))
        props.navigation.setOptions({title: "Your Account"})
    },[]);

    useEffect(() => {
        validateEmail(email, setValidEmail)
    },[email])

    useEffect(() => {
        validatePassword(password, setValidPassword)
    },[password])

    const handleFirstNameUpdate = () => {
        if(firstName !== ''  && firstName !== null)
        {
            console.log(firstName)
            const data = {first_name: firstName};
            updateInfo(data, setErrorUpdating, setSuccessUpdate);
        }
        else 
            setFirstNameError(true);
    }
    const handleLastNameUpdate = () => {
        if(lastName !== ''  && lastName !== null)
        {
            const data = {last_name: lastName};
            updateInfo(data, setErrorUpdating), setSuccessUpdate;
        }
        else 
            setLastNameError(true);
    }

    const handleEmailUpdate = () => {
        if(validEmail)
        {
            const data = {email: email};
            updateInfo(data, setErrorUpdating, setSuccessUpdate);
        }
    }

    const handlePasswordUpdate = () => {
        if(validPassword)
        {
            const data = {password: password};
            updateInfo(data, setErrorUpdating, setSuccessUpdate);
        }
    }

    const renderStatusText = () => {
        if(successUpdate) {
            return (
                <Text style={styles.statusErrorText}>Information updated successfully!</Text>
            ) 
        } 
        else if(errorUpdating) {
            <Text style={styles.statusErrorText}>Error updating</Text>
        }
    }

    const renderNameError = () => {
        if(firstNameError || lastNameError) {
            return (
                <Text style={styles.statusErrorText}>Name cannot be empty</Text>
            )
        } 
    }

    const renderEmailError = () => {
        if(!validEmail) {
            return (
                <Text style={styles.statusErrorText}>Invalid Email</Text>
            )
        }
    }

    const renderPasswordError = () => {
        if(!validPassword) {
            return (
                <Text style={styles.statusErrorText}>Invalid Password</Text>
            )
        }
    }

    return (
        <View style={styles.container}>
            <CustomInput placeholder="First Name" styles={styles.input} setValue={(val) => setFirstName(val)}/>
            <CustomButton text="Update first name" onClick={handleFirstNameUpdate} style={styles.buttons} textStyle={styles.buttonText}/>
            <CustomInput placeholder="Last Name" styles={styles.input} setValue={(val) => setLastName(val)}/>
            <CustomButton text="Update last name" onClick={handleLastNameUpdate} style={styles.buttons} textStyle={styles.buttonText}/>
            <CustomInput placeholder="Email" styles={styles.input} setValue={(val) => setEmail(val)}/>
            <CustomButton text="Update email" onClick={handleEmailUpdate} style={styles.buttons} textStyle={styles.buttonText}/>
            <CustomInput placeholder="Password" styles={styles.input} setValue={(val) => setPassword(val)} secureEntry={true}/>
            <CustomButton text="Update password" onClick={handlePasswordUpdate} style={styles.buttons} textStyle={styles.buttonText}/>
            {renderStatusText()}
            {renderEmailError()}
            {renderPasswordError()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.DARK_GREY,
        padding: 10,
        alignItems: 'center'
    },
    input: {
        width: '80%',
        height: 40,
    },
    buttons: {
        width: '80%',
        height: 30,
        backgroundColor: theme.LIGHT_GRAY,
        marginVertical: 10,
    },
    buttonText: {
        fontWeight: 'bold',
        color: theme.TEXT_WHITE
    },
    statusErrorText: {
        color: theme.TEXT_WHITE,
        fontWeight: 'bold'
    }
})
export default AccountInfo;