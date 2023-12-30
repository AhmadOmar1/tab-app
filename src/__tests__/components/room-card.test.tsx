import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import RoomCard from '../../components/cards/room/room-card.component';

const roomType = 'Deluxe';
const roomImage = '/hotelImg.jpg';

const mockRoom = {
    roomType: roomType,
    imageSrc: roomImage,
    price: 20,
    amenties: [],
    description: '',
    capacityOfChildrens: 2,
    capacityOfAdults: 2,
    avalaibleRooms: 2,
};

describe('RoomCard', () => {
    it('renders the room Type correctly', () => {
        const { getByText } = render(<RoomCard  {...mockRoom} />);
        expect(getByText(roomType)).toBeInTheDocument();
    });
    
    it('renders the provided room image', () => {
        const { getByAltText } = render(<RoomCard {...mockRoom} />);
        expect(getByAltText('room image')).toHaveAttribute('src', roomImage);
    });
});