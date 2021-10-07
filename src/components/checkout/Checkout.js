import React from 'react';
import { useState } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Cart from '../cart/Cart'


const Checkout = (props) => {
    const { cart } = props
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const elements = useElements();
    const stripe = useStripe();

    const user = JSON.parse(localStorage.getItem('user'));

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const {clientSecret, order} = await fetch('http://localhost:3000/api/v1/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                paymentMethodType: 'card',
                amount: `${cart.total * 100}`,
                currency: 'usd',
                user: user,
                address: address,
                city: city,
                state: state
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
            }
        alert('Thank you for your payment!')
    }

    return (
        <div>
          <Grid container spacing={4} alignItems='center' justifyContent='center' style={{ maxWidth: 1100, margin: '0 auto' }}>
            <Grid item sm={8}>
              <form id='payment-form' onSubmit={(e) => handleSubmit(e)}>
                <Typography variant='h5'>Shipping Info</Typography>
                <br></br>
                <Grid item xs={10}>
                <TextField fullWidth label="street address" value={address} onChange={e => setAddress(e.target.value)}></TextField>
                </Grid>
                <Grid item xs={10}>
                <TextField fullWidth label='city' value={city} onChange={e => setCity(e.target.value)}></TextField>
                </Grid>
                <Grid item xs={10}>
                <TextField fullWidth label='state' value={state} onChange={e => setState(e.target.value)}></TextField>
                </Grid>
                <br></br>
                <Typography variant='h5'>Payment</Typography>
               
                 <Box sx={{ borderColor: 'text.primary', borderBottom: 1, height: '2rem', marginBottom: '2rem', marginTop: '2rem' }}>
                 <CardElement id="card-element" />
                 </Box>
                 <Button variant='contained' type='submit'>Pay</Button>
             
                </form>

            </Grid>
            <Grid item sm={4}>
              <Cart cart={cart} products={props.products} removeFromCart={props.removeFromCart} addToCart={props.addToCart}/>
            </Grid>
            </Grid> 
        </div>

    );
};

export default Checkout;