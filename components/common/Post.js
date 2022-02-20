import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
class Post extends Component {
    //const [postText, setPostText] = useState('');
    // timestamp/date ?
    //const [author, setAuthor] = useState(''); // first + last name
    //const [numLikes, setNumLikes] = useState(0);
    render() {
        return (
            <View style={styles.postContainer}>
                <Text>First Name + Last Name</Text>
                <Text>Post Text</Text>
                <Text>Likes: 0</Text>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    postContainer: {
        height: 100,
        width: '100%',
        backgroundColor: '#7585b5',
        marginVertical: 10,
        paddingHorizontal: 10,
    }
});

export default Post;