import getToken from '../getToken';

const deletePost = async (user_id, post_id, setPostDeleted, setPostDeleteError) => {
  const token = await getToken();
  return fetch(`http://localhost:3333/api/1.0.0/user/${user_id}/post/${post_id}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': token,
    },
  }).then((response) => {
    if (response.status === 200) {
      setPostDeleted(true);
    } else {
      setPostDeleteError(true);
    }
  }).catch((error) => {
    console.log(error);
  });
};

export default deletePost;
