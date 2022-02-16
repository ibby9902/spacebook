import React, {Component} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './screens/Profile'
import Friends from './screens/Friends'
import Search from './screens/Search'
import AsyncStorage from '@react-native-async-storage/async-storage';
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
        console.log(value)
        if(value == null)
            this.props.navigation.navigate("Landing")
        
    }
    render(){
        return (
            <Tab.Navigator>
                <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
                <Tab.Screen name="Search" component={Search} options={{headerShown: false}}/>
                <Tab.Screen name="Friends" component={Friends} options={{headerShown: false}}/>
            </Tab.Navigator>
        )
    }
    
}

export default Main;