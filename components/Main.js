import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './screens/Profile'
import Friends from './screens/Friends'
import Search from './screens/Search'
const Tab = createBottomTabNavigator();




const Main = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
            <Tab.Screen name="Search" component={Search} options={{headerShown: false}}/>
            <Tab.Screen name="Friends" component={Friends} options={{headerShown: false}}/>
        </Tab.Navigator>
    )
}

export default Main;