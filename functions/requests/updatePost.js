import getToken from '../getToken';

const updatePost = async (toSend, user_id, post_id, setUpdateSuccess, setUpdateError) => {
  const token = await getToken();
  return fetch(`http://localhost:3333/api/1.0.0/user/${user_id}/post/${post_id}`, {
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': token,
    },
    method: 'PATCH',
    body: JSON.stringify(toSend),
  }).then((response) => {
    if (response.status === 200) {
      setUpdateSuccess(true);
    } else {
      setUpdateError(true);
    }
  }).catch((error) => {
    setUpdateError(true);
    console.log(error);
  });
};

export default updatePost;
