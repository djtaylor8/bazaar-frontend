import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import CartDrawer from '../cart/CartDrawer';

import { logout } from "../../actions/sessionActions";

class NavBar extends Component {
  render() {
    return (
      <AppBar position="static" style={{ display: "flex" }}>
        <Toolbar>
          <Typography variant="h6">Bazaar</Typography>
          <div style={{ marginLeft: "auto" }}>
            {this.props.user.isAuth ? (
              <>
                <Link to="/">
                  <Button color="inherit">Home</Button>
                </Link>
                <Link to="/products">
                    <Button color="inherit">Products</Button>
                </Link>

                <Link to="/my-orders">
                  <Button color="inherit">Orders</Button>
                </Link>
                <CartDrawer cart={this.props.cart} products={this.props.products} removeFromCart={this.props.removeFromCart} addToCart={this.props.addToCart}/>
                <Button color="inherit" onClick={this.props.logout}>
                  Logout
                </Button>
              </>
            ) : (
            <div>
            <Link to="/products">
                <Button color="inherit">Products</Button>
            </Link>
            <Link to="/login">
                <Button color="inherit">Login</Button>
            </Link>
            </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default connect(({ user }) => ({ user }), { logout })(
  NavBar
);