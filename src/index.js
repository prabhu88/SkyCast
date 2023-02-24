import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import App from './app.js';
import store from './redux/store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/light-bootstrap-dashboard-react.scss'
//import './assets/myStyle/index.scss'
window.onload = () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
        , document.getElementById('app'));
};
