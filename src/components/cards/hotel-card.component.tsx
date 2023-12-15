import { Box, Card, CardActions, CardContent, CardMedia, Rating, Typography } from "@mui/material"
import React from "react";
import Button from "../common/buttons/button.component";
import WifiIcon from "../../assets/icons/wifi-icon.component";
import LocationIcon from "../../assets/icons/location-icon.component";
import KitchenIcon from "../../assets/icons/kitchen-icon.component";
import ScreenIcon from "../../assets/icons/screen-icon.component";
import { Hotel } from "../../models/hotel";

const HotelCard: React.FC<Hotel> = ({ hotelName = 'Paradaise', finalPrice = 20, originalRoomPrice = 40, starRating = 5, discount = 0.5, imgSrc = 'hotelImg.jpg', cityName = 'Nablus'  }) => (
  <Card
    elevation={1}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      width: 400,
      height: '550px',
      borderRadius: '20px',
      overflow: 'hidden'
    }}>

    <CardMedia
      height='230px'
      component="img"
      alt="Hotel Image"
      image={imgSrc}
      sx={{ marginBottom: 1 }}
    />

    <CardContent sx={{ p: 2.5 }}>
      <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'space-between', height: 53 }}>
        <Rating
          readOnly
          name="simple-controlled"
          value={starRating}
          sx={{ marginBottom: 2 }}
        />
        {discount ? <Typography gutterBottom sx={{ color: '#F3816A', fontWeight: 'bold', fontFamily: 'Montserrat', }} variant="h4" component="div">
          {`-${discount * 100}%`}
        </Typography> : ''}
      </Box>
      <Box sx={{ position: 'relative', display: "flex", alignItems: 'center', justifyContent: 'space-between', height: 50 }}>
        <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h4" component="div">
          {hotelName}
        </Typography>
        <Box sx={{
          marginTop: discount ? 3 : 0
        }} >
          <Typography gutterBottom sx={{ lineHeight: 0, fontWeight: 'bold', fontFamily: 'Montserrat'}} variant="h5" component="div">
            {finalPrice % 1 === 0 ? `$${finalPrice}.00` : `$${finalPrice}0`}
          </Typography>
          {
            discount ? <Typography gutterBottom sx={{ fontWeight: 'bold', fontFamily: 'Montserrat', marginLeft:3 }} variant="body1" component="del">
              {originalRoomPrice % 1 === 0 ? `$${originalRoomPrice}.00` : `$${originalRoomPrice}0`}
            </Typography> : ''
          }
        </Box>
      </Box>
      <Box >
        <LocationIcon  color="#999"/>
        <Typography sx={{ marginLeft: 1}} component={'span'} variant="body1" color="text.primary">
          {cityName}, Palestine
        </Typography>
      </Box>
        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
          <WifiIcon />
          <KitchenIcon />
          <ScreenIcon />
        </Box>
    </CardContent>

    <CardActions sx={{ width: '100%', marginBlock: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Button variant="contained"  text="DETAILS" />
    </CardActions>
  </Card>
);


export default HotelCard

