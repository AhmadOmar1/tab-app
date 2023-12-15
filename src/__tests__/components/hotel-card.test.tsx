import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HotelCard from '../../components/cards/hotel-card.component';

const hotelName = 'Hilton Hotel';
const hotelImage = '/hotelImg.jpg';
const hotelPrice = 20;

const mockHotel = { 
        amenities: [],
        cityName: '',
        location: '',
        description: '',
        roomPhotoUrl: '',
        originalRoomPrice: 0,
        discount: 0,
        finalPrice: hotelPrice,
        starRating: 5,
        hotelName: hotelName,
        imgSrc: hotelImage
};

describe('HotelCard', () => {
    it('renders the hotel name correctly', () => {
        const { getByText } = render(<HotelCard {...mockHotel} />);
        expect(getByText(hotelName)).toBeInTheDocument();
    });

    it('renders the hotel price correctly', () => {
        const { getByText } = render(<HotelCard {...mockHotel} />);
        expect(getByText(`$${hotelPrice}.00`)).toBeInTheDocument();
    });

    it('renders the provided hotel image', () => {
        const { getByAltText } = render(<HotelCard {...mockHotel} />);
        expect(getByAltText('Hotel Image')).toHaveAttribute('src', hotelImage);
    });
});






