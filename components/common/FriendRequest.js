import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import getToken from '../../functions/getToken';
import CustomButton from './CustomButton';
import theme from '../../assets/theme';
import acceptFriend from '../../functions/requests/acceptFriend';
import rejectFriend from '../../functions/requests/rejectFriend';

const FriendRequest = (props) => {

    const [hasAcceptedOrRejected, setAcceptedOrRejected] = useState(false);
    
    const handleAccept = () => {
        acceptFriend(props.id, setAcceptedOrRejected)
    }
    const handleReject = () => {
        rejectFriend(props.id, setAcceptedOrRejected)
    }

    const renderButtons = () => {
        if(hasAcceptedOrRejected) {
           return (
            <View style={styles.buttonContainer}>
                <Text style={{color: theme.TEXT_WHITE, fontWeight: 'bold'}}>Done!</Text>
            </View>
           )
        }
        else {
            return (
                <View style={styles.buttonContainer}>
                    <CustomButton text='Accept' style={styles.accept} onClick={handleAccept} textStyle={{color: theme.TEXT_WHITE, fontWeight: 'bold'}}/>
                    <CustomButton text='Reject' style={styles.reject} onClick={handleReject} textStyle={{color: theme.TEXT_WHITE, fontWeight: 'bold'}}/>
                </View>
            )
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.nameText}>{props.firstName} <Text style={styles.nameText}>{props.lastName}</Text></Text>
            </View>
            {renderButtons()}
               
        </View>
    )    
}   

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: '100%',
        backgroundColor: theme.GREY_BLUE,
        flexDirection: 'row',
    },
    accept: {
        width: '35%',
        height: 30,
        borderRadius: 5,
        backgroundColor: theme.YELLOW
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
        width: '35%',
        height: 30,
        borderRadius: 5,
        backgroundColor: theme.BUTTON_DARK_BLUE
    },
    nameText: {
        color: theme.TEXT_WHITE,
        fontWeight: 'bold'
    }
})

export default FriendRequest;