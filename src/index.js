// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
import { createStore, combineReducers } from "redux";

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


const store = createStore(combineReducers({ mathReducer, userReducer }));

store.subscribe(() => {
    console.log("Triggered", store.getState());
});
store.dispatch({
    type: "ADD",
    payload: 10
});
store.dispatch({
    type: "ADD",
    payload: 20
});
store.dispatch({
    type: "SET_NAME",
    payload: "Abey"
});