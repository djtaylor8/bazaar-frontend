import React from 'react';
import StripeForm from './StripeForm'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe('pk_test_51Jgz9oGhEFVdImpM3RqeKYC6FRh1gotgx5E2b6TcOcjQtpiwhdubvY2KxeGHKhRaqj7B0tRDhulVy5r2WFwUBLfx00Dp5GdUy5')

const Checkout = (props) => {

    return (
        <div>
        <Elements stripe={stripePromise}>
            <StripeForm price={props.price} />
        </Elements>  
        </div>
    );
};

export default Checkout;