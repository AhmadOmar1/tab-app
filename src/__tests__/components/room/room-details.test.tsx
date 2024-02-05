import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import RoomDetails from '../../../components/cards/room/room-details.component';
import { mockRoom } from './room-card.test';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store'; 
import { BrowserRouter as Router } from 'react-router-dom';


const roomType = 'Deluxe Room';
const roomImage = '/hotelImg.jpg';



describe('RoomDetails', () => {
    it('renders the room type correctly', () => {
        const { getByText } = render(
            <Provider store={store}>
                <Router>
                    <RoomDetails
                        room={mockRoom}
                    />
                </Router>
            </Provider>
        );
      
        expect(getByText(roomType)).toBeInTheDocument();
    });

    it('renders the room price correctly', () => {
        const { getByText } = render(
            <Provider store={store}>
                <Router>
                    <RoomDetails
                        room={mockRoom}
                    />
                </Router>
            </Provider>
        );
        expect(getByText(`$${mockRoom.price}.00`)).toBeInTheDocument(); 
    });

    it('renders the provided room image', () => {
        const { getByAltText } = render(
            <Provider store={store}>
            <Router>
                <RoomDetails
                    room={mockRoom}
                />
            </Router>
        </Provider>
        );
        expect(getByAltText('Room image')).toHaveAttribute('src', roomImage);
    });

    it('renders the amenities correctly', () => {
        const { getByText } = render(
            <Provider store={store}>
                <Router>
                    <RoomDetails
                        room={mockRoom}
                    />
                </Router>
            </Provider>
        );
        expect(getByText('Test Amenity')).toBeInTheDocument();
    });
});
