import AsyncStorage from '@react-native-async-storage/async-storage';
import getDrafts from './getDrafts';
const appendDraft = async (post) => {
  let drafts = await getDrafts();
  try {
    const jsonValue = JSON.stringify(value)
    drafts.append(jsonValue);
    await AsyncStorage.setItem('@posts', drafts)
  } catch (e) {
    // saving error
  }
}
export default appendDraft;