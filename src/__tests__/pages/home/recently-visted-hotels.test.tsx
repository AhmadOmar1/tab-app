import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RecentlyVistedHotels from "../../../pages/home/components/recently-visted-hotels.component";

jest.mock("../../../redux/hotel/hotelsApi", () => ({
  useGetRecentlyVistedHotelsQuery: jest.fn(),
}));

describe("RecentlyVistedHotels component", () => {
  test("renders loading state", async () => {
    const useGetRecentlyVistedHotelsQueryMock = {
      data: undefined,
      isLoading: true,
      isError: false,
    };
    require("../../../redux/hotel/hotelsApi").useGetRecentlyVistedHotelsQuery.mockReturnValue(
      useGetRecentlyVistedHotelsQueryMock
    );

    render(<RecentlyVistedHotels />);

    expect(screen.getByText("Loading")).toBeInTheDocument();
  });

  test("renders error state", async () => {
    const useGetRecentlyVistedHotelsQueryMock = {
      data: undefined,
      isLoading: false,
      isError: true,
    };

    require("../../../redux/hotel/hotelsApi").useGetRecentlyVistedHotelsQuery.mockReturnValue(
      useGetRecentlyVistedHotelsQueryMock
    );

    render(<RecentlyVistedHotels />);

    expect(screen.getByText("Error fetching recently visted hotels:")).toBeInTheDocument();
    // Adjust the test based on how you handle error messages in your component
  });

  test("renders carousel with data", async () => {
    // Mock the success state with some dummy data
    const useGetRecentlyVistedHotelsQueryMock = {
      data: [
        { cityName: "City A", hotelName: "Hotel A", starRating: 4, thumbnailUrl: "urlA", visitDate: "2023-01-01" },
        { cityName: "City B", hotelName: "Hotel B", starRating: 5, thumbnailUrl: "urlB", visitDate: "2023-01-02" },
      ],
      isLoading: false,
      isError: false,
    };

    require("../../../redux/hotel/hotelsApi").useGetRecentlyVistedHotelsQuery.mockReturnValue(
      useGetRecentlyVistedHotelsQueryMock
    );

    render(<RecentlyVistedHotels />);

    // Check if the carousel and RecentlyVisited cards are rendered
    expect(screen.getByTestId("custom-carousel")).toBeInTheDocument();
    expect(screen.getAllByTestId("recently-visited-card")).toHaveLength(2);
  });
});
