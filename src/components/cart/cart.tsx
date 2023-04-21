import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/index';
import { cartNameSelected, shopSelected, addToCart, deleteFromCart } from '../../store/onoff/cart.actions';
import { Product } from '../../store/onoff/cart.types';
import { ShopList } from "../shopList/shopList";
import { Button } from "../utils/button/button";
import TextInput from '../utils/textInput/textInput';
import './cart.scss';

export const Cart = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const handleAddClick = () => {
    if (cart.isShopSelected && cart.isProductSelected) {
      dispatch<any>(addToCart());
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
        name="name"
        placeholder="Name"
        value={cart.productName}
        onChange={(e)=> dispatch(cartNameSelected({ name: e.target.value }))}
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
            <input type="button"
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
