import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import AddNewPost from '../screens/AddNewPost';
import Drafts from '../screens/Drafts';
import EditDraft from '../screens/EditDraft';
import ScheduleDraft from '../screens/ScheduleDraft';
import UsersFriends from '../screens/UsersFriends';

const Stack = createNativeStackNavigator();

const SearchStack = () => {
  return (
  // set tabProfile: false to allow conditional rendering of the "goBack" button
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="AddNewPost" component={AddNewPost} />
      <Stack.Screen name="Drafts" component={Drafts} />
      <Stack.Screen name="EditDraft" component={EditDraft} />
      <Stack.Screen name="ScheduleDraft" component={ScheduleDraft} />
      <Stack.Screen name="UsersFriends" component={UsersFriends} />
    </Stack.Navigator>
  );
};

export default SearchStack;
