const initState = []

const listRooms = (state = initState, action) =>{
    if(action.type === 'set-list-room'){
        return action.payload
    }
    return state;
}

export default listRooms;