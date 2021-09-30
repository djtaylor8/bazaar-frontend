import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchProducts } from './actions/productActions';
import ProductsList from './components/ProductsList';

class App extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

render() {
  return (
    <Router>
      <div>
        <CssBaseline />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>

        <Route path='/products'>
          <ProductsList products={this.props.products} loading={this.props.loading} />
        </Route>

      </div>
    </Router>
  );
  }

}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    loading: state.loading 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)

