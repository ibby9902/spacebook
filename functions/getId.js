import AsyncStorage from '@react-native-async-storage/async-storage';

const getId = async () => {
  try {
    const value = await AsyncStorage.getItem('@id');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
  }
};

export default getId;
