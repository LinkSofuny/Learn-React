import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import allReducer from "./reducers";

// test
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))