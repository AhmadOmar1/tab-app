import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PaymentCard from '../../components/cards/payment-card.component';

describe('PaymentCard', () => {
    it('renders the payment card component', () => {
        render(<PaymentCard />);
    });

    it('renders the payment card title', () => {
        const { getByText } = render(<PaymentCard />);
        expect(getByText('Payment Details')).toBeInTheDocument();
    });

    it('renders the card number label', () => {
        const { getByText } = render(<PaymentCard />);
        expect(getByText('Card Number')).toBeInTheDocument();
    });

    it('renders the cardholder name label', () => {
        const { getByText } = render(<PaymentCard />);
        expect(getByText('Cardholder Name')).toBeInTheDocument();
    });

    it('renders the expiration label', () => {
        const { getByText } = render(<PaymentCard />);
        expect(getByText('Expiration')).toBeInTheDocument();
    });

    it('renders the cvv label', () => {
        const { getByText } = render(<PaymentCard />);
        expect(getByText('CVV')).toBeInTheDocument();
    });

});