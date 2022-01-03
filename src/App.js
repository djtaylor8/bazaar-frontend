import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProducts } from './actions/productActions';
import { googleLogin, logout } from './actions/sessionActions';
import { addToCart, removeProductFromCart, clearCart } from './actions/cartActions';
import { addOrder } from './actions/orderActions';
import ProductsList from './components/products/ProductsList.tsx';
import Product from './components/products/ProductShow.tsx'
import Logout from './components/users/Logout.tsx';
import AuthRoute from './components/auth/AuthRoute';
import NavBar from './components/navigation/NavBar';
import Checkout from './components/checkout/Checkout'
import OrdersHistory from './components/orders/Orders';
import OrderConfirmation from './components/notifications/OrderConfirmation';
import Welcome from './components/home/Welcome.tsx';
import Error from './components/notifications/Error';

class App extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }
  

  render() {
    return (
      <Router>
        <div>
          {this.props.user.status === 'error' && <Error />}

          <NavBar cart={this.props.cart} products={this.props.products} removeFromCart={this.props.removeFromCart} addToCart={this.props.addToCart}/>

          <Switch>

            <AuthRoute path='/checkout' type='private'>
              <Checkout cart={this.props.cart} products={this.props.products} removeFromCart={this.props.removeFromCart} addToCart={this.props.addToCart} addOrder={this.props.addOrder} clearCart={this.props.clearCart} />
            </AuthRoute>

            <AuthRoute path='/my-orders' type='private'>
              <OrdersHistory user={this.props.user} />
            </AuthRoute>

            <AuthRoute path='/logout' type='private'>
              <Logout logout={this.props.logout}/>
            </AuthRoute>

            <AuthRoute path='/confirmation' type='private'>
              <OrderConfirmation />
            </AuthRoute>
          
            <AuthRoute path='/cart' type='private' />
        
            <Route path='/products/:productId'>
              <Product products={this.props.products.products} addToCart={this.props.addToCart} user={this.props.user} />
            </Route>

            <Route path='/products'>
              <ProductsList products={this.props.products.products} loading={this.props.loading} addToCart={this.props.addToCart} user={this.props.user}/>
            </Route>

            <Route exact path='/'>
              <Welcome />
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
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    googleLogin: (response) => dispatch(googleLogin(response)),
    logout: () => dispatch(logout()),
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeProductFromCart(id)),
    addOrder: (order) => dispatch(addOrder(order)),
    clearCart: () => dispatch(clearCart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)