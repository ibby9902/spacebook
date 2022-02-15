import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (name, val) => {
    try {
        await AsyncStorage.setItem(`@${name}`, val);
    }
    catch (error) {
        console.log(error)
    }
}

export default storeData;