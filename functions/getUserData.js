import getToken from './getToken';
// get any Users' data by passing their id and using our stored token
const getUserData = async (id) => {
    const token = await getToken();
    return fetch(`http://localhost:3333/api/1.0.0/user/${id}`, {
            headers: {
                "X-AUTHORIZATION": token,
            },
            method: 'get'
        })
        .then((response) => {
            if(response.status === 200)
                return response.json();
        })
        .then((responseJson) => {
            return({firstName: responseJson.first_name,
                lastName: responseJson.last_name,
                friendCount: responseJson.friend_count
            })
        } )
        .catch((error) => {
            console.log(error)
        })
}

export default getUserData;