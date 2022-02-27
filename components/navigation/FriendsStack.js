import React from 'react';  
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Friends from '../screens/Friends';
import FriendRequests from '../screens/FriendRequests';
const Stack = createNativeStackNavigator();

const FriendsStack = ({route}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="FriendsScreen" component={Friends} options={{headerShown: false}} initialParams={{id: route.params.id}}/>
            <Stack.Screen name="Friend Requests" component={FriendRequests} />
        </Stack.Navigator>
    )
}

export default FriendsStack;