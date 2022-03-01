import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import theme from '../../assets/theme';
const CustomActivityIndicator = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.DARK_GREY}}>
            <ActivityIndicator color={theme.TEXT_WHITE}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',    
        alignItems: 'center', 
        backgroundColor: theme.DARK_GREY
    }
})


export default CustomActivityIndicator;