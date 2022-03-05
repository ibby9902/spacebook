import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CustomButton from './CustomButton';
import theme from '../../assets/theme';

const ProfileHeader = (props) => {
  const renderProfilePhotoOrClickable = () => {
    if (props.isMyProfile) {
      return (
        <TouchableOpacity style={styles.imageContainer} onPress={() => props.navigation.navigate('UploadImage')}>
          <Image source={props.photo} style={{ flex: 1 }} />
        </TouchableOpacity>
      );
    } else {
      return (
        <View style={styles.imageContainer}>
          <Image source={props.photo} style={{ flex: 1 }} />
        </View>
      );
    }
  };

  return (
    <View style={styles.profileHeader}>
      {renderProfilePhotoOrClickable()}
      <View style={{ flexDirection: 'row', marginVertical: 10 }}>
        <View style={{ flex: 1, justifyContent: 'center', paddingRight: 10 }}>
          <Text style={styles.name}>
            {`${props.firstName} `}
            <Text style={styles.name}>{props.lastName}</Text>
          </Text>
        </View>
        <CustomButton
          text={`Friends: ${props.friendCount}`}
          style={styles.friendsButton}
          textStyle={{ color: theme.TEXT_WHITE, fontWeight: 'bold' }}
          onClick={() => props.navigation.push('UsersFriends', { firstName: props.firstName, id: props.id })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileHeader: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: 100,
    height: 100,
    margin: 0,
    backgroundColor: 'green',
  },
  friendsButton: {
    padding: 10,
    backgroundColor: theme.BUTTON_DARK_BLUE,
    borderRadius: 20,
  },
  AddPost: {
    height: 40,
    width: '30%',
    backgroundColor: theme.YELLOW,
    borderRadius: 15,
    marginTop: 15,
  },
  AddPostText: {
    fontWeight: 'bold',
    color: theme.TEXT_WHITE,
  },
});

export default ProfileHeader;
