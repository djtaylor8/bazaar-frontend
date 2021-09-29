import React, { Component } from 'react';
import { CssBaseline } from '@material-ui/core';
// import './App.css';
import ProductsList from './components/ProductsList';


export default class App extends Component {

render() {
  return (
    <div>
      <CssBaseline />
      <ProductsList />
    </div>
  );
  }

}

