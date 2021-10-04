import React from 'react';
import { withRouter } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const StripeForm = () => {
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
            <h1>Card</h1>
            <form id="payment-form" onSubmit={handleSubmit}>
                <label htmlFor="card-element">Card</label>
                <CardElement id="card-element" />
                <button>Pay</button>
            </form>
        </div>
    );
};

export default withRouter(StripeForm);