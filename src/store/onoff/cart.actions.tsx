export const SHOP_SELECTED = 'SHOP_SELECTED';

interface ShopSelectedAction {
  type: typeof SHOP_SELECTED;
  payload: { id: string };
}


export const shop_selected = (shop: { id: string }) => ({
  type: SHOP_SELECTED,
  payload: shop,
});

export type Action = ShopSelectedAction;