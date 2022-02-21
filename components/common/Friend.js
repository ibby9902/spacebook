import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

class Friend extends Component {


    deleteFriend = () => {
        console.log("friend deleted")
    }

    viewProfile = () => {
        //this.props.navigation.navigate("Profile")
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>{this.props.firstName} <Text>{this.props.lastName}</Text></Text>
                <View style={styles.buttonContainer}>
                    <CustomButton text='View Profile' style={styles.deleteButton} onClick={this.viewProfile}/>
                    <CustomButton text='Delete' style={styles.deleteButton} onClick={this.deleteFriend}/>
                </View>
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
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    deleteButton: {
        backgroundColor: 'orange'
    },
    viewProfile: {
        backgroundColor: 'blue'
    }
})

export default Friend;