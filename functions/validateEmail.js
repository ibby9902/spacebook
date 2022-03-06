const validateEmail = (email, setValidEmail) => {
  const regex = /\S+@\S+\.\S+/;
  const isValid = regex.test(email);
  setValidEmail(isValid);
};

export default validateEmail;
