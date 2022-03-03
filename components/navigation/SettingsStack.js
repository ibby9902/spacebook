import React from 'react';  
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from '../screens/Settings';
import UpdateInfo from '../screens/UpdateInfo'
const Stack = createNativeStackNavigator();
const SettingsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Settings" component={Settings} options={{headerShown: false}}/>
            <Stack.Screen name="UpdateInfo" component={UpdateInfo} />
        </Stack.Navigator>
    )
}
export default SettingsStack;