import { render, screen, fireEvent, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import Login from '../../pages/login/login.page';
import { BrowserRouter as Router } from 'react-router-dom'; 
import '@testing-library/jest-dom';


interface RootState {


}

const mockStore = configureStore<RootState>();

describe('Login component', () => {
  it('renders login form and handles form submission', async () => {
    const store: MockStoreEnhanced<RootState> = mockStore({});
    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();

    const mockLogin = jest.fn();
    jest.mock('../../services/auth.service', () => ({ login: mockLogin }));

    act(() => {
      fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'testuser' } });
      fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'testpassword' } });

      fireEvent.click(screen.getByRole('button'));
    });
  });


});



