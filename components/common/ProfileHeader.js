import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'

const ProfileHeader = (props) => {
    return(
        <View style={styles.profileHeader}>
            <TouchableOpacity style={styles.imageContainer}/>
                <View>
                    <Text style={styles.name}>{props.firstName} <Text style={styles.name}>{props.lastName}</Text></Text>
                    <Text>Friends: {props.friendCount}</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profileHeader: {
        width: '100%',
        height: 300,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        
    },
    imageContainer: {
        width: 100,
        height: 100,
        backgroundColor: 'green'
    }
})

export default ProfileHeader;