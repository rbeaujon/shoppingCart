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

export interface RootState {
  cart: CartState;
}
