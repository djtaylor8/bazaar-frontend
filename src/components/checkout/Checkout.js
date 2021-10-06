import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Cart from '../cart/Cart'


const Checkout = (props) => {
    const { cart } = props

    const elements = useElements();
    const stripe = useStripe();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const {clientSecret} = await fetch('http://localhost:3000/api/v1/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                paymentMethodType: 'card',
                amount: `${props.price * 100}`,
                currency: 'usd',
                
            }),
        }).then(r => r.json());

        const {paymentIntent} = await stripe.confirmCardPayment(
            clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                }
            })
            if (paymentIntent){
                elements.getElement(CardElement).clear()
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
                <TextField fullWidth label="street address">

                </TextField>
                </Grid>
                <Grid item xs={10}>
                <TextField fullWidth label='city'>
                    
                </TextField>
                </Grid>
                <Grid item xs={10}>
                <TextField fullWidth label='state'>
                    
                </TextField>
                </Grid>
                <br></br>
                <Typography variant='h5'>Payment</Typography>
               
                 <Box sx={{ borderColor: 'text.primary', borderBottom: 1, height: '2rem', marginBottom: '2rem', marginTop: '2rem' }}>
                 <CardElement id="card-element" />
                 </Box>
                 <Button variant='contained'>Pay</Button>
             
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