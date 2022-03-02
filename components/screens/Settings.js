import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from '../common/CustomButton';
import theme from '../../assets/theme';
import logout from '../../functions/requests/logout';
const Settings = () => {

    return (
        <View style={styles.container}>
            <CustomButton text="Logout" onClick={logout} style={styles.logout}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.DARK_GREY,
        alignItems: 'center'
    },
    logout: {
        width: '20%',
        height: 30,
        backgroundColor: theme.YELLOW
    }
})
export default Settings;