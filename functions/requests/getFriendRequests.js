import getToken from '../../functions/getToken';
const getFriendRequests = async (setIsLoading, setFriendRequests, setEmptyRequests) => {
    const token = await getToken();
    return fetch(`http://localhost:3333/api/1.0.0/friendrequests`, {
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
            if(!responseJson.length){
                setEmptyRequests(true);
                
            }
            else {
                setEmptyRequests(false)
            }
            setIsLoading(false);
            setFriendRequests(responseJson)
        })
        .catch((error) => {
            console.log(error);
        })
}

export default getFriendRequests;