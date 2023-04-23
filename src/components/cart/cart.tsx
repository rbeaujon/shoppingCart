import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/index';
import { cartNameSelected, addToCart, deleteFromCart } from '../../store/onoff/cart.actions';
import { Product, Error } from '../../store/onoff/cart.types';
import { ShopList } from "../shopList/shopList";
import { Button } from "../utils/button/button";
import TextInput from '../utils/textInput/textInput';

import './cart.scss';

export const Cart = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const [error, setError] = useState<Error>({});

  const handleAddClick = () => {
    if (cart.isShopSelected && cart.isProductSelected) {
      setError({})
      dispatch<any>(addToCart());
    } else if(!cart.isShopSelected && !cart.isProductSelected) {
      setError({message: 'Shop and name are required', shopError: true, nameError: true})
    } else if(!cart.isProductSelected){
      setError({message: 'Name is required', nameError: true})
    } else {
      setError({message: 'Shop is required', shopError: true})
    }
  }

  const handleDeleteClick = (index: number) => {
    dispatch<any>(deleteFromCart(index));
  }

  const updateProducts = () => {
    setProducts(cart.products);
  }

  useEffect(() => {
    updateProducts();
  }, [cart.products])

  return (
    <div className="cart">
      
      <label className="cart__title">Add to cart:</label>

      <TextInput
        type="text"
        id="name"
        data-testid="cart_input_name"
        name="name"
        placeholder="Name"
        value={cart.productName}
        onChange={(e)=> dispatch(cartNameSelected({ name: e.target.value }))}
        required
        className={`cart__inputName ${error.nameError ? '--error' : ''}`}
      />

      <ShopList error={error.shopError ? true : false}/>

      <Button 
        id="add" 
        data-testid="cart__addButton"
        className="cart__addButton" 
        onClick={() => handleAddClick()}
      >Add</Button>

      <div className="cart__products" data-testid="cart__products">
        {products.map((product: Product, index: number) => (
          <div key={index}>
            <span className="cart__products--id">{product.id}</span>
            <span className="cart__products--name">{product.name}</span>
            
            <input type="button"
              id="delete" 
              data-testid="cart__deleteButton"
              className="cart__deleteButton" 
              value="Delete"
              onClick={() => handleDeleteClick(index)}  
            />
            
          </div>
        ))}
      </div>
      {error.message && <span className="cart__error">{error.message}</span>}
    </div>
  )
}