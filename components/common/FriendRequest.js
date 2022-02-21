import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import getToken from '../../functions/getToken';
import CustomButton from './CustomButton';

class FriendRequest extends Component{
    constructor(props){
        super(props)
    }
    
    acceptFriendRequest = async () => {
        const token = await getToken();
        return fetch(`http://localhost:3333/api/1.0.0/friendrequests/${this.props.id}`, {
            headers: {
                "X-AUTHORIZATION": token
            },
            method: 'post'
        })
        .then(this.removeRequest)
        .catch((error) => {
            console.log(error)
        })
    }

    rejectFriendRequest = async () => {
        const token = await getToken();
        return fetch(`http://localhost:3333/api/1.0.0/friendrequests/${this.props.id}`, {
            headers: {
                "X-AUTHORIZATION": token
            },
            method: 'delete'
        })
        .then(this.removeRequest)
        .catch((error) => {
            console.log(error)
        })
    }

    removeRequest = () => {
        const i = this.props.data((user, index) => {
            if(user.user_id === this.props.id)
                return true;
        })
        if(i > -1)
            this.props.data.splice(i,1);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text>{this.props.firstName} <Text>{this.props.lastName}</Text></Text>
                </View>
                <View style={styles.buttonContainer}>
                    <CustomButton text='Accept' style={styles.accept} onClick={this.acceptFriendRequest} />
                    <CustomButton text='Reject' style={styles.reject} onClick={this.rejectFriendRequest}/>

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
    },
    reject: {
        width: '25%',
        height: 30,
        borderRadius: 5,
        backgroundColor: 'red'
    }
})

export default FriendRequest;