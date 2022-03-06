import removeId from '../removeId';
import removeToken from '../removeToken';
// removes ID & token from async storage
// uses Main navigation to navigate to Login
const logout = (navigation) => {
  removeId();
  removeToken();
  navigation.navigate('Login');
};

export default logout;
