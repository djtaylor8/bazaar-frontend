const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOADING_USER':
            return {
                ...state,
            };
        case 'CURRENT_USER':
            return {
                ...state, user: action.user
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