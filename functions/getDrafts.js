import AsyncStorage from '@react-native-async-storage/async-storage';
const getDrafts = async () => {
    try {
        console.log(await AsyncStorage.getItem('@post')) 
      } catch(e) {
        // read error
      }
}
export default getDrafts;