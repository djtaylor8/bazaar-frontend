const usersReducer = (state = { user: null }, action) => {
    switch (action.type) {
        case 'LOADING_USER':
            return {
                ...state,
            };
        case 'UPDATE_USER':
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

export default productsReducer;