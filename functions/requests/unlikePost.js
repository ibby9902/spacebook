import getToken from '../../functions/getToken';

const unlikePost = async (user_id, post_id, setLikeError, setUnLikePost) => {
     // send DELETE like request to server
     const token = await getToken();
     return fetch(`http://localhost:3333/api/1.0.0/user/${user_id}/post/${post_id}/like`, {
        headers: {
            "X-AUTHORIZATION": token
        },
        method: 'delete'
    })
    .then((response) => {
        if(response.status === 200) {
            setUnLikePost(true);
        } else {
            setLikeError(true);
        }
    })
    .catch((error) => {
        console.log(error)
    })
}
export default unlikePost;