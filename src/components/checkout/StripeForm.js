import React from 'react';
import { withRouter } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Box from '@mui/material/Box';
import { Typography, Button } from '@material-ui/core';


const StripeForm = (props) => {

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
            <form id="payment-form" onSubmit={handleSubmit}>
                <Box sx={{ borderColor: 'text.primary', borderBottom: 1, height: '2rem', margin: '2rem' }}>
                <CardElement id="card-element" />
                </Box>
                <Button variant='contained'>Pay</Button>
            </form>
        </div>
    );
};

export default withRouter(StripeForm);
