import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import theme from '../../assets/theme';

const MiniPost = () => {
    return (
        <TouchableOpacity onPress={() => console.log("Minipost clicked")} style={styles.container}>
            <View >
                <Text style={{fontWeight: 'bold', color: theme.TEXT_WHITE}}>FirstName LastName</Text>
                <Text style={{fontWeight: 'bold', color: theme.TEXT_WHITE}}>26/02/2022</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 80,
        backgroundColor: theme.LIGHT_GRAY,
        marginVertical: 10,
        borderRadius: 10,
    }
})



export default MiniPost;