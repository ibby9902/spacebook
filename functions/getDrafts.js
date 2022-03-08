import AsyncStorage from '@react-native-async-storage/async-storage';

const getDrafts = async () => {
  try {
    const drafts = await AsyncStorage.getItem('@posts');
    return JSON.parse(drafts);
  } catch (e) {
    // read error
  }
};

export default getDrafts;
