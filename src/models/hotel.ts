import { Amenity } from "./amenity";

export interface BaseHotel {
  hotelId?: number;
  cityName: string;
  hotelName: string;
}


export interface Hotel extends BaseHotel {
  amenities: Amenity[];
  starRating: number;
  longitude?: number;
  latitude?: number;
  location?: string;
  countryName?: string;
  roomPrice?: number;
  roomType?: string;
  imageUrl?: string;
  description?: string;
  discount: number;
  originalRoomPrice: number;
  finalPrice: number;
  title: string;
  hotelStarRating: number;
  roomPhotoUrl: string;
}

export interface HotelDeal extends BaseHotel {

}

export interface AddHotel {
  id?: number;
  cityId?: number;
  name: string;
  description: string;
  hotelType: number | null;
  starRating: number | null;
  latitude: number | null;
  longitude: number | null;
}

