import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchProducts } from './actions/productActions';
import { googleLogin } from './actions/sessionActions';
import { addToCart } from './actions/cartActions';
import ProductsList from './components/products/ProductsList';
import Product from './components/products/ProductShow'
import Login from './components/users/Login';

class App extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

render() {
  debugger;
  return (
    <Router>
      <div>
        <CssBaseline />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <Route path='/login'>
          <Login login={this.props.googleLogin}/>
        </Route>

        <Switch>
        <Route path='/products/:productId'>
          <Product products={this.props.products} addToCart={this.props.addToCart} />
        </Route>
        <Route path='/products'>
          <ProductsList products={this.props.products} loading={this.props.loading} />
        </Route>
        </Switch>

      </div>
    </Router>
  );
  }

}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    user: state.user,
    cart: state.cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    googleLogin: (response) => dispatch(googleLogin(response)),
    addToCart: (id) => dispatch(addToCart(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)

