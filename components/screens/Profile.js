import React, { useState, useEffect } from 'react';
import {ScrollView, View, FlatList, ActivityIndicator} from 'react-native';
import getAllUserPosts from '../../functions/requests/getAllUserPosts';
import ProfileHeader from '../common/ProfileHeader'
import getUserData from '../../functions/requests/getUserData'
import Post from '../../components/common/Post'
import theme from '../../assets/theme';
const Profile = ({route}) => {
    const [isPostLoading, setIsPostLoading] = useState(true);
    const [isUserLoading, setIsUserLoading] = useState(true);
    const [postData, setPostData] = useState([])
    const [userData, setUserData] = useState({})

    useEffect(() => {
        getUserData(route.params.id, setUserData, setIsUserLoading);
        getAllUserPosts(route.params.id, setPostData, setIsPostLoading)
    },[])
        
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
                <ProfileHeader firstName={userData.first_name} lastName={userData.last_name} friendCount={userData.friend_count}/>
                <FlatList data={postData} renderItem={({item}) => 
                    <Post data={item}/>
                    } keyExtractor={({post_id}, index) => post_id}/>
            </ScrollView>   
        )
    }   
}

export default Profile;