import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import createUser from '../../functions/requests/createUser';
import validateEmail from '../../functions/validateEmail';
import validatePassword from '../../functions/validatePassword';
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';
import theme from '../../assets/theme';

const logo = require('../../assets/logo.png');

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountCreated, setAccountCreated] = useState(false);

  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [errorOnSignup, setErrorOnSignup] = useState(false);

  // validate email & password on every update
  useEffect(() => {
    validateEmail(email, setValidEmail);
    validatePassword(password, setValidPassword);
  });

  const handleSignUp = () => {
    if (firstName && lastName !== '' && validEmail && validPassword) {
      createUser(
        firstName,
        lastName,
        email,
        password,
        setAccountCreated,
        setErrorOnSignup,
      );
    }
  };

  const showEmailErrorText = () => {
    if (!validEmail) {
      return (
        <Text style={styles.text}>Invalid Email address</Text>
      );
    }
  };

  const showPasswordErrorText = () => {
    if (!validPassword) {
      return (
        <Text style={styles.text}>Password must be longer than 5 characters</Text>
      );
    }
  };

  const statusText = () => {
    if (accountCreated) {
      return <Text style={styles.text}>Account Created!</Text>;
    } else if (errorOnSignup) {
      return <Text style={styles.text}>Something went wrong</Text>;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.image} />
      </View>
      <View style={styles.formContainer}>
        <CustomInput placeholder="First name" setValue={(val) => setFirstName(val)} styles={styles.input} />
        <CustomInput placeholder="Last name" setValue={(val) => setLastName(val)} styles={styles.input} />
        <CustomInput placeholder="Email" setValue={(val) => setEmail(val)} styles={styles.input} />
        <CustomInput placeholder="Password" setValue={(val) => setPassword(val)} secureEntry={true} styles={styles.input} />
        <CustomButton text="Sign up" onClick={handleSignUp} style={styles.signupButton} textStyle={styles.signupText} />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {statusText()}
        {showEmailErrorText()}
        {showPasswordErrorText()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.DARK_GREY,
  },
  signupButton: {
    width: '75%',
    height: 50,
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: theme.BUTTON_DARK_BLUE,
  },
  signupText: {
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    fontWeight: 'bold',
    color: theme.TEXT_WHITE,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop: 20,
    height: 200,
    width: 200,

  },
  input: {
    backgroundColor: theme.DARK_GREY,
    width: '75%',
    height: 60,
    padding: 10,
    marginVertical: 5,
  },
});

export default Signup;
