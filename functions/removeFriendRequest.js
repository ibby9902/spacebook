
const removeFriendRequest = (data, id) => {
    const i = data((user, index) => {
        if(user.user_id === id)
            return true;
    })
    if(i > -1)
        data.splice(i,1);
}

export default removeFriendRequest;

