import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/Profile'
import UsersFriends from '../screens/UsersFriends';
import SinglePost from '../screens/SinglePost';
import AddNewPost from '../screens/AddNewPost';
import EditPost from '../screens/EditPost';
const Stack = createNativeStackNavigator();

const ProfileStack = ({route}) => {
    return (
        <Stack.Navigator initialRouteName='Profile'>
                        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} initialParams={{id: route.params.id, tabProfile: true}}/>
                        {/*a whole screen with a list of friends? */}
                        <Stack.Screen name="UsersFriends" component={UsersFriends} initialParams={{id: route.params.id, tabProfile: false}}/>
                        <Stack.Screen name="SinglePost" component={SinglePost} />
                        <Stack.Screen name="AddNewPost" component={AddNewPost}/>
                        <Stack.Screen name="EditPost" component={EditPost}/>
                        {/* <Stack.Screen name="SinglePost" component={Signup}/> A whole screen for a single post??*/}
                        {/* Profile stack screen here? So we can click friends on the friends list to show their profile? */} 
        </Stack.Navigator>
    )
}
export default ProfileStack;