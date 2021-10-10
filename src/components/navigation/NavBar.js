import React from "react";
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import CartDrawer from '../cart/CartDrawer';
import { googleLogin, logout } from "../../actions/sessionActions";
import SortIcon from '@mui/icons-material/Sort';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Login from '../users/Login'
import Logout from '../users/Logout'
import Avatar from '@mui/material/Avatar';

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: 'none'
    },
    icon: {
        color: '#fff'
    },
}));

const  NavBar = (props) => {
    let history = useHistory();
    const { user } = props.user;

const [anchorEl, setAnchorEl] = React.useState(null);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOrders = () => {
    history.push('/my-orders')
    setAnchorEl(null);
  }

  const handleHome = () => {
      history.push('/')
      setAnchorEl(null);
  }

  const handleShop = () => {
    history.push('/products')
    setAnchorEl(null);
  }

  const handleLogout = () => {
      setAnchorEl(null)
  }

  const classes = useStyles();
    return (
      <AppBar elevation={0} className={classes.appbar} position="static" style={{ display: "flex" }}>
        <Toolbar>
          <Typography variant="h5" style={{ color: 'black', flexGrow: '1'}}>Bazaar</Typography>
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
                <MenuItem onClick={handleShop}>Shop</MenuItem>
                
                { props.user.isAuth && (
                <div>                  
                <MenuItem onClick={handleOrders}>My orders</MenuItem>
                <MenuItem onClick={handleLogout}><Logout logout={props.logout}/></MenuItem>
                </div> 
                 )}
                </Menu>
            </div>
            {props.user.isAuth ? (
            <>
            <CartDrawer className={classes.cart} cart={props.cart} products={props.products} removeFromCart={props.removeFromCart} addToCart={props.addToCart}/>
            <Avatar src={`${user.image}`} />
            </>
            ) : (
            
            <>
            <div style={{ cursor: 'pointer' }}>
            <Login login={props.googleLogin} />
            </div>
            </>
            )}
        </Toolbar>
      </AppBar>
    );
  }

export default connect(({ user }) => ({ user }), { logout, googleLogin })(
  NavBar
);