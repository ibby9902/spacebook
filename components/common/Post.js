import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import getId from '../../functions/getId';
import likePost from '../../functions/requests/likePost';
import unlikePost from '../../functions/requests/unlikePost';
import theme from '../../assets/theme';
import formatTimestamp from '../../functions/formatTimestamp';
import CustomButton from './CustomButton';
import deletePost from '../../functions/requests/deletePost';

const Post = (props) => {
  const [likedPost, setLikePost] = useState(false);
  const [unlikedPost, setUnLikePost] = useState(false);
  const [myID, setMyID] = useState(0);
  const [isMyPost, setIsMyPost] = useState(false);
  const [yourPostError, setYourPostError] = useState(false);
  const [likeError, setLikeError] = useState(false);
  const [likesNum, setLikesNum] = useState(0);
  const [postDeleted, setPostDeleted] = useState(false);
  const [postDeleteError, setPostDeleteError] = useState(false);
  useEffect(() => {
    getId().then((id) => {
      setMyID(parseInt(id));
      if (props.data.author.user_id === parseInt(id)) {
        setIsMyPost(true);
      }
    });
    setLikesNum(props.data.numLikes);
    console.log(`User_ID: ${props.data.author.user_id} Post id: ${props.data.post_id}`);
  }, []);

  const handleLikePost = () => {
    if (!likeError) {
      if (!isMyPost) {
        likePost(props.profile_id, props.data.post_id, setLikeError, setLikePost);
        setLikesNum(likesNum + 1);
      } else {
        setYourPostError(true);
      }
    }
  };

  const handleUnlikePost = () => {
    if (!likeError) {
      if (!isMyPost) {
        unlikePost(props.profile_id, props.data.post_id, setLikeError, setUnLikePost);
        if (likesNum > 0) {
          setLikesNum(likesNum - 1);
        }
      } else {
        setYourPostError(true);
      }
    }
  };

  const handleEdit = () => {
    props.navigation.navigate('EditPost', { data: props.data });
  };

  const handleDelete = () => {
    deletePost(props.profile_id, props.data.post_id, setPostDeleted, setPostDeleteError);
  };

  const renderYourPostError = () => {
    if (yourPostError) {
      return (
        <Text style={{ color: theme.TEXT_LESS_WHITE }}>Cannot like/unlike your own post!</Text>
      );
    }
  };
  const renderLikeError = () => {
    if (likeError) {
      return (
        <Text style={{ color: theme.TEXT_LESS_WHITE }}>Error</Text>
      );
    }
  };

  const renderEditButton = () => {
    if (props.data.author.user_id === myID) {
      return (
        <CustomButton text="Edit" style={styles.editButton} onClick={handleEdit} />
      );
    }
  };

  const renderDeleteButton = () => {
    if (props.data.author.user_id === myID) {
      return (
        <CustomButton text="Delete" style={styles.deleteButton} onClick={handleDelete} />
      );
    }
  };

  const renderDeleteSuccessText = () => {
    if (postDeleted) {
      return (
        <Text style={{ color: theme.TEXT_LESS_WHITE }}>Post Deleted!</Text>
      );
    }
  };

  const renderDeleteErrorText = () => {
    if (postDeleteError) {
      return (
        <Text style={{ color: theme.TEXT_LESS_WHITE }}>Error deleting post</Text>
      );
    }
  };
  return (
    <View style={styles.postContainer}>
      <View>
        <Text style={styles.nameText}>
          {`${props.data.author.first_name} `}
          <Text style={styles.nameText}>{props.data.author.last_name}</Text>
        </Text>
        <Text style={styles.dataText}>{formatTimestamp(props.data.timestamp)}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.postText}>{props.data.text}</Text>
      </View>

      <View style={styles.bottomContainer}>
        <CustomButton text="Like" style={styles.likeButton} onClick={handleLikePost} />
        <CustomButton text="Unlike" style={styles.unlikeButton} onClick={handleUnlikePost} />
        {renderEditButton()}
        {renderDeleteButton()}
        <Text style={styles.likeCounter}>
          Likes:
          {` ${likesNum}`}
        </Text>
      </View>
      {renderYourPostError()}
      {renderLikeError()}
      {renderDeleteSuccessText()}
      {renderDeleteErrorText()}
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    height: 200,
    width: '95%',
    backgroundColor: theme.GREY_BLUE,
    padding: 10,
  },
  nameText: {
    color: theme.TEXT_WHITE,
    fontWeight: 'bold',
  },
  dataText: {
    color: theme.TEXT_GREY,
    fontSize: 12,
    fontWeight: 'bold',
  },
  postText: {
    color: theme.TEXT_WHITE,
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
    flexWrap: 'wrap',
  },
  likeCounter: {
    color: theme.TEXT_WHITE,
    fontWeight: 'bold',
    size: 15,
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
    backgroundColor: theme.ICON_INACTIVE,
  },
  unlikeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 30,
    backgroundColor: theme.ICON_INACTIVE,
    paddingRight: 10,
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 30,
    backgroundColor: theme.ICON_INACTIVE,
    paddingRight: 10,
  },
});

export default Post;
