import storeData from '../../functions/storeData'
const login = async (data, setIsLoggedIn, setLoginError) => {
    return fetch("http://localhost:3333/api/1.0.0/login" , {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then((response) => {
                if(response.status === 200){
                    setIsLoggedIn(true)
                    return response.json()
                }
                else {
                    setLoginError(true);
                    throw "Invalid Email or Password"
                }
            })
            .then(async (responseJson) => {
                storeData("id",responseJson.id)
                storeData("token",responseJson.token)
            })
            .catch((error) => {
                console.log(error);
            })
}

export default login;