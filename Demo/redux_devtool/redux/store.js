import { createStore, applyMiddleware, combineReducers } from "redux";
import countReducer from './reducers/count-reducers'
import personReducers from "./reducers/person";
import thunk from 'redux-thunk'

import { composeWithDevTools } from "redux-devtools-extension";

const allReducer = combineReducers({
    count: countReducer,
    persons: personReducers
})

export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))