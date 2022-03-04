import getToken from "../getToken"

const sendFriendRequest = async (id, setFriendRequestSent) => {
    const token = await getToken();
    
    return fetch(`http://localhost:3333/api/1.0.0/user/${id}/friends`, {
                method: 'post',
                headers: {
                    'X-AUTHORIZATION': token
                },
            })
            .then((response) => {
                if(response.status === 201) {
                    setFriendRequestSent(true);
                }
            })
            .catch((error) => {
                console.log(error);
            })
}
export default sendFriendRequest;