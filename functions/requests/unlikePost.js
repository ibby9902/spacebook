import getToken from '../../functions/getToken';

const unlikePost = async (user_id, post_id, setLikeError) => {
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
            console.log("post unliked")
        } else {
            setLikeError(true);
        }
    })
    .catch((error) => {
        console.log(error)
    })
}
export default unlikePost;