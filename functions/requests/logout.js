import removeId from '../removeId';
import removeToken from '../removeToken';
const logout = (nav) => {
    removeId();
    removeToken();
    nav()
}

export default logout;