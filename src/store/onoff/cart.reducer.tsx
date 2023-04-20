import { Action, SHOP_SELECTED } from './cart.actions';

interface State {
  isShopSelected: boolean;
  nameShop: string;
}

export const getinitialState = (): State => ({
  isShopSelected: false,
  nameShop: ""
});

const CartReducer = (
  state: State = getinitialState(),
  action: Action
): State => {
  const { payload, type } = action;

  switch (type) {
    case SHOP_SELECTED:
      const { id } = payload;
      if (id !== "") {
        return {
          ...state,
          isShopSelected: true,
          nameShop: id,
        };
      } else {
        return {
          ...state,
          isShopSelected: false,
          nameShop: "",
        };
      }
    default:
      return state;
  }
};

export default CartReducer;
