import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
class Post extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.postContainer}>
                <Text>{this.props.data.author.first_name}<Text>{this.props.data.author.last_name}</Text></Text>
                <Text>{this.props.data.text}</Text>
                <Text>Likes: {this.props.data.numLikes}</Text>
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