import React from 'react';
import { withRouter } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const StripeForm = (props) => {

    const CARD_OPTIONS = {
        iconStyle: "solid",
        style: {
          base: {
            iconColor: "#c4f0ff",
            color: "#000",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": {
              color: "#fce883"
            },
            "::placeholder": {
              color: "#87bbfd"
            }
          },
          invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
          }
        }
      };

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
                <label htmlFor="card-element">Enter Card Info</label>
                <CardElement id="card-element" options={CARD_OPTIONS} />
                <button>Pay</button>
            </form>
        </div>
    );
};

export default withRouter(StripeForm);