import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import theme from '../../assets/theme';
import CustomButton from '../common/CustomButton';
import uploadImage from '../../functions/requests/uploadImage';

const UploadImage = (props) => {
  const [image, setUploadImage] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [imageUploadSuccess, setImageUploadedSuccess] = useState(false);
  const [imageUploadError, setImageUploadedError] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setUploadImage(result.uri);
      setPreviewImage(result.uri);
    }
  };

  const handleUpload = () => {
    uploadImage(image, setImageUploaded, setImageUploadedSuccess, setImageUploadedError);
  };

  const successText = () => {
    if (imageUploadSuccess) {
      return <Text style={styles.statusText}>Image Uploaded!</Text>;
    }
  };

  const errorText = () => {
    if (imageUploadError) {
      return <Text style={styles.statusText}>Error uploading image</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={previewImage} style={{ flex: 1 }} />
      </View>
      <CustomButton text="Choose image" onClick={pickImage} style={styles.pickImageButton} textStyle={styles.pickImageButtonText} />
      <CustomButton text="Upload Image" onClick={handleUpload} style={styles.pickImageButton} textStyle={styles.pickImageButtonText} />
      {successText()}
      {errorText()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.DARK_GREY,
    padding: 10,
  },
  pickImageButton: {
    width: 100,
    height: 60,
    backgroundColor: theme.YELLOW,
    marginTop: 5,
  },
  pickImageButtonText: {
    color: theme.TEXT_WHITE,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  statusText: {
    color: theme.TEXT_WHITE,
    fontWeight: 'bold',
  },
});
export default UploadImage;
