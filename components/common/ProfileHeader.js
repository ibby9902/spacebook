import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'

const ProfileHeader = (props) => {
    return(
        <View style={styles.profileHeader}>
            <TouchableOpacity style={styles.imageContainer}/>
            
                    <Text style={styles.name}>{props.firstName} <Text style={styles.name}>{props.lastName}</Text></Text>
            
            <TouchableOpacity style={styles.friendsContainer}>
                <Text style={styles.name}>Friends: {props.friendCount}</Text>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    profileHeader: {
        width: '100%',
        height: 300,
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        
    },
    imageContainer: {
        width: 100,
        height: 100,
        margin: 0,
        backgroundColor: 'green',
        borderRadius: 50,
    },
    friendsContainer: {
        padding: 10,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderColor: '#32344c'
    }
})

export default ProfileHeader;