import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import RoomCard from '../../../components/cards/room/room-card.component';
import { Room } from '../../../models/room';

const roomType = 'Deluxe';
const roomImage = '/hotelImg.jpg';

export const mockRoom: Room = {
    roomType: roomType,
    roomPhotoUrl: roomImage,
    capacityOfAdults: 1,
    capacityOfChildren: 1,
    price: 1,
    roomNumber: '12',
    availability: true,
    roomAmenities: [
        {
            name: 'Test Amenity',
            description: 'Test ',

        },
    ],
    hotelId: 1,
    description: 'Test Description',
};

describe('RoomCard', () => {
    const mockHandleClick = jest.fn();

    it('renders the room Type correctly', () => {
        const { getByText } = render(<RoomCard
            disabled={false}
            onClick={mockHandleClick}
            room={mockRoom}
        />);
        expect(getByText(roomType)).toBeInTheDocument();
    });

    it('renders the provided room image', () => {
        const { getByAltText } = render(<RoomCard
            disabled={false}
            onClick={mockHandleClick}
            room={mockRoom}
        />);
        expect(getByAltText('room image')).toHaveAttribute('src', roomImage);
    });
});