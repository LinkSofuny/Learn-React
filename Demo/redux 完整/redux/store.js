import { createStore } from "redux";
import countReducer from './count-reducers'

export default createStore(countReducer)