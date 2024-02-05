import { render } from '@testing-library/react';
import Button from '../../components/common/buttons/button.component';
import '@testing-library/jest-dom'


describe('Button', () => {
  it('renders the button text correctly', () => {
    const buttonText = 'Click me';
    const { getByText } = render(<Button text={buttonText}>{buttonText}</Button>);
    expect(getByText(buttonText)).toBeInTheDocument();
  });

});