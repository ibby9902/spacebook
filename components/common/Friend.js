import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Friend extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Friend</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        backgroundColor: 'red',
        justifyContent: 'center',
    }
})

export default Friend;