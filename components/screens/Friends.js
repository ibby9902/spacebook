import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet} from 'react-native';
import FriendRequest from '../common/FriendRequest';

class Friends extends Component {
    render(){
        return (
            <ScrollView style={styles.container}>
                <FriendRequest firstName="first" lastName="second" />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eaedf4'
    }
})

export default Friends;