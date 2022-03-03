import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../../assets/theme';
import CustomButton from './CustomButton';
import checkIfFriendsWith from '../../functions/checkIfFriendsWith';
const SearchedUser = ({firstName, lastName, id, myID, friends}) => {

    const [isFriendsWith, setIsFriendsWith] = useState(false);

    useEffect(() => {
        checkIfFriendsWith(id, friends, setIsFriendsWith, myID);
        
    },[])
    const handleAdd = () => {
        console.log("Friend Request sent!")
    }
    const renderButton = () => {
        if(!isFriendsWith)
        {
            return (
                <CustomButton text="Add" onClick={handleAdd} style={styles.add} textStyle={{color: theme.TEXT_WHITE, fontWeight: 'bold'}}/>  
            )
        }
        else {
            return (
                <CustomButton text="View Profile" onClick={() => console.log("View profile")} style={styles.view} textStyle={{color: theme.TEXT_WHITE, fontWeight: 'bold'}}/>
            )
        }
    }
    return (
        <View style={styles.container}>
            <View  style={styles.textContainer}>
                <Text style={styles.text}>{firstName} <Text>{lastName}</Text></Text>
            </View>
            <View  style={styles.buttonContainer}>
                {renderButton()} 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        backgroundColor: theme.GREY_BLUE,
        marginTop: 10,
        flexDirection: 'row',
    },
    textContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: theme.TEXT_WHITE,
        fontWeight: 'bold'
    },
    add: {
        width: 80,
        height: 40,
        backgroundColor: 'blue',

    },
    buttonContainer: {
        flexDirection: 'row', 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    view: {
        width: 80,
        height: 40,
        backgroundColor: 'red',
    }
})

export default SearchedUser;