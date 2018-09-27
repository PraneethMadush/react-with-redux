import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

const mathInitialState = {
    result: 1,
    lastValues: []
}

const mathReducer = (state = mathInitialState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "SUBSTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
    }
    return state;
}

const userInitialState = {
    name: "Isuru",
    age: 25
}

const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload,
            }
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload,
            }
            break;
    }
    return state;
}

const myLogger = (store) => (next) => (action) => {
    console.log("Action Logged", action);
    next(action)
};

const store = createStore(
    combineReducers({ mathReducer, userReducer }),
    {},
    applyMiddleware(myLogger, logger)
);

store.subscribe(() => {
    console.log("Triggered", store.getState());
});
// store.dispatch({
//     type: "ADD",
//     payload: 10
// });
// store.dispatch({
//     type: "ADD",
//     payload: 20
// });
// store.dispatch({
//     type: "SET_NAME",
//     payload: "Abey"
// });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();