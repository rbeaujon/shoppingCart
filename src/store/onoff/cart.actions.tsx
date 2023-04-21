import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../index';
import {
  SHOP_SELECTED,
  CART_NAME_SELECTED,
  ADD_TO_CART,
  DELETE_FROM_CART,
} from './cart.constants';

export const shopSelected = (shop: { id: string }) => ({
  type: SHOP_SELECTED,
  payload: shop,
});

export const cartNameSelected = (name: { name: string }) => ({
  type: CART_NAME_SELECTED,
  payload: name,
});

export const addToCart = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => (dispatch, getState) => {
  const state = getState();
  if (state.cart.isShopSelected && state.cart.isProductSelected) {
    const add = { id: state.cart.productName, name: state.cart.nameShop };
    dispatch({
      type: ADD_TO_CART,
      payload: add,
    });
  }
};

export const deleteFromCart = (
  index: number
): ThunkAction<void, RootState, unknown, any> => (dispatch, getState) => {
  const state = getState();
  const productStore = state.cart.products;
  const newProducts = [...productStore];
  newProducts.splice(index, 1);
  dispatch({
    type: DELETE_FROM_CART,
    payload: newProducts,
  });
};