import React from 'react';

const Cart = (props) => {
    const { cart, products } = props

    // debugger;

    const itemsPrice = cart.reduce((a, c) => a + c.quantity * c.price, 0);

    return (
        <div>
            <h3>Cart</h3>
            {cart.length === 0 && <div>Cart is empty</div>}
            {cart.map((product) => (
                <div key={product.id}>
                    <div>{product.name}</div>
                    <div>
                        <button> - </button>{' '}
                        <button> + </button> 
                    </div>
                    <div>{product.quantity} x {product.price.toFixed(2)} </div>
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