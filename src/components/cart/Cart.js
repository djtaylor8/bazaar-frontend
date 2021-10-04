import React from 'react';
import Button from '@mui/material/Button';


const Cart = (props) => {
    const { cart, products } = props

    // debugger;

    const itemsPrice = cart.reduce((a, c) => a + c.quantity * c.price, 0);

    const handleRemove = (e) => {
        props.removeFromCart(e.target.id)
    }

    return (
        <div>
            <h3>Cart</h3>
            {cart.length === 0 && <div>Cart is empty</div>}
            {cart.map((product) => (
                <div key={product.id}>
                    {product.name}
                    <div>
                        <Button variant="contained" size="small">-</Button>
                        {product.quantity}
                        <Button variant="contained" size="small">+</Button>
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
                </>
            )}
        </div>
    );
};

export default Cart;