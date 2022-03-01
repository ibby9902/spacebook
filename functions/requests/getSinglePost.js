import getToken from "../getToken";
const getSinglePost = async (id, post_id, setPost, setIsLoading) => {
    const token = await getToken();
        return fetch(`http://localhost:3333/api/1.0.0/user/${id}/post/${post_id}`,{
            headers: {
                "X-AUTHORIZATION": token
            },
            method: 'get'
        })
        .then((response) => {
            if(response.status === 200)
                return response.json();
        })
        .then((responseJson) => {
            setIsLoading(false);
            setPost(responseJson);
        })
        .catch((error) => {
            console.log(error)
        })
    
}

export default getSinglePost;