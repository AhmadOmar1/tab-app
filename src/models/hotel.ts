import { Amenity } from "./amenity";

export interface Hotel {
  amenities: Amenity[];
  originalRoomPrice: number;
  discount: number;
  finalPrice: number;
  cityName: string;
  hotelName: string;
  starRating: number;
  description: string;
  roomPhotoUrl: string;
  location: string; 
  imgSrc: string;
}


