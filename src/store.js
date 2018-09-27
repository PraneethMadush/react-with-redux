import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import userReducer from './reducers/userReducer';
import mathReducer from './reducers/mathReducer';

const myLogger = (store) => (next) => (action) => {
    console.log("Action Logged", action);
    next(action)
};


const store = createStore(
    combineReducers({ mathReducer, userReducer }),
    {},
    applyMiddleware(myLogger, logger)
);
export default store;