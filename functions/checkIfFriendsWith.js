import getToken from "./getToken";
// check if we have user's id in our friendslist
const checkIfFriendsWith = async (id, friends, setIsFriendsWith, myID) => {
    if (friends.filter(e => e.user_id === id).length > 0 || myID === id) {
        setIsFriendsWith(true)
    } else {
        setIsFriendsWith(false);
    }
}
export default checkIfFriendsWith;