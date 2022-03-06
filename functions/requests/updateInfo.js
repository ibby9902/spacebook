import getToken from '../getToken';
import getId from '../getId';

const updateInfo = async (data, setErrorUpdating, setSuccessUpdate) => {
  const token = await getToken();
  const id = await getId();
  return fetch(`http://localhost:3333/api/1.0.0/user/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': token,
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.status === 200) {
      setSuccessUpdate(true);
    } else {
      setErrorUpdating(true);
    }
  }).catch((error) => {
    console.log(error);
  });
};

export default updateInfo;
