import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import RoomDetails from '../../components/cards/room-details.component';

const roomType = 'Deluxe Room';
const roomImage = '/hotelImg.jpg';
const roomPrice = 20;

const amenities = [
    'Free Wifi',
    'Free Parking',
    'Free Breakfast',
    'Free Lunch',
];

const mockRoom = {
    roomType: roomType,
    imageSrc: roomImage,
    price: roomPrice,
    amenities: amenities,
    description: '',
    capacityOfChildrens: 2,
    capacityOfAdults: 2,
    availableRooms: 2,
};

describe('RoomDetails', () => {
    it('renders the room type correctly', () => {
        const { getByText } = render(<RoomDetails {...mockRoom} />);
        expect(getByText(roomType)).toBeInTheDocument();
    });

    it('renders the room price correctly', () => {
        const { getByText } = render(<RoomDetails {...mockRoom} />);
        expect(getByText(`$${roomPrice}.00`)).toBeInTheDocument(); // Corrected variable name here
    });

    it('renders the provided room image', () => {
        const { getByAltText } = render(<RoomDetails {...mockRoom} />);
        expect(getByAltText('Room image')).toHaveAttribute('src', roomImage);
    });

    it('renders the amenities correctly', () => {
        const { getByText } = render(<RoomDetails {...mockRoom} />);
        amenities.forEach((amenity) => {
            expect(getByText(amenity)).toBeInTheDocument();
        });
    });
});
