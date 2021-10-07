import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    user: usersReducer,
    cart: cartReducer,
})

export default rootReducer;