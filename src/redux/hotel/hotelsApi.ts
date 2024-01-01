import { createApi} from '@reduxjs/toolkit/query/react';
import { TrendingDestination } from '../../models/trending-destination';
import { RecentlyVisitedHotel } from '../../models/recently-visted';
import { Hotel } from '../../models/hotel';
import { Amenity } from '../../models/amenity';
import { Image } from '../../models/image';
import { Room } from '../../models/room';
import { Review } from '../../models/review';

const DEALS_URL = 'api/home/featured-deals';
const RECENTLY_VISTED_URL = 'api/home/users/'; 
const TRENDING_URL = 'api/home/destinations/trending';
const AMENITY_URL = 'api/search-results/amenities'
const SEARCH_URL = 'api/home/search';
const HOTEL_URL = 'api/hotels/';

import { baseQuery } from '../api-config';

export const hotelsApi = createApi({
  reducerPath: 'hotelsApi',
  baseQuery,
  endpoints: (builder) => ({

    getFeatureDeals: builder.query<Hotel[], void>({
      query: () => DEALS_URL,
    }),
    getRecentlyVistedHotels: builder.query<RecentlyVisitedHotel[],  { id: number }>({
      query: ({ id }) => `${RECENTLY_VISTED_URL}${id}/recent-hotels`,
    }),
    getTrendingDestination: builder.query<TrendingDestination[], void>({
      query: () => TRENDING_URL,
    }),
    getAmenties: builder.query<Amenity[], void>({
      query: () => AMENITY_URL,
    }),
    getHotelBySearch: builder.mutation<Hotel[], string>({
      query: (search) => search ? `${SEARCH_URL}?${search}` : SEARCH_URL,
    }),
    getHotelById: builder.query<Hotel, { id: number; includeRooms?: boolean }>({
      query: ({ id, includeRooms }) => `${HOTEL_URL}${id}?includeRooms=${includeRooms !== false}`,
    }),
    getHotelGalleryById: builder.query<Image[], { id: number }>({
      query: ({ id }) => `${HOTEL_URL}${id}/gallery`,
    }),
    getHotelRoomsById: builder.query<Room[], { id: number; checkInDate: string; checkOutDate: string }>({
      query: ({ id, checkInDate, checkOutDate }) => `${HOTEL_URL}${id}/rooms?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`,
      transformResponse: (response: Room[],_,{id}) => response.map((room) => ({ ...room, availability: true,hotelId: id})),
    }),
    getHotelAvilableRoomsById: builder.query<Room[], { id: number; checkInDate: string; checkOutDate: string }>({
      query: ({ id, checkInDate, checkOutDate }) => `${HOTEL_URL}${id}/available-rooms?checkInDate=${checkInDate}&CheckOutDate=${checkOutDate}`,
      transformResponse: (response: Room[],_,{id}) => response.map((room) => ({ ...room, availability: true,hotelId: id})),
    }),
    getHotelReviewsById: builder.query<Review[] , {id:number}> ({
      query: ({id}) => `${HOTEL_URL}${id}/reviews`
    }),
    
    
  })
});


export const {
  useGetRecentlyVistedHotelsQuery,
  useGetFeatureDealsQuery,
  useGetTrendingDestinationQuery,
  useGetAmentiesQuery,
  useGetHotelBySearchMutation,
  useGetHotelByIdQuery,
  useGetHotelGalleryByIdQuery,
  useGetHotelRoomsByIdQuery,
  useGetHotelReviewsByIdQuery,
  useGetHotelAvilableRoomsByIdQuery
} = hotelsApi;
