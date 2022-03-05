import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from './CustomButton';
import theme from '../../assets/theme';

const Friend = (props) => {
  const viewProfile = () => {
    props.navigation.navigate('FriendsProfile', { id: props.id, tabProfile: false });
  };

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Ionicons name="person-outline" size={70} color={theme.TEXT_WHITE} />
      </View>
      <View style={styles.content}>
        <Text style={styles.nameText}>
          {`${props.firstName} `}
          <Text style={styles.nameText}>{props.lastName}</Text>
        </Text>
        <CustomButton text="View Profile" style={styles.viewProfile} onClick={viewProfile} textStyle={styles.btnText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    backgroundColor: theme.GREY_BLUE,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  viewProfile: {
    width: 100,
    height: 30,
    backgroundColor: theme.YELLOW,
  },
  btnText: {
    color: theme.TEXT_WHITE,
    fontWeight: 'bold',
  },
  nameText: {
    color: theme.TEXT_WHITE,
    fontWeight: 'bold',
    fontSize: 15,
  },
  content: {
    flex: 3,
    justifyContent: 'space-around',
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Friend;
