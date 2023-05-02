import React, { useEffect, useState } from 'react';
import { shopSelected } from '../../store/onoff/cart.actions';
import store from '../../store/index';

import './shopList.scss';

interface Shop {
  id: string;
  name: string;
  sortOrder: number;
}
interface ShopListProps {
  error: boolean;
}

export const ShopList: React.FC<ShopListProps> = ( props ) => {
  const [shops, setShops] = useState<Shop[]>([]);
  const [selectedShop, setSelectedShop] = useState<Shop | undefined>(undefined);
  const { error, ...restProps } = props;
  
  const getShops = async () => {
    try {
      const response = await fetch('http://localhost:3200/shopsList');
      const data = await response.json();
      setShops(data);
    } catch (error) {
      console.error(`Error fetching shops: ${error}`);
    }
  };

  useEffect(() => {
    getShops();
  }, []);

  const handleShopSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedShopId = event.target.value;
    const shop = shops.find((shop) => shop.id === selectedShopId);
    setSelectedShop(shop);
    store.dispatch(shopSelected({ id: selectedShopId }));

  };

  return (
  <div className='shopList'>
    <select 
      className={`shopList__select ${error ? '--error' : ''}`}
      data-testid="combobox"
      onChange={handleShopSelect}>
        
      <option value="">Select a shop</option>
      {shops.map((shop) => (
        <option key={shop.id} value={shop.id}>
          {shop.name}
        </option>
      ))}
    </select>
  </div>

  );
};
