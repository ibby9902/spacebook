import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import getId from '../../functions/getId';
import likePost from '../../functions/requests/likePost';
import unlikePost from '../../functions/requests/unlikePost';
import theme from '../../assets/theme';
import formatTimestamp from '../../functions/formatTimestamp';
const Post = (props) => {

    const [like, setLike] = useState(false);
    const [myID, setMyID] = useState(0)
    
    useEffect(() => {
        getId().then((res) => setMyID(parseInt(res)))
    },[]) 
    
    const handleLikePost = async () => {
        
        if(props.data.author.user_id === myID){
            console.log("You cannot like your own post");
        }
        else {
            const likeStatus = !like;
            setLike(likeStatus)
            if(likeStatus){
                likePost(props.data.author.user_id, props.data.post_id)   
            }
            else {
                unlikePost(props.data.author.user_id, props.data.post_id)
            }
        }
    }
    return (
        <View style={styles.postContainer}>
            <View>
                <Text style={styles.nameText}>{props.data.author.first_name} <Text style={styles.nameText}>{props.data.author.last_name}</Text></Text>
                <Text style={styles.dataText}>{formatTimestamp(props.data.timestamp)}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.postText}>{props.data.text}</Text>
            </View>

            <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={handleLikePost} style={{paddingRight: 10}} >
                    <Ionicons name={like ? "thumbs-up" : "thumbs-up-outline"} color={like ? 'red' : theme.TEXT_WHITE} size={30}/><Text style={styles.postText}>Like</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="pencil" color={theme.TEXT_WHITE} size={30}/><Text style={styles.postText}>Edit</Text>
                </TouchableOpacity>
                <Text style={styles.likeCounter}>Likes: {props.data.numLikes}</Text>
            </View>
        </View>
    )

    
}

const styles = StyleSheet.create({
    postContainer: {
        height: 150,
        width: '90%',
        backgroundColor: theme.GREY_BLUE,
        padding: 10,
    },
    nameText: {
        color: theme.TEXT_WHITE,
        fontWeight: 'bold'
    },
    dataText: {
        color: theme.TEXT_GREY,
        fontSize: 12,
        fontWeight: 'bold'
    },
    postText: {
        color: theme.TEXT_WHITE
    },
    textContainer: {
        paddingTop: 5,
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        alignItems: 'center'
    },
    likeCounter: {
        color: theme.TEXT_WHITE,
        fontWeight: 'bold', 
        size: 15
    }
});

export default Post;