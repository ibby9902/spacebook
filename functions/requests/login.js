import storeData from '../storeData';

const login = async (data, setIsLoggedIn, setLoginError) => {
  return fetch('http://localhost:3333/api/1.0.0/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      setLoginError(true);
    }
  }).then(async (responseJson) => {
    storeData('id', responseJson.id);
    storeData('token', responseJson.token);
    setIsLoggedIn(true);
  }).catch((error) => {
    console.log(error);
  });
};

export default login;
