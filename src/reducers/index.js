import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    user: usersReducer
})

export default rootReducer;