import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store'; // adjust the import path as needed
import { BrowserRouter as Router } from 'react-router-dom';
import CityDetailsComponent from '../../../components/cards/city/city-details.component';
import '@testing-library/jest-dom'

describe('CityDetailsComponent', () => {
  const mockCity = {
    cityName: 'New York',
    countryName: 'United States',
    thumbnailUrl: 'https://example.com/new-york.jpg',
    description: 'New York is a state in the northeastern U.S., known for New York City and towering Niagara Falls.',
  };

  it('renders the city name and country name correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <CityDetailsComponent {...mockCity} />
        </Router>
      </Provider>
    );

    expect(getByText(`${mockCity.cityName}, ${mockCity.countryName}`)).toBeInTheDocument();
  });

  it('calls handleCityDetailsClick when the button is clicked', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <CityDetailsComponent {...mockCity} />
        </Router>
      </Provider>
    );
    fireEvent.click(getByText('VIEW CITY'));
  });
});
