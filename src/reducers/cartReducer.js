const initialState = {
    addedProducts: [],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'LOADING_CART':
            return {
                ...state
            }

        case 'ADD_TO_CART':
            debugger;
            return {
                ...state,
                addedProducts: action.products
            }
    

        default:
        return state;
    }
}

export default cartReducer;


