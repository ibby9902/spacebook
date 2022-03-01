import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import theme from '../../assets/theme';
import getSinglePost from '../../functions/requests/getSinglePost';
import CustomActivityIndicator from "../../components/common/CustomActivityIndicator";
const SinglePost = (props) => {

    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect({
        // use post_id from props to get a singular post
        // getSinglePost(post_id, setPost, setIsLoading)
    },[])
    return (
        <CustomActivityIndicator/>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.DARK_GREY,
    }
})

export default SinglePost;