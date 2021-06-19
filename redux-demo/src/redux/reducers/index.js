/**
 * 总reducers
*/
import { combineReducers } from "redux";

import countReducer from './count-reducers'
import personReducers from "./person";

export default combineReducers({
    count: countReducer,
    persons: personReducers
})
