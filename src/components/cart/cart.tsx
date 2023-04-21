import {useState } from "react";

import { cart_name, add_to_cart, delete_from_cart} from '../../store/onoff/cart.actions';
import { useSelector } from 'react-redux';
import store from '../../store/index';

import { ShopList } from "../shopList/shopList";
import { Button } from "../utils/button/button";
import TextInput from '../utils/textInput/textInput';

import './cart.scss';

interface Product {
  id: string;
  name: string;
}

export const Cart = () => {

 
  const [products, setProducts] = useState<Product[]>([]);

  const updateProducts = () => {
    const reducer = store.getState();
    const productStore = reducer.cart.products;
    setProducts(productStore)
  }

  const handleAddClick = () => {
    const state = store.getState();
    if (state.cart.isShopSelected && state.cart.isProductSelected) {
      store.dispatch(add_to_cart({id: state.cart.productName, name: state.cart.nameShop}))
      updateProducts()
    } 
  }

  const handleDeleteClick = (index: number) => {
    store.dispatch(delete_from_cart({index}))
    updateProducts()
  }

  return (
    <div className="cart">
      
      <label className="cart__title">Add to cart:</label>
      
      <TextInput
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        onChange={(e)=> store.dispatch(cart_name({name: e.target.value }))}
        required
      />

      <ShopList />
      
      <Button 
        id="add" 
        className="cart__addButton" 
        onClick={() => handleAddClick()}
      >Add</Button>

      <div className="cart__products">
        {products.map((product: Product, index: number) => (
          <div key={index}>
            <span className="cart__products--id">{product.id}</span>
            <span className="cart__products--name">{product.name}</span>
            <input type="text"
              id="delete" 
              className="cart__deleteButton" 
              value="Delete"
              onClick={() => handleDeleteClick(index)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}