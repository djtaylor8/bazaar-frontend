export const addToCart = (id) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CART' });
    const user = JSON.parse(localStorage.getItem('user'));

    const requestOptions = {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${user.google_token}`,
            'Content-Type': 'application/json',
            'access-token': `${user.google_token}`
        },
        body: JSON.stringify({user_id: user.id, product_id: id, quantity: 1})
    }
    return fetch(`http://localhost:3000/api/v1/carts/${user.cart.id}`, requestOptions)
    .then(response => response.json())
    .then((responseJSON) => {
        dispatch({ type: 'ADD_TO_CART', product: responseJSON })
    })
    }
}