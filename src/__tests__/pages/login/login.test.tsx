import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import configureStore from "redux-mock-store";
import Login from "../../../pages/login/login.page";
import "jest-localstorage-mock";

const mockStore = configureStore([]);

describe("Login", () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
    var localStorageMock = (function () {
      return {
        getItem: jest.fn(),
        setItem: jest.fn(),
        clear: jest.fn(),
        removeItem: jest.fn(),
      };
    })();
    Object.defineProperty(window, "localStorage", { value: localStorageMock });

    render(
      <Provider store={store}>
        <BrowserRouter>
          {" "}
          <Login />
        </BrowserRouter>
      </Provider>
    );
  });
  it("renders without errors", () => {
    expect(true).toBe(true);
  });

  it("should call localStorage.setItem", () => {
    var localStorageMock = (function () {
      return {
        getItem: jest.fn(),
        setItem: jest.fn(),
        clear: jest.fn(),
        removeItem: jest.fn(),
      };
    })();
    Object.defineProperty(window, "localStorage", { value: localStorageMock });
    const button = screen.getByTestId("login-button");
    const nameField = screen.getByTestId("username-field");
    const passwordField = screen.getByTestId("password-field");
    fireEvent.change(nameField, "user");
    fireEvent.change(passwordField, "user");
    fireEvent.click(button);
  });
});
