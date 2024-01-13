import { render } from '@testing-library/react';
import Home from '../../../pages/home/home.page';
import '@testing-library/jest-dom'


describe('Home', () => {
  it('renders without errors', () => {
    render(<Home />);
  });

});