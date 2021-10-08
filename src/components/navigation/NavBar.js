import React from "react";
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, IconButton, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import CartDrawer from '../cart/CartDrawer';
import { googleLogin, logout } from "../../actions/sessionActions";
import SortIcon from '@mui/icons-material/Sort';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Login from '../users/Login'
import AccountCircle from '@mui/icons-material/AccountCircle';


const useStyles = makeStyles((theme) => ({
    appbar: {
        minHeight: '30vh',
        backgroundImage: `url(${'/images/IMG_3823.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    icon: {
        color: '#fff'
    },
}));

const  NavBar = (props) => {
    let history = useHistory();
 
const [anchorEl, setAnchorEl] = React.useState(null);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHome = () => {
    history.push('/')
    setAnchorEl(null);
  }

  const handleOrders = () => {
    history.push('/my-orders')
    setAnchorEl(null);
  }

  const handleShop = () => {
    history.push('/products')
    setAnchorEl(null);
  }


    const classes = useStyles();
    return (
      <AppBar className={classes.appbar} position="static" style={{ display: "flex" }}>
        <Toolbar>
          <Typography variant="h6" style={{ color: 'black', flexGrow: '1'}}>Bazaar</Typography>
          <CartDrawer className={classes.cart} cart={props.cart} products={props.products} removeFromCart={props.removeFromCart} addToCart={props.addToCart}/>
            <div>
               <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <SortIcon className={classes.icon} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleHome}>Home</MenuItem>
                <MenuItem onClick={handleOrders}>My orders</MenuItem>
                <MenuItem onClick={handleShop}>Shop</MenuItem>
              </Menu>
            </div>
            <Login login={props.googleLogin}/>
        </Toolbar>
      </AppBar>
    );
  }

export default connect(({ user }) => ({ user }), { logout, googleLogin })(
  NavBar
);