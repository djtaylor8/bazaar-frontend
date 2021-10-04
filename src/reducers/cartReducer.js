const cartReducer = (state = [], action) => {
    switch (action.type) {

        case 'LOADING_CART':
            return [
                ...state
            ]

        case 'ADD_TO_CART':
            let checkCartForProduct = state.find(product => product.id === action.product.id)
            if (checkCartForProduct) {
                checkCartForProduct.quantity += 1
                return [
                    ...state, 
                ]
            } else {
                action.product.quantity = 1;
                return [
                    ...state,
                    action.product
                ]
            };
        case 'REMOVE_FROM_CART':
            let productToRemove = state.find(product => product.id === action.product.id)
            if (productToRemove.quantity === 1) {
               let newCartProducts = state.filter(product => product.id !== action.product.id)
               return newCartProducts;
            } else {
                productToRemove.quantity -= 1
                return [
                    ...state,
                ]
            }
        
            
    
        default:
        return state;
    }
}

export default cartReducer;


