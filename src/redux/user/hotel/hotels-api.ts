import { createApi } from "@reduxjs/toolkit/query/react";
import { Hotel } from "../../../models/hotel";
import { RecentlyVisitedHotel } from "../../../models/recently-visted";
import { TrendingDestination } from "../../../models/trending-destination";
import { Image } from "../../../models/image";
import { Room } from "../../../models/room";
import { Review } from "../../../models/review";
import { baseQuery } from "../../api-config";

const DEALS_URL = "api/home/featured-deals";
const RECENTLY_VISITED_URL = "api/home/users/";
const TRENDING_URL = "api/home/destinations/trending";
const HOTEL_URL = "api/hotels/";

export const hotelsApi = createApi({
  reducerPath: "hotelsApi",
  baseQuery,
  tagTypes: ["Hotels"],
  endpoints: (builder) => ({
    getFeatureDeals: builder.query<Hotel[], void>({
      query: () => DEALS_URL,
      providesTags: ["Hotels"],
    }),
    getRecentlyVistedHotels: builder.query<
      RecentlyVisitedHotel[],
      { id: number }
    >({
      query: ({ id }) => `${RECENTLY_VISITED_URL}${id}/recent-hotels`,
      providesTags: ["Hotels"],
    }),
    getTrendingDestination: builder.query<TrendingDestination[], void>({
      query: () => TRENDING_URL,
      providesTags: ["Hotels"],
    }),
    getHotelById: builder.query<Hotel, { id: number; includeRooms?: boolean }>({
      query: ({ id, includeRooms }) =>
        `${HOTEL_URL}${id}?includeRooms=${includeRooms !== false}`,
      providesTags: ["Hotels"],
    }),
    getHotelGalleryById: builder.query<Image[], { id: number }>({
      query: ({ id }) => `${HOTEL_URL}${id}/gallery`,
      providesTags: ["Hotels"],
    }),
    getHotelRoomsById: builder.query<
      Room[],
      { id: number; checkInDate: string; checkOutDate: string }
    >({
      query: ({ id, checkInDate, checkOutDate }) =>
        `${HOTEL_URL}${id}/rooms?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`,
      transformResponse: (response: Room[], _, { id }) =>
        response.map((room) => ({ ...room, availability: true, hotelId: id })),
      providesTags: ["Hotels"],
    }),
    getHotelReviewsById: builder.query<Review[], { id: number }>({
      query: ({ id }) => `${HOTEL_URL}${id}/reviews`,
      providesTags: ["Hotels"],
    }),
    getHotelAvailableRoomsById: builder.query<Room[], { id: number; checkInDate: string; checkOutDate: string }>({
      query: ({ id, checkInDate, checkOutDate }) => `${HOTEL_URL}${id}/available-rooms?checkInDate=${checkInDate}&CheckOutDate=${checkOutDate}`,
      transformResponse: (response: Room[], _, { id }) => response.map((room) => ({ ...room, availability: true, hotelId: id })),
      providesTags: ["Hotels"],
  }),
  }),
})

export const {
  useGetRecentlyVistedHotelsQuery,
  useGetFeatureDealsQuery,
  useGetTrendingDestinationQuery,
  useGetHotelByIdQuery,
  useGetHotelGalleryByIdQuery,
  useGetHotelRoomsByIdQuery,
  useGetHotelReviewsByIdQuery,
  useGetHotelAvailableRoomsByIdQuery,
} = hotelsApi;
