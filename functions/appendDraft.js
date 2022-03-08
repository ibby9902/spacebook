import AsyncStorage from '@react-native-async-storage/async-storage';
import getDrafts from './getDrafts';

const appendDraft = async (post) => {
  getDrafts().then(async (res) => {
    if (res === null) {
      const data = [{ post }];
      await AsyncStorage.setItem('@posts', JSON.stringify(data));
    } else {
      const data = { post };
      res.push(data);
      await AsyncStorage.setItem('@posts', JSON.stringify(res));
    }
  });
};
export default appendDraft;
