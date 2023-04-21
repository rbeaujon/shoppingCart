export const SHOP_SELECTED = 'SHOP_SELECTED';
export const CART_NAME_SELECTED = 'CART_NAME_SELECTED';
export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

interface ShopSelectedAction {
  type: typeof SHOP_SELECTED;
  payload: { id: string };
}

interface NameSelectedAction {
  type: typeof CART_NAME_SELECTED;
  payload: { name: string };
}

interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: { name: string, id: string };
}
interface DeleteFromCartAction {
  type: typeof DELETE_FROM_CART;
  payload: { index: number };
}

export type Action = ShopSelectedAction | NameSelectedAction | AddToCartAction | DeleteFromCartAction;

export const shop_selected = (shop: { id: string }): ShopSelectedAction => ({
  type: SHOP_SELECTED,
  payload: shop,
});

export const cart_name = (name: { name: string }): NameSelectedAction => ({
  type: CART_NAME_SELECTED,
  payload: name,
});

export const add_to_cart = (add: { name: string, id: string }): AddToCartAction => ({
  type: ADD_TO_CART,
  payload: add,
});

export const delete_from_cart = (del: { index: number }): DeleteFromCartAction => ({
  type: DELETE_FROM_CART,
  payload: del,
});
