import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from '../screens/Settings';
import AccountInfo from '../screens/AccountInfo';

const Stack = createNativeStackNavigator();
const SettingsStack = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} initialParams={{ navigation: props.navigation }} />
      <Stack.Screen name="AccountInfo" component={AccountInfo} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
