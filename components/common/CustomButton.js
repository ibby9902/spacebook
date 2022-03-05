import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({ text, onClick, style, textStyle }) => {
  return (
    <TouchableOpacity style={style} onPress={onClick}>
      <View style={styles.textContainer}>
        <Text style={textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CustomButton;
