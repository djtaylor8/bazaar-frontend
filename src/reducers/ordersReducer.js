const ordersReducer = (state = {
    orders: []
}, action) => {
    switch (action.type) {
        case 'ADD_ORDER':
            return {
                ...state,
                orders: [...state.orders, action.payload]
            };
        default:
            return state;
    }
};

export default ordersReducer;