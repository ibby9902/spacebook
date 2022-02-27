import getToken from '../../functions/getToken';
const getFriends = async (id, setIsLoading, setFriends) => {
        const token =  await getToken();
        return fetch(`http://localhost:3333/api/1.0.0/user/${id}/friends`,{
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
            setFriends(responseJson);
        })
        .catch((error) => {
            console.log(error)
        })
}

export default getFriends;