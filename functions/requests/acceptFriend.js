import getToken from '../getToken';

const acceptFriend = async (id, setAcceptedOrRejected) => {
  const token = await getToken();
  return fetch(`http://localhost:3333/api/1.0.0/friendrequests/${id}`, {
    headers: {
      'X-Authorization': token,
    },
    method: 'post',
  }).then((response) => {
    if (response.status === 200) {
      setAcceptedOrRejected(true);
    }
  }).catch((error) => {
    console.log(error);
  });
};
export default acceptFriend;
