import React, { useState } from 'react';
import { render, fireEvent, screen, getByPlaceholderText } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Cart } from './cart';
import { addToCart, deleteFromCart, cartNameSelected } from '../../store/onoff/cart.actions';
import { Product } from '../../store/onoff/cart.types';


const mockStore = configureStore([]);

describe('Cart component', () => {
  let store:any;
  let component:any;

  beforeEach(() => {
    store = mockStore({
      cart: {
        isProductSelected: false,
        isShopSelected: false,
        productName: '',
        products: [
          {
            id: 1,
            name: 'Product 1',
          },
        ],
      },
    });
    store.dispatch = jest.fn();
    
  });

  test('renders the component correctly', () => {

    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    //TextInput name
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();

    //Add Button
    const addButton = screen.getByTestId('cart__addButton');
    expect(addButton).toHaveClass('cart__addButton');
   
    //Cart Products
    const productsList = screen.getByTestId('cart__products');
    expect(productsList).toBeInTheDocument();

  });

  test('dispatches an action to add product to cart on Add button click', () => {
   
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    fireEvent.change(screen.getByTestId('cart_input_name'), { target: { value: 'Product 1' } });
    fireEvent.click(screen.getByTestId('cart__addButton'));

    expect(store.dispatch).toHaveBeenCalledWith( {"payload": {"name": "Product 1"}, "type": "CART_NAME_SELECTED"});
  });
 
  test('should add a product when add button is clicked', () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    const addButton = screen.getByTestId('cart__addButton');
    fireEvent.click(addButton);

    const products = store.getState().cart.products;
    expect(products.length).toBe(1);
  });

});

