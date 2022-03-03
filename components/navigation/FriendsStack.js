import React from 'react';  
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyFriends from '../screens/MyFriends';
import FriendRequests from '../screens/FriendRequests';
import SinglePost from '../screens/SinglePost';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

const FriendsStack = ({route}) => {
    return (
        // set tabProfile: false to allow conditional rendering of the "goBack" button 
        <Stack.Navigator>
            <Stack.Screen name="MyFriends" component={MyFriends} options={{headerShown: false}} initialParams={{id: route.params.id}}/>
            <Stack.Screen name="Friend Requests" component={FriendRequests} />
            <Stack.Screen name="FriendsProfile" component={Profile} options={{headerShown: false}} initialParams={{tabProfile: false}}/>
            <Stack.Screen name="SinglePost" component={SinglePost} />
        </Stack.Navigator>
    )
}

export default FriendsStack;