import { Amenity } from "./amenity"

export  interface Room {
    roomNumber: string,
    roomType: string,
    price: number,
    roomAmenities?: Amenity[],
    capacityOfAdults: number,
    capacityOfChildren: number,
    roomPhotoUrl: string,
    description?: string
    availability?: boolean,
    hotelId?: number
}