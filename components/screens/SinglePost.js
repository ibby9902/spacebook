import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import theme from '../../assets/theme';
import getSinglePost from '../../functions/requests/getSinglePost';
import CustomActivityIndicator from "../../components/common/CustomActivityIndicator";
import Post from '../common/Post';
const SinglePost = (props) => {

    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // use post_id from props to get a singular post
        getSinglePost(props.route.params.userId,props.route.params.postId, setPost, setIsLoading)
    },[])
    if(isLoading){
        return (
            <CustomActivityIndicator/>
        )
    }
    else {
        return (
            
            <View style={styles.container}>
                <Post data={post}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.DARK_GREY,
    }
})

export default SinglePost;