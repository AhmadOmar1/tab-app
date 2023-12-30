import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { TrendingDestination } from '../../../models/trending-destination';
import LocationText from '../../common/text-icon/location.component';


const CityCard: React.FC<TrendingDestination & { handleClick: (city: TrendingDestination) => void; }> = ({ cityName, countryName, thumbnailUrl, handleClick }) => {

    return (
        <Box width={300}>
            <Card
                elevation={10}
                sx={{ cursor: 'pointer' }}
                onClick={handleClick}
            >
                <CardMedia
                    component="img"
                    height="140px"
                    image={thumbnailUrl}
                    alt="City Image"
                />
                <CardContent>
                    <LocationText cityName={cityName} countryName={countryName} />
                </CardContent>
            </Card>
        </Box>
    );
};

export default CityCard;
