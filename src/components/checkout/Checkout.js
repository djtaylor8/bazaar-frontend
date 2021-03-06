import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Cart from '../cart/Cart'
import Loading from '../notifications/Loading'


const Checkout = (props) => {
  let history = useHistory();
  const { cart } = props
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [loading, setLoading] = useState(false)

  const elements = useElements();
  const stripe = useStripe();

  const user = JSON.parse(localStorage.getItem('user'));


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      return;
    }

    const {clientSecret, order} = await fetch('https://bazaar-react-api.herokuapp.com/api/v1/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        paymentMethodType: 'card',
        amount: `${cart.total * 100}`,
        currency: 'usd',
        user: user,
        address: address,
        city: city,
        state: state,
        order_number: Math.floor(Math.random() * 1000)
      }),
    }).then(r => r.json())
    const {paymentIntent} = await stripe.confirmCardPayment(
      clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        }
      })

    if (paymentIntent){
      props.addOrder(order)
      props.clearCart()
      elements.getElement(CardElement).clear()
      setAddress('')
      setCity('')
      setState('')
      history.push('/confirmation')
    }
  }

  return (
    <div>
      {loading ? <Loading /> : null}
      <Grid container spacing={4} alignItems='center' justifyContent='center' style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Grid item sm={8}>
          <form id='payment-form' onSubmit={(e) => handleSubmit(e)}>
            <Typography variant='h5'>Shipping Info</Typography>
            <br></br>
            <Grid item xs={10}>
              <TextField fullWidth variant='standard' label="street address" value={address} onChange={e => setAddress(e.target.value)}></TextField>
            </Grid>
            <Grid item xs={10}>
              <TextField fullWidth label='city' variant='standard' value={city} onChange={e => setCity(e.target.value)}></TextField>
            </Grid>
            <Grid item xs={10}>
              <TextField fullWidth label='state' variant='standard' value={state} onChange={e => setState(e.target.value)}></TextField>
            </Grid>
            <br></br>
            <Typography variant='h5'>Payment</Typography>
            <Box sx={{ borderColor: 'grey', borderRadius: 6, height: '2rem', marginBottom: '2rem', marginTop: '.5rem', bgcolor: 'white', padding: '1rem', alignItems: 'center' }}>
              <CardElement id="card-element" iconStyle='solid' />
            </Box>
            <Button variant='contained' type='submit'>Pay</Button>
          </form>
        </Grid>
        <Grid item sm={4} style={{ color: '#fff', backdropFilter: 'blur(50px)'}}>
          <Cart cart={cart} products={props.products} removeFromCart={props.removeFromCart} addToCart={props.addToCart}/>
        </Grid>
      </Grid> 
    </div>
  );
};

export default Checkout;