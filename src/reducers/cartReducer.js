// const initialState = {
//     addedProducts: [],
// }

const cartReducer = (state = [], action) => {
    switch (action.type) {

        case 'LOADING_CART':
            return [
                ...state
            ]

        case 'ADD_TO_CART':
            debugger;
            return [
                ...state,
                action.product
            ]
    
        default:
        return state;
    }
}

export default cartReducer;


