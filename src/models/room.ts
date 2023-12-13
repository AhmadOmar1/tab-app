export  interface RoomProps {
    roomType: string,
    price: number,
    amenities?: string[],
    capacityOfAdults: number,
    capacityOfChildrens: number,
    imageSrc: string,
    description?: string
    starRating?: number
    availability?: boolean
}