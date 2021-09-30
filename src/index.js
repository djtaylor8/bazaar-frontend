import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import productsReducer from './reducers/productsReducer';
import thunk from 'redux-thunk';

import App from './App';

const store = createStore(productsReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



