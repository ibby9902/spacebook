import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';
import theme from '../../assets/theme';

const EditDraft = ({ route }) => {
  const [postText, onChangePostText] = useState(route.params.postText);
  const [draftUpdated, setDraftUpdated] = useState(false);

  const handleEditDraft = () => {
    route.params.drafts[route.params.index].post = postText;
    overwriteSessionDrafts(route.params.drafts);
  };

  const overwriteSessionDrafts = async (data) => {
    await AsyncStorage.setItem('@posts', JSON.stringify(data));
    setDraftUpdated(true);
  };

  const renderDraftUpdatedText = () => {
    if (draftUpdated) {
      return <Text style={{ color: theme.TEXT_WHITE, fontWeight: 'bold' }}>Draft updated!</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <CustomInput multiline={true} setValue={onChangePostText} value={postText} styles={styles.input} />
      <CustomButton text="Edit Draft" style={styles.button} textStyle={{ color: theme.TEXT_WHITE }} onClick={handleEditDraft} />
      {renderDraftUpdatedText()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.DARK_GREY,
  },
  input: {
    height: 200,
    backgroundColor: theme.GREY_BLUE,
    color: theme.TEXT_WHITE,
  },
  button: {
    width: '100%',
    height: 30,
    backgroundColor: theme.YELLOW,
  },
});

export default EditDraft;
