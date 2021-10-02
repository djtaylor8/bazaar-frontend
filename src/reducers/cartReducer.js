const initialState = {
    addedProducts: [],
    // total: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'LOADING_CART':
            return {
                ...state
            }

        case 'ADD_TO_CART':
            return {
                ...state,
                addedProducts: [...state, action.product]
            }
    

        default:
        return state;
    }
}

export default cartReducer;


