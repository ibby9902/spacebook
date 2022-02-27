import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';
import theme from '../../assets/theme'
const Friend = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.nameContainer}>
                <Text style={styles.nameText}>{props.firstName} <Text style={styles.nameText}>{props.lastName}</Text></Text>
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton text='View Profile' style={styles.viewProfile} onClick={() => props.viewProfile(props.id)} textStyle={styles.btnText}/>
            </View>
        </View>
    )
        
    
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        backgroundColor: theme.GREY_BLUE,
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    viewProfile: {
        width: '40%',
        height: 60,
        backgroundColor: theme.BUTTON_DARK_BLUE
    },
    btnText: {
        color: theme.TEXT_WHITE,
        fontWeight: 'bold',
    },
    nameText: {
        color: theme.TEXT_WHITE,
        fontWeight: 'bold',
        fontSize: 20,
    },
    nameContainer: {
        flex: 1,
        alignItems: 'center'
    }
})

export default Friend;