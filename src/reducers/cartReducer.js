const cartReducer = (state = [], action) => {
    switch (action.type) {

        case 'LOADING_CART':
            return [
                ...state
            ]

        case 'ADD_TO_CART':
            let checkCartForProduct = state.find(product => product.id === action.product.id)
            // debugger;
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
            }
    
        default:
        return state;
    }
}

export default cartReducer;


