import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { connect } from "react-redux";

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
                <Link to="/my-orders">
                  <Button color="inherit">Orders</Button>
                </Link>
                <Button color="inherit" onClick={this.props.logout}>
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button color="inherit">Login</Button>
              </Link>
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