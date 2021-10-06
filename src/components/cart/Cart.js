import React from 'react';
import Button from '@mui/material/Button';


const Cart = (props) => {
    const { cart } = props
    // debugger;
    
    const handleRemove = (e) => {
        props.removeFromCart(e.target.id)
    }

    const handleAdd = (e) => {
        props.addToCart(e.target.id)
    }

    return (
        <div>
            {cart.addedProducts.length === 0 && <div>Your cart is empty</div>}
            {cart.addedProducts.map((product) => (
                <div key={product.id}>
                    {product.name}
                    <div>Qty: {product.quantity}</div>
                    <div>
                    <Button id={product.id} onClick={(e) => handleAdd(e)} variant="contained" size="small">+</Button>
                    <Button id={product.id} onClick={(e) => handleRemove(e)} variant="contained" size="small">-</Button>
                    </div>
                </div>
            ))}
            {cart.addedProducts.length !== 0 && (
                <>
                <hr></hr>
                <div>
                    Total Price 
                </div>
                <div id='cart-total'>${cart.total.toFixed(2)}</div>
                </>
            )}
        </div>
    );
};

export default Cart;