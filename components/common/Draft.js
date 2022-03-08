import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';
import theme from '../../assets/theme';
import deleteDraft from '../../functions/deleteDraft';

const Draft = (props) => {
  const handleSend = () => {
    console.log('send post');
  };

  const handleDelete = () => {
    deleteDraft(props.index);
    props.setDraftDeleted(true);
  };

  const handleEdit = () => {
    // move screens
  };

  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton text="Send" textStyle={styles.text} style={styles.button} />
        <CustomButton text="Delete" textStyle={styles.text} style={styles.button} onClick={handleDelete} />
        <CustomButton text="Edit" textStyle={styles.text} style={styles.button} />
      </View>
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
});

export default Draft;
