import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../assets/theme'
import CustomButton from '../common/CustomButton';
import CustomInput from '../common/CustomInput';
import AddPost from '../../functions/requests/AddPost';
const AddNewPost = (props) => {
    const [postText, onChangePostText] = useState('');
    const [postSent, setPostSent] = useState(false);
    const [postError, setPostError] = useState(false);
    useEffect(() => {
        props.navigation.setOptions({title: "Add a new post!" })
        
    })

    const handleAddPost = () => {
        if(postText !== '')
            AddPost(props.route.params.user_id, postText, setPostSent, setPostError)
    }
    return (
        <View style={styles.container}>
            <CustomInput multiline={true} setValue={onChangePostText} value={postText} placeholder={"What's happening?"} styles={styles.input}/>
            <CustomButton text="Send Post" style={styles.button} textStyle={{color: theme.TEXT_WHITE}} onClick={handleAddPost}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.DARK_GREY,
    },
    input: {
        height: 200,
        backgroundColor: theme.GREY_BLUE,
        color: theme.TEXT_WHITE
    },
    button: {
        width: '100%',
        height: 30,
        backgroundColor: theme.YELLOW
    }
})

export default AddNewPost;