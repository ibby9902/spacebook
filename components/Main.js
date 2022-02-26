import React, { useState, useEffect} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { ActivityIndicator, View} from 'react-native'
import ProfileStack from './navigation/ProfileStack'
import FriendsStack from './navigation/FriendsStack'
import Search from './screens/Search'
import getId from '../functions/getId';
import Ionicons from 'react-native-vector-icons/Ionicons'
import getToken from '../functions/getToken'
import FriendRequests from './screens/FriendRequests';
import theme from '../assets/theme';
const Tab = createBottomTabNavigator();




const Main = () => {
    const [id, setId] = useState(0);
    // get our id on first mount so we can pass it to Profile
    useState(() => {
        getId().then((res) => setId(res));
    },[])
    
        if(id != 0) {
            return (
                <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarStyle: {
                        backgroundColor: theme.DARK_GREY,
                        borderTopColor: 'transparent'
                    },
                    tabBarLabel: '',
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        if(route.name === 'ProfileStack'){
                            iconName = 'person-circle-outline'
                            color = focused ? theme.TEXT_WHITE : theme.TEXT_GREY
                        } else if(route.name === 'Search'){
                            iconName = 'search-outline'
                            color = focused ? theme.TEXT_WHITE : theme.TEXT_GREY
                        } else if(route.name === 'Friends'){
                            iconName = 'people-outline'
                            color = focused ? theme.TEXT_WHITE : theme.TEXT_GREY
                        }
                        return <Ionicons name={iconName} size={size} color={color}/>
                    },
                })}>
                    <Tab.Screen name="ProfileStack" component={ProfileStack} options={{headerShown: false}} initialParams={{id: id}}/>
                    <Tab.Screen name="Search" component={Search} options={{headerShown: false}}/>
                    <Tab.Screen name="Friends" component={FriendRequests} options={{headerShown: false}}/>
                </Tab.Navigator>
            )

        } else {
            return(
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.DARK_GREY}}>
                    <ActivityIndicator color={theme.TEXT_WHITE}/>
                </View>
            )
        }
    
    
}

export default Main;