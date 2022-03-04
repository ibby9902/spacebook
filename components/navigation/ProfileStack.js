import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/Profile'
import UsersFriends from '../screens/UsersFriends';
import SinglePost from '../screens/SinglePost';
import AddNewPost from '../screens/AddNewPost';
import EditPost from '../screens/EditPost';
import Drafts from '../screens/Drafts';
import UploadImage from '../screens/UploadImage';
const Stack = createNativeStackNavigator();

const ProfileStack = ({route}) => {
    return (
        <Stack.Navigator initialRouteName='Profile'>
                        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} initialParams={{id: route.params.id, tabProfile: true}}/>
                        <Stack.Screen name="UsersFriends" component={UsersFriends} initialParams={{id: route.params.id, tabProfile: false}}/>
                        <Stack.Screen name="SinglePost" component={SinglePost} />
                        <Stack.Screen name="FriendsProfile" component={Profile} options={{headerShown: false}}/>
                        <Stack.Screen name="AddNewPost" component={AddNewPost}/>
                        <Stack.Screen name="EditPost" component={EditPost}/>
                        <Stack.Screen name="Drafts" component={Drafts}/>
                        <Stack.Screen name="UploadImage" component={UploadImage}/>
        </Stack.Navigator>
    )
}
export default ProfileStack;