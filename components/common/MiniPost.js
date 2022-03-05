import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import theme from '../../assets/theme';
import formatTimestamp from '../../functions/formatTimestamp';

const MiniPost = (props) => {
  return (
    <TouchableOpacity onPress={props.moveToSinglePost} style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={{ width: '90%', borderBottomColor: theme.TEXT_LESS_WHITE, borderBottomWidth: 1 }}>
          <Text style={styles.nameText}>
            {`${props.data.author.first_name} `}
            <Text style={styles.nameText}>{props.data.author.last_name}</Text>
          </Text>
          <Text style={styles.data}>{formatTimestamp(props.data.timestamp)}</Text>
        </View>
        <View style={{ width: '90%', flexDirection: 'row-reverse' }}>
          <Text style={styles.likeText}>
            Likes:
            {` ${props.data.numLikes}`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: theme.LIGHT_GRAY,
    marginVertical: 10,
  },
  nameText: {
    fontWeight: 'bold',
    color: theme.TEXT_WHITE,
  },
  data: {
    color: theme.TEXT_LESS_WHITE,
  },
  likeText: {
    color: theme.TEXT_LESS_WHITE,
  },
});

export default MiniPost;
