import getToken from '../getToken';
import getId from '../getId';

const uploadImage = async (image, setImageUploaded, setImageUploadedSuccess, setImageUploadedError) => {
  const token = await getToken();
  const id = await getId();
  fetch(image).then((res) => res.blob()).then(async (blob) => {
    const file = new File([blob], 'File name', { type: 'image/png' });
    try {
      const response = await fetch(`http://localhost:3333/api/1.0.0/user/${id}/photo`, {
        headers: {
          'Content-Type': 'image/png',
          'X-Authorization': token,
        },
        method: 'post',
        body: file,
      });
      if (response.status === 200) {
        setImageUploaded(true);
        setImageUploadedSuccess(true);
      } else {
        setImageUploadedError(true);
      }
    } catch (error) {
      console.log(error);
      setImageUploadedError(true);
    }
  });
};

export default uploadImage;
