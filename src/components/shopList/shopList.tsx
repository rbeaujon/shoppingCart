import { useEffect, useState } from 'react';

interface Shop {
  id: string;
  name: string;
  sortOrder: number;
}

export const ShopList = () => {
  const [shops, setShops] = useState<Shop[]>([]);
  const [selectedShop, setSelectedShop] = useState<Shop | undefined>(undefined);
  
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
    const selectedShop = shops.find((shop) => shop.id === selectedShopId);
    setSelectedShop(selectedShop);
  };

  return (
    <div>
      <select onChange={handleShopSelect}>
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
