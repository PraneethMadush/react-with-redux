import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

// store.subscribe(() => {
//     console.log("Triggered", store.getState());
// });
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