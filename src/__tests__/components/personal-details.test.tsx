import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PersonalDetails from '../../components/cards/personal-details.component';

const firstName = 'Ahmad';
const lastName = 'Omar';
const address = '123 Main St';

const mockPersonalDetails = {
    firstName: firstName,
    lastName: lastName,
    address: address
};

describe('PersonalDetails', () => {
    it('renders and types into the first name field correctly', () => {
        const { getByPlaceholderText } = render(<PersonalDetails {...mockPersonalDetails} />);
        const firstNameField = getByPlaceholderText('First Name');

        fireEvent.change(firstNameField, { target: { value: 'New First Name' } });

        expect(firstNameField).toHaveValue('New First Name');
    });

    it('renders and types into the last name field correctly', () => {
        const { getByPlaceholderText } = render(<PersonalDetails {...mockPersonalDetails} />);
        const lastNameField = getByPlaceholderText('Second Name');

        fireEvent.change(lastNameField, { target: { value: 'New Last Name' } });

        expect(lastNameField).toHaveValue('New Last Name');
    });

    it('renders and types into the address field correctly', () => {
        const { getByPlaceholderText } = render(<PersonalDetails {...mockPersonalDetails} />);
        const addressField = getByPlaceholderText('Address');

        fireEvent.change(addressField, { target: { value: 'New Address' } });

        expect(addressField).toHaveValue('New Address');
    });
});
