const usersReducer = (state = {
    isAuth: !!localStorage.getItem('user'),
    user: JSON.parse(localStorage.getItem('user')) || {},
    orderHistory: []
}, action) => {
    switch (action.type) {
        case 'LOADING_USER':
            return {
                ...state,
            };
        case 'LOGIN':
            return {
                ...state,
                isAuth: true,
                user: action.user,
                orderHistory: action.user.orders
            };
        case 'LOGOUT':
            localStorage.removeItem('user');
            return {
                ...state,
                isAuth: false,
                user: {},
                orderHistory: []
            }
        case 'ADD_ORDER':
            // debugger;
            return {
                ...state,
                isAuth: true,
                user: state.user,
                orderHistory: [...state.orderHistory, action.payload]
            }

        default:
            return state;
    }
};

export default usersReducer;