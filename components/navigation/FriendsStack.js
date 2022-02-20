import React, { Component } from 'react';  
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Friends from '../screens/Friends';
import FriendRequests from '../screens/FriendRequests';
const Stack = createNativeStackNavigator();

class FriendsStack extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="FriendsScreen" component={Friends} options={{headerShown: false}}/>
                <Stack.Screen name="Friend Requests" component={FriendRequests}/>
            </Stack.Navigator>
        )
    }
}

export default FriendsStack