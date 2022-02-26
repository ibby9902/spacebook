import React from 'react';
import theme from '../../assets/theme'
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureEntry, style}) => {
    return(
        <View style={styles.container}>
            <TextInput placeholder={placeholder} style={{backgroundColor: theme.DARK_GREY, color: 'white'}} value={value} onChangeText={setValue} secureTextEntry={secureEntry}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.DARK_GREY,
        width: '75%',
        height: 40,
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
})
export default CustomInput;