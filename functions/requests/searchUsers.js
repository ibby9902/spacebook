import getToken from '../getToken'
const searchUser = async (query, search_in, limit=20, offset=0, setUsers) => {
    const token = await getToken();
    return fetch(`http://localhost:3333/api/1.0.0/search?q=${query}&search_in=${search_in}&limit=${limit}&offset=${offset}`, {
                method: 'get',
                headers: {
                    'X-AUTHORIZATION': token
                },
            })
            .then((response) => {
                if(response.status === 200){
                    return response.json();
                }
            })
            .then((responseJson) => {
                setUsers(responseJson);
            })
            .catch((error) => {
                console.log(error);
            })

}
export default searchUser;