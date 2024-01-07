import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from "../../api-config";
import { Room } from "../../../models/room";
import { HOTEL_URL } from "../hotel/hotel-api";
import { Amenity } from '../../../models/amenity';

const ROOM_URL = "api/rooms";

export const roomApi = createApi({
    reducerPath: "roomApi",
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getHotelRooms: builder.mutation<Room[], { hotelId: number, checkIn: string, checkOut: string }>({
            query: ({ hotelId, checkIn, checkOut }) => ({
                url: `${HOTEL_URL}/${hotelId}/rooms?checkInDate=${checkIn}&checkOutDate=${checkOut}`,
                method: "GET",
            }),
            transformResponse: (response: Room[],_,{hotelId}) => response.map((room) => ({ ...room, availability: true,hotelId: hotelId})),
        }),
        createRoom: builder.mutation<Room, { hotelId: number, room: Room }>({
            query: ({ hotelId, room }) => ({
                url: `${HOTEL_URL}/${hotelId}/rooms`,
                method: "POST",
                body: room,
            }),
            transformResponse: (response: Room, _, { hotelId }) => ({
                ...response,
                hotelId,
            }),
        }),
        addRoomPhoto: builder.mutation<{ id: number, url: string }, { roomId: number, url: string }>({
            query: ({ roomId, url }) => ({
                url: `${ROOM_URL}/${roomId}/photos`, 
                method: "POST",
                body: url,
            }),
        }),
        addRoomAmenity: builder.mutation<Amenity , { roomId: number, amenity: Amenity }>({
            query: ({ roomId, amenity }) => ({
                url: `${ROOM_URL}/${roomId}/amenities`, 
                method: "POST",
                body: amenity,
            }),
        }),
        updateRoom: builder.mutation<Room, { roomId: number, room: Room }>({
            query: ({ roomId, room }) => ({
                url: `${ROOM_URL}/${roomId}`,
                method: "PUT",
                body: room,
            }),
        }),

    }),
});

export const {
    useGetHotelRoomsMutation,
    useCreateRoomMutation,
    useAddRoomPhotoMutation,
    useAddRoomAmenityMutation,
    useUpdateRoomMutation,
} = roomApi;
