const initState= [];

const userType = (state = initState, action) => {
    if (action.type === "set-user"){
        return action.payload;
    }
    return state
}

export default userType