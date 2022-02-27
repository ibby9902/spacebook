import getToken from '../../functions/getToken';
const acceptFriend = async (id) => {
    const token = await getToken();
    return fetch(`http://localhost:3333/api/1.0.0/friendrequests/${id}`, {
        headers: {
            "X-AUTHORIZATION": token
        },
        method: 'post'
    })
    .then(() => "accepted request")
    .catch((error) => {
        console.log(error)
    })   
}
export default acceptFriend;