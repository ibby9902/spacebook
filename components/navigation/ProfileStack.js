import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/Profile'
import UsersFriends from '../screens/UsersFriends';
const Stack = createNativeStackNavigator();

const ProfileStack = ({route}) => {
    return (
        <Stack.Navigator initialRouteName='Profile'>
                        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} initialParams={{id: route.params.id}}/>
                        {/*a whole screen with a list of friends? */}
                        <Stack.Screen name="UsersFriends" component={UsersFriends} initialParams={{id: route.params.id}}/>
                        {/* <Stack.Screen name="SinglePost" component={Signup}/> A whole screen for a single post??*/}
                        {/* Profile stack screen here? So we can click friends on the friends list to show their profile? */} 
        </Stack.Navigator>
    )
}
export default ProfileStack;