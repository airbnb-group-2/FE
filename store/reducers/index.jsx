import { combineReducers } from "redux"
import listRooms from "./listroom";
import userType from "./userType" 

const rootReducers = combineReducers({
    userType,
    listRooms    
})

export default rootReducers;