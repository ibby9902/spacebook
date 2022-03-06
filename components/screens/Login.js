import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import login from '../../functions/requests/login';
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';
import theme from '../../assets/theme';

const logo = require('../../assets/logo.png');

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [loginInvalid, setLoginInvalid] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate('Main');
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    const data = {
      email,
      password,
    };
    login(data, setIsLoggedIn, setLoginError);
  };

  const statusText = () => {
    if (loginError) {
      return <Text style={styles.statusText}>Invalid email or password</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.image} />
      </View>
      <View style={styles.formContainer}>
        <CustomInput placeholder="Email" setValue={setEmail} value={email} styles={styles.input} />
        <CustomInput placeholder="Password" secureEntry={true} setValue={setPassword} value={password} styles={styles.input} />
        <CustomButton text="Login" onClick={handleLogin} style={styles.loginButton} textStyle={styles.loginText} />
        <CustomButton text="Sign Up " onClick={() => navigation.navigate('Signup')} style={styles.signupButton} textStyle={styles.signupText} />
        {statusText()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.DARK_GREY,
  },
  loginButton: {
    width: '75%',
    height: 50,
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: theme.YELLOW,
  },
  signupButton: {
    width: '75%',
    height: 50,
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    marginBottom: 200,
    backgroundColor: theme.BUTTON_DARK_BLUE,
  },
  signupText: {
    fontWeight: 'bold',
    color: 'white',
  },
  loginText: {
    fontWeight: 'bold',
    color: 'white',
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
    height: 200,
    width: 200,

  },
  statusText: {
    fontWeight: 'bold',
    color: theme.TEXT_WHITE,
  },
  input: {
    backgroundColor: theme.DARK_GREY,
    width: '75%',
    height: 60,
    padding: 10,
    marginVertical: 5,
  },

});

export default LoginScreen;
