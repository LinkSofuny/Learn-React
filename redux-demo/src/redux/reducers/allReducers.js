import { combineReducers } from "redux";
import addReudcer from "./addReducer";
import personReducer from "./personReducer";

export default combineReducers({
    add: addReudcer,
    addPerson: personReducer
})