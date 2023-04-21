import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import CartReducer from './onoff/cart.reducer';

export interface RootState {
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

const middlewareEnhancer = applyMiddleware(thunkMiddleware); 

const enhancer = composeEnhancers(middlewareEnhancer);

const store = createStore(rootReducer, enhancer);

export default store;
