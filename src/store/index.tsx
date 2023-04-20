import { createStore, combineReducers, compose } from 'redux';
import CartReducer from './onoff/cart.reducer';

interface RootState {
  cart: ReturnType<typeof CartReducer>;
}
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}


const rootReducer = combineReducers<RootState>({
  cart: CartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());


export default store;
