import getToken from "../getToken";
const getAllUserPosts = async (id, setPostData, setIsPostLoading) => {
        const token = await getToken();
        return fetch(`http://localhost:3333/api/1.0.0/user/${id}/post`,{
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
            setIsPostLoading(false);
            setPostData(responseJson)
        })
        .catch((error) => {
            console.log(error)
        })
}

export default getAllUserPosts;