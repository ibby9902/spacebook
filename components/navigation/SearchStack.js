import React from 'react';  
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '../screens/Search';
import Profile from '../screens/Profile'
const Stack = createNativeStackNavigator();

const SearchStack = ({route}) => {
    return (
        // set tabProfile: false to allow conditional rendering of the "goBack" button 
        <Stack.Navigator>
            <Stack.Screen name="Search" component={Search} options={{headerShown: false}}/>
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

export default SearchStack;