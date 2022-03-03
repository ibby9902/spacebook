import getToken from "../getToken"

const sendFriendRequest = async (id) => {
    const token = await getToken();
    
    return fetch(`http://localhost:3333/api/1.0.0/user/${id}/friends`, {
                method: 'post',
                headers: {
                    'X-AUTHORIZATION': token
                },
            })
            .catch((error) => {
                console.log(error);
            })
}
export default sendFriendRequest;