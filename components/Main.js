import React, {Component} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './screens/Profile'
import FriendsStack from './navigation/FriendsStack'
import Search from './screens/Search'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons'
import getToken from '../functions/getToken'
const Tab = createBottomTabNavigator();




class Main extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.unsubscribe = this.props.navigation.addListener('focus', () => {
            this.checkLoggedIn();
        })
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    checkLoggedIn = async () => {
        const value = await getToken();
        if(value == null)
            this.props.navigation.navigate("Login")
        
    }
    render(){
        return (
            <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarLabel: '',
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if(route.name === 'Profile'){
                        iconName = 'person-circle-outline'
                    } else if(route.name === 'Search'){
                        iconName = 'search-outline'
                    } else if(route.name === 'Friends'){
                        iconName = 'people-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>
                }
            })}>
                <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
                <Tab.Screen name="Search" component={Search} options={{headerShown: false}}/>
                <Tab.Screen name="Friends" component={FriendsStack} options={{headerShown: false}}/>
            </Tab.Navigator>
        )
    }
    
}

export default Main;