import React from 'react';  
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from '../screens/Settings';
import AccountInfo from '../screens/AccountInfo'
const Stack = createNativeStackNavigator();
const SettingsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Settings" component={Settings} options={{headerShown: false}}/>
            <Stack.Screen name="AccountInfo" component={AccountInfo} />
        </Stack.Navigator>
    )
}
export default SettingsStack;