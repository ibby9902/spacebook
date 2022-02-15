const createUser = (
    firstName,
    lastName,
    email,
    password,
    setAccountCreated
) => {
    let to_send = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
    };

    return fetch("http://localhost:3333/api/1.0.0/user", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(to_send)
    })
    .then((response) => {
        console.log("User Created")
        setAccountCreated(true)
    })
    .catch((error) => {
        console.log(error)
    })
}

export default createUser;