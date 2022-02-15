import AsyncStorage from '@react-native-async-storage/async-storage';


const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('@token')
      return value
    } catch(e) {
      // error reading value
    }
  }

  export default getToken;
  