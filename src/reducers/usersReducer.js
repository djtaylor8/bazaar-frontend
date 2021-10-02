const usersReducer = (state = {
    token: '',
    user: {}
}, action) => {
    switch (action.type) {
        case 'LOADING_USER':
            return {
                ...state,
            };
        case 'CURRENT_USER':
            return {
                ...state,
                token: action.user.google_token, 
                user: action.user
            }

        case 'LOGIN':
            return {
                ...state,
            };

        default:
            return state;
    }
};

export default usersReducer;