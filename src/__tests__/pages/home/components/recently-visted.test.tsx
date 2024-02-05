import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import RecentlyVistedHotels from '../../../../pages/home/components/recently-visted-hotels.component';
import { store } from '../../../../redux/store';
import "@testing-library/jest-dom";

describe('RecentlyVistedHotels', () => {
  it('renders without crashing', () => {
    const { getByText } = render(
      <Provider store={store}>
        <RecentlyVistedHotels />
      </Provider>
    );
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});