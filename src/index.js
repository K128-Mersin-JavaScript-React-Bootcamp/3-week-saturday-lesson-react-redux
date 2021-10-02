import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import itemsReducer from './features/item/reducers/itemsReducer';
import studentsReducer from './features/student/reducers/studentsReducer';
import { combineReducers, createStore } from 'redux';
import { BrowserRouter as Router, } from 'react-router-dom';
import axios from 'axios';

const store = createStore(
  combineReducers({itemsReducer, studentsReducer}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log("REQUESTING", config.method, config.url, config.data);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
