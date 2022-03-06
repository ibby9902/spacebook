// Passwords must be have a length greater than 5 characters
const validatePassword = (password, setValidPassword) => {
  if (password.length > 5) {
    setValidPassword(true);
  } else {
    setValidPassword(false);
  }
};

export default validatePassword;
