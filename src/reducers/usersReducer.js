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

        default:
            return state;
    }
};

export default usersReducer;