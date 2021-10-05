import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchProducts } from './actions/productActions';
import { googleLogin, logout } from './actions/sessionActions';
import { addToCart, removeProductFromCart } from './actions/cartActions';
import ProductsList from './components/products/ProductsList';
import Product from './components/products/ProductShow'
import Login from './components/users/Login';
import Logout from './components/users/Logout';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CartDrawer from './components/cart/CartDrawer';
import AuthRoute from './components/auth/AuthRoute';
import NavBar from './components/navigation/NavBar';

class App extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

render() {
  // debugger;
  return (
    <Router>
      <div>
        <CssBaseline />
        <NavBar />

          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">
            <ShoppingBasketIcon />
            </Link>
          </li>

        <Route path='/logout'>
          <Logout logout={this.props.logout}/>
        </Route>

        <Route path="/cart">
          <CartDrawer cart={this.props.cart} products={this.props.products} removeFromCart={this.props.removeFromCart} addToCart={this.props.addToCart}/>
        </Route>

        <Switch>
          <AuthRoute path='/login' type='guest'>
            {this.props.user.isAuth ? <Redirect to='/' /> :
            <Login login={this.props.googleLogin} />
            }
          </AuthRoute>
          
          <AuthRoute path='/cart' type='private'/>
        
          <Route path='/products/:productId'>
            <Product products={this.props.products} addToCart={this.props.addToCart} />
          </Route>
          <Route path='/products'>
            <ProductsList products={this.props.products} loading={this.props.loading} addToCart={this.props.addToCart}/>
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
    logout: () => dispatch(logout()),
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeProductFromCart(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)

