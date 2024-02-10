import { Box, Button, CardActions, CardContent, CardMedia, Rating } from "@mui/material";
import { StyledCard, StyledTypography } from "../city/card.styles";
import { Hotel } from "../../../models/hotel";
import React from "react";
import WifiIcon from "../../../assets/icons/wifi-icon.component";
import KitchenIcon from "../../../assets/icons/kitchen-icon.component";
import ScreenIcon from "../../../assets/icons/screen-icon.component";
import LocationText from "../../common/text-icon/location.component";

interface HotelCardProps extends Hotel {
  onCardClick: () => void; 
}
const HotelCard: React.FC<HotelCardProps> = ({ 
  hotelId,
  hotelName,
  roomPhotoUrl,
  countryName,
  finalPrice,
  starRating,
  discount,
  cityName ,
  onCardClick
}) => {
 
  const previousPrice = finalPrice*(1-discount);
  return (
    <StyledCard key={hotelId}>
      <CardMedia
        height='230px'
        component="img"
        alt="Hotel Image"
        image={roomPhotoUrl}
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
          {discount? <StyledTypography gutterBottom color='#F3816A' variant="h4" component="div">
            {`-${discount * 100}%`}
          </StyledTypography> : ''}
        </Box>
        <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'space-between', height: 50 }}>
          <StyledTypography maxWidth={200} gutterBottom variant="h6" fontWeight={'bold'} lineHeight={1}>
            {hotelName}
          </StyledTypography>
          <Box sx={{
            marginTop: discount ? 2 : 0
          }} >
            <StyledTypography gutterBottom lineHeight={0} variant="h6">
              {finalPrice % 1 === 0 ? `$${finalPrice}.00` : `$${finalPrice}0`}
            </StyledTypography>
            {
              discount && previousPrice ? <StyledTypography gutterBottom ml={2} variant="body2" component="del">
                {previousPrice % 1 === 0 ? `$${previousPrice}.00` : `$${previousPrice}0`}
              </StyledTypography> : ''
            }
          </Box>
        </Box>
        <Box >
          <LocationText cityName={cityName} countryName={countryName} />
        </Box>
        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
          <WifiIcon />
          <KitchenIcon />
          <ScreenIcon />
        </Box>
      </CardContent>

      <CardActions sx={{ width: '100%', marginBlock: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button
          sx={{
            height: '45px',
            width: '90%',
          }}
          fullWidth
          variant="contained"
          onClick={onCardClick} 
        >
          details
        </Button>
      </CardActions>

    </StyledCard>
  );
};

export default HotelCard;
