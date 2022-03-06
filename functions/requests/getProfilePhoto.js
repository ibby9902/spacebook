import getToken from '../getToken';

const getProfilePhoto = async (id, setPhoto) => {
  const token = await getToken();
  return fetch(`http://localhost:3333/api/1.0.0/user/${id}/photo`, {
    headers: {
      'X-Authorization': token,
    },
    method: 'get',
  }).then((response) => {
    if (response.status === 200) {
      return response.blob();
    }
  }).then((img) => {
    const obj = URL.createObjectURL(img);
    setPhoto(obj);
  }).catch((error) => {
    console.log(error);
  });
};

export default getProfilePhoto;
