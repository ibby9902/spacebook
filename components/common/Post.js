import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import getId from '../../functions/getId';
import likePost from '../../functions/requests/likePost';
import unlikePost from '../../functions/requests/unlikePost';
import theme from '../../assets/theme';
const Post = (props) => {

    /* const [like, setLike] = useState(false);
    const [myID, setMyID] = useState(0)

    useEffect(() => {
        getId().then((res) => setMyID(parseInt(res)))
    },[]) 

    const handleLikePost = async () => {
        const likeStatus = !like;
        setLike(likeStatus)
        if(likeStatus){
            likePost(props.data.author.user_id, props.data.post_id)   
        }
        else {
            unlikePost(props.data.author.user_id, props.data.post_id)
        }
    }

    const renderLikeButton = () => {
        if(myID !== props.data.author.user_id)
        {
            return (
                <TouchableOpacity onPress={handleLikePost} style={{width: 48, height: 48}}>
                    <Ionicons name={like ? 'heart': 'heart-outline'} size={48} color={like ? 'red' : 'white'}/>
                </TouchableOpacity>
            )
        }
    }

    return (
        <View style={styles.postContainer}>
        <TouchableOpacity onPress={()=> console.log(`Open post ${props.data.post_id}`)}>
        <View >
            <Text style={styles.titleText}>{props.data.author.first_name} <Text style={styles.titleText}>{props.data.author.last_name}</Text></Text>
            <Text style={styles.postText}>{props.data.text}</Text>
            <Text style={styles.numLikesText}>Likes: {props.data.numLikes}</Text>
            
        </View>

        </TouchableOpacity>
        {renderLikeButton()}
        </View>
    ) */

    return (
        <View style={styles.postContainer}>
            <Text>{props.data.text}</Text>
        </View>
    )

    
}

const styles = StyleSheet.create({
    postContainer: {
        height: 150,
        width: '90%',
        backgroundColor: theme.GREY_BLUE,
    },
    titleText: {
        color: 'white',
        fontWeight: 'bold',
    },
    postText: {
        color: 'white'
    },
    numLikesText:{
        color: 'white',
        fontWeight: 'bold'
    }
});

export default Post;