import { 
  Action, 
  SHOP_SELECTED, 
  CART_NAME_SELECTED, 
  ADD_TO_CART,
  DELETE_FROM_CART
} from './cart.actions';

interface State {
  isShopSelected: boolean;
  nameShop: string;
  isProductSelected: boolean;
  productName: string;
  products: Array<{id: string, name: string}>
}

interface Payload {
  id?: string;
  name?: string;
}

export const getinitialState = (): State => ({
  isShopSelected: false,
  nameShop: "",
  isProductSelected: false,
  productName: "",
  products: []
});

const CartReducer = (
  state: State = getinitialState(),
  action: Action
): State => {
  const { payload, type } = action;

  const { index, id, name }: { index?: number, id?: string, name?: string } = payload ?? {};

  switch (type) {
    case SHOP_SELECTED:
      if (id) {
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
    case CART_NAME_SELECTED:
      if (name) {
        return {
          ...state,
          isProductSelected: true,
          productName: name,
        };
      } else {
        return {
          ...state,
          isProductSelected: false,
          productName: "",
        };
      }
    case ADD_TO_CART: 
      if (id !== undefined && name !== undefined) {
        return {
          ...state,
          products: [...state.products, { id, name }]
        }  
      }
    return state;
    case DELETE_FROM_CART: 
      if (index !== undefined) {
        const newProducts = [...state.products];
        newProducts.splice(index, 1);
        return {
          ...state,
          products: newProducts,
        };
      }
      return state;
    default:
      return state;
  }
};

export default CartReducer;
