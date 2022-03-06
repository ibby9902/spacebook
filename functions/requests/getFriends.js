import getToken from '../getToken';

const getFriends = async (id, setIsLoading, setFriends) => {
  const token = await getToken();
  return fetch(`http://localhost:3333/api/1.0.0/user/${id}/friends`, {
    headers: {
      'X-Authorization': token,
    },
    method: 'get',
  }).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
  }).then((responseJson) => {
    if (setIsLoading !== null) {
      setIsLoading(false);
      setFriends(responseJson);
    }
  }).catch((error) => {
    console.log(error);
  });
};

export default getFriends;
