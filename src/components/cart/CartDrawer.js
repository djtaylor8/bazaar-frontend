import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Cart from './Cart'
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


export default function CartDrawer(props) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
    >
      <List>
        <CloseIcon onClick={toggleDrawer(anchor, false)} />
        <h3>Cart</h3>
      </List>
      <Divider />
      <List>
          <ListItemIcon>
          <ListItem>
            <Cart cart={props.cart} products={props.products} removeFromCart={props.removeFromCart} addToCart={props.addToCart}/>
          </ListItem>
          </ListItemIcon>
          {props.cart.length > 0 ? 
          <ListItemIcon>
              <ListItem>
                  <Link to='/checkout' style={{ textDecoration: 'none' }}>
                  <Button variant="contained" size="small" onClick={toggleDrawer(anchor, false)}>Checkout</Button>
                  </Link>
              </ListItem>
          </ListItemIcon>
        : null }
      </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
              <ShoppingBasketIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}