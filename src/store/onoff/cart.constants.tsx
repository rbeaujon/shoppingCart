export const SHOP_SELECTED = 'SHOP_SELECTED';
export const CART_NAME_SELECTED = 'CART_NAME_SELECTED';
export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

export interface Action {
  type: string;
  payload?: any;
}