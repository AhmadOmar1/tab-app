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
    render(
      <Provider store={store}>
        <BrowserRouter>
          {" "}
          {/* Wrap your component with BrowserRouter */}
          
          <Login />
        </BrowserRouter>
      </Provider>
    );
  });
  it("renders without errors", () => {
    expect(true).toBe(true);
  });

  test("Password visibility toggled correctly", () => {
    const { getByTestId } = screen;
    const passwordField = getByTestId("password-field");
    const toggleButton = getByTestId("password-toggle-button");

    expect(passwordField).toBeInTheDocument();
    expect(toggleButton).toBeInTheDocument();

    console.log("Before click:", passwordField.getAttribute("type"));

    fireEvent.click(toggleButton);

    console.log("After click:", passwordField.getAttribute("type"));

    // Now, perform the expectation
    expect(passwordField).toHaveAttribute("type", "text");
  });

  //test with localstorage mock
  it("should call localStorage.setItem", () => {
    const spy = jest.spyOn(localStorage, "setItem");
    const button = screen.getByTestId("login-button");
    fireEvent.click(button);
    expect(spy).toHaveBeenCalled();
  });
});
