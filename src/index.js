import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './slide.scss';
//import AppOld from './AppOld';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import {Provider} from 'react-redux';
//import store from './store';


ReactDOM.render(
    <App />
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
