import { render, fireEvent } from '@testing-library/react';
import CityCard from '../../../components/cards/city/city-card.component';
import '@testing-library/jest-dom'


describe('CityCard', () => {
  const mockHandleClick = jest.fn();
  const mockCity = {
    cityName: 'New York',
    countryName: 'United States',
    thumbnailUrl: 'https://example.com/new-york.jpg',
  };

  it('renders the city name and country name correctly', () => {
    const { getByText } = render(
      <CityCard 
        {...mockCity}
        handleClick={mockHandleClick}
      />
    );

    expect(getByText(`${mockCity.cityName}, ${mockCity.countryName}`)).toBeInTheDocument();
  });

  it('calls handleClick when the card is clicked', () => {
    const { getByText } = render(
      <CityCard 
        {...mockCity}
        handleClick={mockHandleClick}
      />
    );
  
    fireEvent.click(getByText(`${mockCity.cityName}, ${mockCity.countryName}`));
    expect(mockHandleClick).toHaveBeenCalledWith(mockCity);
  });

  it('render image card correctly', () => {
    const { getByRole } = render(
      <CityCard 
        {...mockCity}
        handleClick={mockHandleClick}
      />
    );

    expect(getByRole('img')).toHaveAttribute('src', mockCity.thumbnailUrl);
  });

  
});
  

