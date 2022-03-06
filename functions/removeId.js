import AsyncStorage from '@react-native-async-storage/async-storage';

const removeId = async () => {
  try {
    await AsyncStorage.removeItem('@id');
  } catch (e) {
    console.log(e);
  }
};
export default removeId;
