import { render, screen, waitFor } from '@testing-library/react';
import { ShopList } from './shopList';
import data from '../services/api/data.json'

describe('ShopList', () => {
  test('renders options for each shop', async () => {
    render(<ShopList error={false} />);

    await waitFor(() => {
      const options = screen.getAllByRole('option');
      expect(options.length).toBeGreaterThan(1);
    });

    const options = screen.getAllByRole('option');
    expect(options.length).toBe(4);
  });
});


test('select is render?', async () => {
  
  jest.spyOn(window, 'fetch').mockImplementation(() => {
    return Promise.resolve({
      json: () => Promise.resolve(data.shopsList),
    } as Response);
  });
  
  render(<ShopList error={false} />);
  
  const selectElement = screen.getByRole('combobox');
  
  expect(selectElement).toBeInTheDocument();
  await waitFor(() => {
    const options = screen.getAllByRole('option');
    expect(options.length).toEqual(data.shopsList.length + 1);
  });

});
