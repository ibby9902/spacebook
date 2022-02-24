import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
class Post extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.postContainer}>
                <Text style={styles.textColor}>{this.props.data.author.first_name}<Text style={styles.textColor}>{this.props.data.author.last_name}</Text></Text>
                <Text style={styles.textColor}>{this.props.data.text}</Text>
                <Text style={styles.textColor}>Likes: {this.props.data.numLikes}</Text>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    postContainer: {
        height: 100,
        width: '100%',
        backgroundColor: '#191a2c',
        marginVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderColor: '#32344c',
        borderRadius: 5
    },
    textColor: {
        color: 'white'
    }
});

export default Post;