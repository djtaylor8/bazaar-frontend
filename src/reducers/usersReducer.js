const usersReducer = (state = {
    isAuth: !!localStorage.getItem('user'),
    user: JSON.parse(localStorage.getItem('user')) || {},
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
                user: action.user
            };
        case 'LOGOUT':
            localStorage.removeItem('user');
            return {
                ...state,
                isAuth: false,
                user: {}
            }

        default:
            return state;
    }
};

export default usersReducer;