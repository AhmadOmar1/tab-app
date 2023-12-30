import {  Grid } from '@mui/material'
import React  from 'react'
import { Hotel } from '../../../models/hotel'
import HotelCard from '../../../components/cards/hotel/hotel-card.component'
import { useNavigate } from 'react-router-dom'

type HotelsGrid = {
  data: Hotel[]

}


const HotelsGrid: React.FC<HotelsGrid> = ({ data }) => {
  const navigate = useNavigate();
  const handleCardClick = (hotelId: number | undefined) => {
    const nextUrl = `/hotel?hotelId=${hotelId}`;

    navigate(nextUrl)
  };

  return <Grid
    container
    spacing={2}
    gap={5}
    justifyContent="center"
  >

    {data?.map((hotel: Hotel) => {
      return (
        <HotelCard
          key={hotel.hotelId}
          hotelId={hotel.hotelId}
          hotelName={hotel.hotelName}
          cityName={hotel.cityName}
          countryName={hotel.countryName}
          roomPhotoUrl={hotel.roomPhotoUrl}
          discount={hotel.discount ? hotel.discount : 0}
          amenities={hotel.amenities}
          starRating={hotel.starRating}
          roomPrice={hotel.roomPrice}
          roomType={hotel.roomType}
          finalPrice={hotel.roomPrice || 0}
          description={hotel.description}
          onCardClick={() => handleCardClick(hotel.hotelId)}
           originalRoomPrice={0} title={''} 
           hotelStarRating={0}          
        />
      )
    })}
  </Grid>

}

export default HotelsGrid