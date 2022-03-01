import React from 'react';  
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyFriends from '../screens/MyFriends';
import FriendRequests from '../screens/FriendRequests';
import Profile from '../screens/Profile'
const Stack = createNativeStackNavigator();

const FriendsStack = ({route}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MyFriends" component={MyFriends} options={{headerShown: false}} initialParams={{id: route.params.id}}/>
            <Stack.Screen name="Friend Requests" component={FriendRequests} />
            <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} initialParams={{tabProfile: false}}/>
        </Stack.Navigator>
    )
}

export default FriendsStack;