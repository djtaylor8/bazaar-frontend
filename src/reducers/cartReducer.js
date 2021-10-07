const cartReducer = (state = {
    addedProducts: [],
    total: 0
}, action) => {
    switch (action.type) {

        case 'LOADING_CART':
            return {
                ...state
            }

        case 'ADD_TO_CART':
            let checkCartForProduct = state.addedProducts.find(product => product.id === action.product.id)
            if (checkCartForProduct) {
                checkCartForProduct.quantity += 1
                return {
                    ...state,
                    total: state.total +  checkCartForProduct.price
                }
            } else {
                action.product.quantity = 1;
                let newTotal = state.total + action.product.price
                return {
                    ...state,
                    addedProducts: [...state.addedProducts, action.product],
                    total: newTotal
                }
            };
        case 'REMOVE_FROM_CART':
            let productToRemove = state.addedProducts.find(product => product.id === action.product.id)
            if (productToRemove.quantity === 1) {
               let newCartProducts = state.addedProducts.filter(product => product.id !== action.product.id)
               let newTotal = state.total - productToRemove.price
               return {
                addedProducts: newCartProducts,
                total: newTotal
               }
            } else {
                productToRemove.quantity -= 1
                let newTotal = state.total - productToRemove.price
                return {
                    ...state,
                    total: newTotal
                }
            }
        case 'CLEAR_CART':
            return {
                ...state,
                addedProducts: [],
                total: 0
            }
    
        default:
        return state;
    }
}

export default cartReducer;


