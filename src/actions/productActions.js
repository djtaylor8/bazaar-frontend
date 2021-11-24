export const fetchProducts = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PRODUCTS' });
    fetch('https://bazaar-react-api.herokuapp.com/api/v1/products')
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({ type: 'ADD_PRODUCTS', products: responseJSON })
      })
  }
}