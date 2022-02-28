import React, { useState, useEffect } from 'react';
import {ScrollView, View, FlatList, ActivityIndicator, StyleSheet, Text} from 'react-native';
import getAllUserPosts from '../../functions/requests/getAllUserPosts';
import ProfileHeader from '../common/ProfileHeader'
import getUserData from '../../functions/requests/getUserData'
import Post from '../../components/common/Post'
import MiniPost from '../../components/common/MiniPost'
import theme from '../../assets/theme';
import getId from '../../functions/getId';

const Profile = (props) => {
    const [isPostLoading, setIsPostLoading] = useState(true);
    const [isUserLoading, setIsUserLoading] = useState(true);
    const [postData, setPostData] = useState([]);
    const [userData, setUserData] = useState({});
    const [myID, setMyID] = useState(0);
    const [isMyProfile, setIsMyProfile] = useState(false);

    useEffect(() => {
        getUserData(props.route.params.id, setUserData, setIsUserLoading);
        getAllUserPosts(props.route.params.id, setPostData, setIsPostLoading)
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
        
    if(isPostLoading && isUserLoading){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.DARK_GREY}}>
            <ActivityIndicator color={theme.TEXT_WHITE}/>
            </View>
        )
    }
    else {
        return (
            <ScrollView style={{backgroundColor: theme.DARK_GREY, flex: 1}}>
                <ProfileHeader firstName={userData.first_name} lastName={userData.last_name} friendCount={userData.friend_count} isMyProfile={isMyProfile}
                onFriendsPress={onFriendsPress}/>
                
                <View style={styles.postContainer}>
                    <MiniPost />
                    <MiniPost />
                    <MiniPost />
                    <MiniPost />
                </View>
                {/* <FlatList data={postData} renderItem={({item}) => 
                    <Post data={item}/>
                    } keyExtractor={({post_id}, index) => post_id}/> */}
            </ScrollView>   
        )
    }   
}

const styles = StyleSheet.create({
    postContainer: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        width: '30%',
        backgroundColor: theme.BUTTON_DARK_BLUE
    },
    buttonContainer: {
        backgroundColor: 'red'
    }
})

export default Profile;