import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import CustomButton from './CustomButton';

class FriendRequest extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text>{this.props.firstName} <Text>{this.props.lastName}</Text></Text>
                </View>
                <View style={styles.buttonContainer}>
                    <CustomButton text='Accept' style={styles.accept} />
                    <CustomButton text='Reject' style={styles.accept} />

                </View>
                
            </View>
        )

    }
}   

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: '100%',
        backgroundColor: '#7585b5',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#4d5655'
    },
    accept: {
        width: '25%',
        height: 30,
        borderRadius: 5,
        backgroundColor: 'green'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
})

export default FriendRequest;