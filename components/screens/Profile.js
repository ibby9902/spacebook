import React, { useState, useEffect } from 'react';
import {ScrollView, View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import getAllUserPosts from '../../functions/requests/getAllUserPosts';
import ProfileHeader from '../common/ProfileHeader'
import getUserData from '../../functions/requests/getUserData'
import Post from '../../components/common/Post'
import MiniPost from '../../components/common/MiniPost'
import theme from '../../assets/theme';
import getId from '../../functions/getId';
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomActivityIndicator from '../common/CustomActivityIndicator';
import CustomButton from '../common/CustomButton';

const Profile = (props) => {
    const [isPostLoading, setIsPostLoading] = useState(true);
    const [isUserLoading, setIsUserLoading] = useState(true);
    const [postData, setPostData] = useState([]);
    const [userData, setUserData] = useState({});
    const [myID, setMyID] = useState(0);
    const [isMyProfile, setIsMyProfile] = useState(false);
    const [isTabProfile, setIsTabProfile] = useState(false);
    useEffect(() => {
        getUserData(props.route.params.id, setUserData, setIsUserLoading);
        getAllUserPosts(props.route.params.id, setPostData, setIsPostLoading)
        setIsTabProfile(props.route.params.tabProfile)
        getId().then((res) => setMyID(parseInt(res)))
        
    },[])

    useEffect(() => {
        if(myID === parseInt(props.route.params.id))
            setIsMyProfile(true);
        else
            setIsMyProfile(false)
    }, [myID])

    const onFriendsPress = () => {
        props.navigation.navigate("UsersFriends", {firstName: userData.first_name, id: userData.user_id});
    }

    const backButton = () => {
        if(!isTabProfile)
        {
            return (
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <View>
                        <Ionicons name="arrow-back-outline" size={30} color={theme.TEXT_WHITE}/>
                    </View>
                </TouchableOpacity>
            )
        }
        
    }
        
    if(isPostLoading && isUserLoading){
        return(
            <CustomActivityIndicator/>
        )
    }
    else {
        return (
            <ScrollView style={{backgroundColor: theme.DARK_GREY, flex: 1}}>
                {backButton()}
                <View style={{flex: 1, alignItems: 'center'}}>
                    <ProfileHeader firstName={userData.first_name} lastName={userData.last_name} friendCount={userData.friend_count} isMyProfile={isMyProfile}
                    onFriendsPress={onFriendsPress}/>
                    <View style={styles.postHeader}>
                        <Text style={{color: theme.TEXT_WHITE, fontSize: 15, fontWeight: 'bold'}}>Posts</Text>
                        <CustomButton text={"Add Post"} style={styles.addPostButton} textStyle={{color: theme.TEXT_WHITE, fontWeight: 'bold'}}/>
                    </View>
                    <View style={styles.postContainer}>
                        <FlatList data={postData} renderItem={({item}) => 
                            <MiniPost moveToSinglePost={() => props.navigation.navigate("SinglePost", {userId: item.author.user_id ,postId: item.post_id})} data={item}/> } keyExtractor={({post_id}, index) => post_id}/>
                    </View>

                </View>
            </ScrollView>   
        )
    }   
}

const styles = StyleSheet.create({
    postContainer: {
        width: '80%'
    },
    button: {
        width: '30%',
        backgroundColor: theme.BUTTON_DARK_BLUE
    },
    buttonContainer: {
        backgroundColor: 'red'
    },
    postHeader: {
        flexDirection: 'row',
        width: '80%',
        borderBottomWidth: 1,
        borderColor: theme.TEXT_LESS_WHITE,
        paddingBottom: 10,
        alignItems: 'center'
    },
    addPostButton: {
        height: 30,
        width: '20%',
        backgroundColor: theme.YELLOW,
        marginLeft: 10,
    }
})

export default Profile;