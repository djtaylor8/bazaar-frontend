import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import StripeForm from './StripeForm'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe('pk_test_51Jgz9oGhEFVdImpM3RqeKYC6FRh1gotgx5E2b6TcOcjQtpiwhdubvY2KxeGHKhRaqj7B0tRDhulVy5r2WFwUBLfx00Dp5GdUy5')

const Checkout = (props) => {

    return (
        <div>
          <Grid container spacing={4} alignItems='center' justifyContent='center' style={{ maxWidth: 1100, margin: '0 auto' }}>
            <Grid item sm={8}>
            <form id='payment-form'>
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
               <Elements stripe={stripePromise}>
                 <StripeForm price={props.price} />
               </Elements>  
             </form>
            </Grid>
            <Grid item sm={4}>
                Soon to be cart...
            </Grid>
            </Grid> 
        </div>
    );
};

export default Checkout;