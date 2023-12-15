import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import CityCard from '../../components/cards/city-card.component';

const cityName = 'New York';

describe('CityCard', () => {
  it('renders the city name correctly', () => {
    const { getByText } = render(<CityCard image='' name={cityName} />);
    expect(getByText(cityName)).toBeInTheDocument();
  });

  it('renders the provided city image', () => {
    const cityImage = '/hotelImg.jpg';
    const { getByAltText } = render(<CityCard name={cityName} image={cityImage} />);
    expect(getByAltText('City Image')).toHaveAttribute('src', cityImage);
  });
});

