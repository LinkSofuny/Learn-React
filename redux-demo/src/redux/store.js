import { createStore, applyMiddleware, combineReducers } from "redux";
import countReducer from './reducers/count-reducers'
import personReducers from "./reducers/person";
import thunk from 'redux-thunk'


const allReducer = combineReducers({
    count: countReducer,
    persons: personReducers
})

export default createStore(allReducer, applyMiddleware(thunk))