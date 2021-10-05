import React from 'react';
import Button from '@mui/material/Button';
import Checkout from '../checkout/Checkout'


const Cart = (props) => {
    const { cart, products } = props

    const itemsPrice = cart.reduce((a, c) => a + c.quantity * c.price, 0);

    const handleRemove = (e) => {
        props.removeFromCart(e.target.id)
    }

    const handleAdd = (e) => {
        props.addToCart(e.target.id)
    }

    return (
        <div>
            {cart.length === 0 && <div>Your cart is empty</div>}
            {cart.map((product) => (
                <div key={product.id}>
                    {product.name}
                    <div>
                        <Button id={product.id} onClick={(e) => handleRemove(e)} variant="contained" size="small">-</Button>
                        {product.quantity}
                        <Button id={product.id} onClick={(e) => handleAdd(e)} variant="contained" size="small">+</Button>
                    </div>
                    <Button id={product.id} onClick={(e) => handleRemove(e) }>Remove</Button>
                </div>
            ))}
            {cart.length !== 0 && (
                <>
                <hr></hr>
                <div>
                    Total Price 
                </div>
                <div>${itemsPrice.toFixed(2)}</div>
                
                {/* {MOVE CHECKOUT TO FORM} */}
                {/* <Checkout price={itemsPrice.toFixed(2)} /> */}
                </>
            )}
        </div>
    );
};

export default Cart;