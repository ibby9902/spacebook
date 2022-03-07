import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import editPost from '../../functions/requests/editPost';
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';
import updatePost from '../../functions/requests/updatePost';
import theme from '../../assets/theme';

const EditPost = ({ route }) => {
  const [post, setPost] = useState(route.params.data);
  const [postText, onChangePostText] = useState(route.params.data.text);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [updateError, setUpdateError] = useState(false);

  const handleUpdatePost = () => {
    const toSend = {
      text: postText,
    };
    updatePost(toSend, post.author.user_id, post.post_id, setUpdateSuccess, setUpdateError);
  };

  const statusText = () => {
    if (updateSuccess) {
      return <Text style={{ color: theme.TEXT_WHITE, fontWeight: 'bold' }}>Post updated!</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <CustomInput multiline={true} setValue={onChangePostText} value={postText} styles={styles.input} />
      <CustomButton text="Update Post" style={styles.button} textStyle={{ color: theme.TEXT_WHITE }} onClick={handleUpdatePost} />
      {statusText()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.DARK_GREY,
  },
  input: {
    height: 200,
    backgroundColor: theme.GREY_BLUE,
    color: theme.TEXT_WHITE,
  },
  button: {
    width: '100%',
    height: 30,
    backgroundColor: theme.YELLOW,
  },
});

export default EditPost;
