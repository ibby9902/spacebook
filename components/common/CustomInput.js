import React from 'react';
import { View, TextInput } from 'react-native';
import theme from '../../assets/theme';

const CustomInput = ({ value, setValue, placeholder, secureEntry, multiline, styles }) => {
  return (
    <View style={styles}>
      <TextInput
        placeholder={placeholder}
        style={{ backgroundColor: theme.GREY_BLUE, color: theme.TEXT_WHITE, flex: 1 }}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureEntry}
        multiline={multiline}
      />
    </View>
  );
};
export default CustomInput;
