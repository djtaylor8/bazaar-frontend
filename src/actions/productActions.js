export const fetchProducts = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_PRODUCTS' });
        fetch('http://localhost:3000/api/v1/products')
        .then((response) => {
            return response.json
        })
        .then((response) => {
            dispatch({ type: 'ADD_PRODUCTS', products: response })
        })
    }
}