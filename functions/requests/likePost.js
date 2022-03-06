import getToken from '../getToken';

const likePost = async (user_id, post_id, setLikeError, setLikePost) => {
  // send POST like request to server
  const token = await getToken();
  return fetch(`http://localhost:3333/api/1.0.0/user/${user_id}/post/${post_id}/like`, {
    headers: {
      'X-Authorization': token,
    },
    method: 'post',
  }).then((response) => {
    if (response.status === 200) {
      setLikePost(true);
    } else {
      setLikeError(true);
    }
  }).catch((error) => {
    console.log(error);
  });
};

export default likePost;
