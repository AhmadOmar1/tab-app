import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import HotelCard from '../../../components/cards/hotel/hotel-card.component';

import { Amenity } from '../../../models/amenity';

describe('HotelCard', () => {
    const mockHandleClick = jest.fn();
    const mockHotel = {
        hotelId: 1,
        hotelName: 'Test Hotel',
        roomPhotoUrl: 'https://example.com/hotel.jpg',
        countryName: 'Test Country',
        finalPrice: 100,
        starRating: 4,
        discount: 0.1,
        cityName: 'Test City',
        amenities: [] as Amenity[],
        originalRoomPrice: 100,
        title: 'Hey',
        hotelStarRating: 0
    };

    it('renders the hotel name and location correctly', () => {
        const { getByText } = render(
            <HotelCard
                {...mockHotel}
                onCardClick={mockHandleClick} />
        );
        expect(getByText(`${mockHotel.hotelName}`)).toBeInTheDocument();
        expect(getByText(`${mockHotel.cityName}, ${mockHotel.countryName}`)).toBeInTheDocument();
    });

    it('calls onCardClick when the button is clicked', () => {
        const { getByText } = render(
            <HotelCard
                {...mockHotel}
                onCardClick={mockHandleClick} />
        );
        fireEvent.click(getByText('details'));
        expect(mockHandleClick).toHaveBeenCalled();
    });
});
