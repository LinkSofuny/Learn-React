import { createStore, applyMiddleware } from "redux";
import countReducer from './count-reducers'
import thunk from 'redux-thunk'

export default createStore(countReducer, applyMiddleware(thunk))