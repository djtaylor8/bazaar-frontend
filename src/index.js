import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fontsource/roboto/500.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



