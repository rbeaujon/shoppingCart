export interface CartState {
  isShopSelected: boolean;
  isProductSelected: boolean;
  nameShop: string;
  productName: string;
  products: Product[];
}

export interface Product {
  id: string;
  name: string;
}
export interface Error {
  message?: string;
  shopError?: boolean;
  nameError?: boolean;
}

export interface RootState {
  cart: CartState;
}
