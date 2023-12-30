import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FeatureDeals from "../../../pages/home/components/featured-deals.component";

jest.mock("../../../redux/hotel/hotelsApi", () => ({
  useGetFeatureDealsQuery: jest.fn(),
}));

describe("FeatureDeals component", () => {
  test("renders loading state", async () => {
    const useGetFeatureDealsQueryMock = {
      data: undefined,
      isLoading: true,
      isError: false,
    };

    require("../../../redux/hotel/hotelsApi").useGetFeatureDealsQuery.mockReturnValue(
      useGetFeatureDealsQueryMock
    );

    render(<FeatureDeals />);

    // You might want to adjust this based on your loading indicator in the Loading component
    expect(screen.getByTestId("loading-indicator")).toBeInTheDocument();
  });

  test("renders error state", async () => {
    const useGetFeatureDealsQueryMock = {
      data: undefined,
      isLoading: false,
      isError: true,
    };

    require("../../../redux/hotel/hotelsApi").useGetFeatureDealsQuery.mockReturnValue(
      useGetFeatureDealsQueryMock
    );

    render(<FeatureDeals />);

    expect(screen.getByTestId("error-message")).toBeInTheDocument();
    // Adjust the test based on how you handle error messages in your component
  });

  test("renders carousel with data", async () => {
    // Mock the success state with some dummy data
    const useGetFeatureDealsQueryMock = {
      data: [{ id: 1, name: "Hotel A" }, { id: 2, name: "Hotel B" }],
      isLoading: false,
      isError: false,
    };

    require("../../../redux/hotel/hotelsApi").useGetFeatureDealsQuery.mockReturnValue(
      useGetFeatureDealsQueryMock
    );

    render(<FeatureDeals />);

    // Check if the carousel and hotel cards are rendered
    expect(screen.getByTestId("custom-carousel")).toBeInTheDocument();
    expect(screen.getAllByTestId("hotel-card")).toHaveLength(2);
  });
});
