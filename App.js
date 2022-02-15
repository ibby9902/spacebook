import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Landing from './components/screens/Landing';
import Login from './components/screens/Login';
import Signup from './components/screens/Signup'
import Main from './components/Main'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const App = () => {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}}/>
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="Signup" component={Signup}/>
                    <Stack.Screen name="Main" component={Main} options={{headerShown: false}}/>
                </Stack.Navigator>
            </NavigationContainer>
            );
    }
export default App;