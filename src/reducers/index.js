import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';
import usersReducer from './usersReducer';
import ordersReducer from './ordersReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    user: usersReducer,
    cart: cartReducer,
    orders: ordersReducer
})

export default rootReducer;