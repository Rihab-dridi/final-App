import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import combineReducers from './Redux/reducers/index'
import {Provider} from 'react-redux'

const middleware=[thunk]
const store = createStore(combineReducers, composeWithDevTools(
  applyMiddleware(...middleware),
  
));

ReactDOM.render(
  < Provider store={store}>
    <App />
  </  Provider>,
  document.getElementById('root')
);

