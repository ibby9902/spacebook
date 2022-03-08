import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DateTimePicker from 'react-datetime-picker';
import theme from '../../assets/theme';
import CustomButton from '../common/CustomButton';
import AddPost from '../../functions/requests/AddPost';
import deleteDraft from '../../functions/deleteDraft';

const schedule = require('node-schedule');

const ScheduleDraft = ({ route }) => {
  const [value, onChange] = useState(new Date());
  const [postSent, setPostSent] = useState(false);
  const [postError, setPostError] = useState(false);

  const handleSchedule = () => {
    const job = schedule.scheduleJob(value, () => {
      AddPost(route.params.id, route.params.postText, setPostSent, setPostError);
    });
    setPostSent(true);
    deleteDraft(route.params.index);
  };

  const renderPostSent = () => {
    if (postSent) {
      return <Text style={{ color: theme.TEXT_WHITE, fontWeight: 'bold' }}>Post Scheduled!</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: theme.TEXT_LESS_WHITE, flex: 1 }}>
        <DateTimePicker onChange={onChange} value={value} style={styles.date} />
      </View>
      <View style={{ flex: 1 }}>
        <CustomButton text="Schedule" textStyle={styles.text} style={styles.button} onClick={handleSchedule} />
        {renderPostSent()}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.DARK_GREY,
    flex: 1,
    justifyContent: 'center',
  },
  date: {
    color: theme.TEXT_WHITE,
  },
  button: {
    height: 30,
    width: '100%',
    backgroundColor: theme.YELLOW,
  },
  text: {
    color: theme.TEXT_WHITE,
    fontWeight: 'bold',
  },
});

export default ScheduleDraft;
