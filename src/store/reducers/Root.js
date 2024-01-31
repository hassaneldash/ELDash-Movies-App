import { combineReducers } from 'redux';
import favoritesReducer from './AddToFav';

// Combine multiple reducers into a single rootReducer
const rootReducer = combineReducers({
    favorites: favoritesReducer,   // State managed by the favoritesReducer
});

export default rootReducer;
