import axios from "axios";

export const getListRooms = () =>{
    return (dispatch) =>{
        axios
        .get('http://3.1.211.120:8081/rooms/all')
        .then(({data})=>{
            console.log(data.data, 'list response');
            dispatch(setListRoom(data.data));
        })
        .catch((err)=>{
            console.log(err, err.response.message);
        })
    }
}

export const setListRoom = (payload)=>{
    return {
        type : 'set-list-room',
        payload
    }
}