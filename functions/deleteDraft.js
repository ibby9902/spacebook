import AsyncStorage from '@react-native-async-storage/async-storage';

const deleteDraft = async (index) => {
  try {
    const drafts = await AsyncStorage.getItem('@posts');
    const json = JSON.parse(drafts);
    if (index > -1) {
      json.splice(index, 1);
      await AsyncStorage.setItem('@posts', JSON.stringify(json));
    }
  } catch (e) {
    // read error
  }
};

export default deleteDraft;
