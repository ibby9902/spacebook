import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';
import theme from '../../assets/theme';
import deleteDraft from '../../functions/deleteDraft';
import AddPost from '../../functions/requests/AddPost';

const Draft = (props) => {
  const [postSuccess, setPostSent] = useState(false);
  const [postError, setPostError] = useState(false);

  const handleSend = () => {
    AddPost(props.id, props.text, setPostSent, setPostError);
    handleDelete();
  };

  const handleDelete = () => {
    deleteDraft(props.index);
    props.setDraftDeleted(true);
  };

  const handleEdit = () => {
    props.navigation.navigate('EditDraft', { postText: props.text, index: props.index, drafts: props.data });
  };

  const renderPostSend = () => {
    if (postSuccess) {
      return <Text style={styles.statusText}>Post Sent!</Text>;
    }
  };

  const renderPostError = () => {
    if (postError) {
      return <Text style={styles.statusText}>Post Error</Text>;
    }
  };

  const handleSchedule = () => {
    props.navigation.navigate('ScheduleDraft', { postText: props.text, id: props.id, index: props.index });
  };

  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton text="Send" textStyle={styles.text} style={styles.button} onClick={handleSend} />
        <CustomButton text="Delete" textStyle={styles.text} style={styles.button} onClick={handleDelete} />
        <CustomButton text="Edit" textStyle={styles.text} style={styles.button} onClick={handleEdit} />
        <CustomButton text="Schedule" textStyle={styles.text} style={styles.button} onClick={handleSchedule} />
      </View>
      {renderPostSend()}
      {renderPostError()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.LIGHT_GRAY,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 5,
    width: '100%',
    height: 120,
  },
  text: {
    color: theme.TEXT_WHITE,
    fontWeight: 'bold',
  },
  button: {
    height: 30,
    width: 80,
    backgroundColor: theme.GREY_BLUE,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  postContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusText: {
    color:
    theme.TEXT_WHITE,
    fontWeight: 'bold',
  },
});

export default Draft;
