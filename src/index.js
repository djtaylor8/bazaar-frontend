import React from 'react';
import ReactDOM from 'react-dom';
import '@fontsource/roboto/300.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import App from './App';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';

require ('./App.css');

const stripePromise = loadStripe('pk_test_51Jgz9oGhEFVdImpM3RqeKYC6FRh1gotgx5E2b6TcOcjQtpiwhdubvY2KxeGHKhRaqj7B0tRDhulVy5r2WFwUBLfx00Dp5GdUy5')

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
     <Elements stripe={stripePromise}>
        <App />
     </Elements>  
  </Provider>,
  document.getElementById('root')
);



