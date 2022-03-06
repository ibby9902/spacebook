import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import theme from '../../assets/theme';
import CustomButton from '../common/CustomButton';
import uploadImage from '../../functions/requests/uploadImage';

const UploadImage = (props) => {
  const [image, setUploadImage] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setUploadImage(result.uri);
      uploadImage(result.uri, setImageUploaded);
    }
  };

  return (
    <View style={styles.container}>
      <CustomButton text="Choose image" onClick={pickImage} style={styles.pickImageButton} textStyle={styles.pickImageButtonText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.DARK_GREY,
    padding: 10,
  },
  pickImageButton: {
    width: 100,
    height: 60,
    backgroundColor: theme.YELLOW,
  },
  pickImageButtonText: {
    color: theme.TEXT_WHITE,
    fontWeight: 'bold',
  },
});
export default UploadImage;
