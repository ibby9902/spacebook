import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from '../common/CustomButton';
import theme from '../../assets/theme';
import logout from '../../functions/requests/logout';

const Settings = (props) => {
  return (
    <View style={styles.container}>
      <CustomButton
        text="Account Information"
        onClick={() => props.navigation.navigate('AccountInfo')}
        style={styles.accountInfo}
        textStyle={{ fontWeight: 'bold', color: theme.TEXT_WHITE }}
      />
      <CustomButton text="Logout" onClick={() => logout(props.route.params.navigation)} style={styles.logout} textStyle={styles.logoutText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.DARK_GREY,
    paddingHorizontal: 10,
    paddingTop: 80,
  },
  accountInfo: {
    width: '100%',
    height: 50,
    backgroundColor: theme.NAVBAR_BLUE,
  },
  changePassword: {
    width: '100%',
    height: 50,
    backgroundColor: theme.NAVBAR_BLUE,
    marginTop: 10,
  },
  logout: {
    width: '100%',
    height: 50,

  },
  logoutText: {
    color: 'red',
    fontWeight: 'bold',
  },
});
export default Settings;
