const createUser = (
  firstName,
  lastName,
  email,
  password,
  setAccountCreated,
) => {
  const to_send = {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
  };

  return fetch('http://localhost:3333/api/1.0.0/user', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(to_send),
  }).then((response) => {
    if (response.status === 201) {
      setAccountCreated(true);
    } else {
      setAccountCreated(false);
    }
  }).catch((error) => {
    console.log(error);
  });
};

export default createUser;
