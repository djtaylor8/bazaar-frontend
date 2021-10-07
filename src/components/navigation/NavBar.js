import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import CartDrawer from '../cart/CartDrawer';

import { logout } from "../../actions/sessionActions";

const  NavBar = (props) => {

    return (
      <AppBar position="static" style={{ display: "flex" }}>
        <Toolbar>
          <Typography variant="h6">Bazaar</Typography>
          <div style={{ marginLeft: "auto" }}>
            {props.user.isAuth ? (
              <>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Button color="inherit">Home</Button>
                </Link>
                <Link to="/products" style={{ textDecoration: 'none' }}>
                    <Button color="inherit">Products</Button>
                </Link>

                <Link to="/my-orders" style={{ textDecoration: 'none' }}>
                  <Button color="inherit">Orders</Button>
                </Link>
                <CartDrawer cart={props.cart} products={props.products} removeFromCart={props.removeFromCart} addToCart={props.addToCart}/>
                <Button color="inherit" onClick={props.logout}>
                  Logout
                </Button>
              </>
            ) : (
            <div>
            <Link to="/products" style={{ textDecoration: 'none' }}>
                <Button color="inherit">Products</Button>
            </Link>
            <Link to="/login" style={{ textDecoration: 'none' }}>
                <Button color="inherit">Login</Button>
            </Link>
            </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    );
  }

export default connect(({ user }) => ({ user }), { logout })(
  NavBar
);