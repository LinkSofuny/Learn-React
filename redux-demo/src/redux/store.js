import { createStore, applyMiddleware } from "redux";
import countReducer from './reducers/count-reducers'
import personReducers from "./reducers/person";
import thunk from 'redux-thunk'

export default createStore(countReducer, applyMiddleware(thunk))