import getToken from '../getToken';

const AddPost = async (user_id, text, setPostSent, setPostError) => {
  const token = await getToken();
  const data = { text };
  return fetch(`http://localhost:3333/api/1.0.0/user/${user_id}/post`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': token,
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.status === 201) {
      setPostSent(true);
    } else {
      setPostError(true);
    }
  }).catch((error) => {
    console.log(error);
  });
};

export default AddPost;
