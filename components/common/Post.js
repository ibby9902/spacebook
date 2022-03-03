import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import getId from '../../functions/getId';
import likePost from '../../functions/requests/likePost';
import unlikePost from '../../functions/requests/unlikePost';
import theme from '../../assets/theme';
import formatTimestamp from '../../functions/formatTimestamp';
import CustomButton from './CustomButton';
import deletePost from '../../functions/requests/deletePost';
const Post = (props) => {

    const [like, setLike] = useState(false);
    const [myID, setMyID] = useState(0)
    const [isMyPost, setIsMyPost] = useState(false);
    const [yourPostError, setYourPostError] = useState(false);
    const [likeError, setLikeError] = useState(false);
    useEffect(() => {
        getId().then((id) => {
            setMyID(parseInt(id))
            if(props.data.author.user_id === parseInt(id))
                setIsMyPost(true);
        })
    },[]) 
    
    const handleLikePost = () => {
        if(!likeError)
        {
            if(!isMyPost)
                likePost(props.data.author.user_id, props.data.post_id, setLikeError)
            else {
                setYourPostError(true);
            }
        } 
    }

    const handleUnlikePost = () => {
        if(!likeError)
        {
            if(!isMyPost)
                unlikePost(props.data.author.user_id, props.data.post_id, setLikeError)
            else {
                setYourPostError(true);
            }
        } 
            
    }

    const handleEdit = () => {
        props.moveToEditPost();
    }

    const handleDelete = () => {
        deletePost();
    }

    const renderYourPostError = () => {
        if(yourPostError) {
            return (
                <Text style={{color: theme.TEXT_LESS_WHITE}}>Cannot like/unlike your own post!</Text>
            )
        }
    }
    const renderLikeError = () => {
        if(likeError) {
            return (
                <Text style={{color: theme.TEXT_LESS_WHITE}}>You have already like/unliked this post!</Text>
            )
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
                <CustomButton text="Like" style={styles.likeButton} onClick={handleLikePost}/>
                <CustomButton text="Unlike" style={styles.unlikeButton} onClick={handleUnlikePost}/>
                <CustomButton text="Edit" style={styles.editButton} onClick={handleEdit}/>
                <CustomButton text="Delete" style={styles.deleteButton} onClick={handleDelete}/>
                <Text style={styles.likeCounter}>Likes: {props.data.numLikes}</Text>
            </View>
            {renderYourPostError()}
            {renderLikeError()}
        </View>
    )

    
}

const styles = StyleSheet.create({
    postContainer: {
        height: 200,
        width: '95%',
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30,
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    likeCounter: {
        color: theme.TEXT_WHITE,
        fontWeight: 'bold', 
        size: 15
    },
    likeButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 30,
        backgroundColor: theme.ICON_INACTIVE,
        
    },
    editButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 30,
        backgroundColor: theme.ICON_INACTIVE
    },
    unlikeButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 30,
        backgroundColor: theme.ICON_INACTIVE,
        paddingRight: 10
    },
    deleteButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 30,
        backgroundColor: theme.ICON_INACTIVE,
        paddingRight: 10
    },
});

export default Post;