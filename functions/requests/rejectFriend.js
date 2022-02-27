import getToken from '../../functions/getToken';
const rejectFriend = async (id) => {
    const token = await getToken();
    return fetch(`http://localhost:3333/api/1.0.0/friendrequests/${id}`, {
        headers: {
            "X-AUTHORIZATION": token
        },
        method: 'delete'
    })
    .then(() => "rejected request")
    .catch((error) => {
        console.log(error)
    })
}

export default rejectFriend;