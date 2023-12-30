import React from 'react';
import { Card, CardContent, CardMedia,  Rating, Typography } from '@mui/material';
import { RecentlyVisitedHotel } from '../../../models/recently-visted';
import { Box, useTheme } from '@mui/system';
import DateIcon from '../../../assets/icons/date-icon.component';
import LocationText from '../../common/text-icon/location.component';

const RecentlyVisited: React.FC<RecentlyVisitedHotel> = ({ cityName, hotelName, starRating, thumbnailUrl, visitDate }) => {
    const theme = useTheme();
    return (
        <Box width={350}>
            <Card elevation={1}>
                <CardMedia
                    component="img"
                    height="140"
                    image={thumbnailUrl}
                    alt={hotelName}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {hotelName}
                    </Typography>
                    <Rating name="read-only" value={starRating} readOnly />

                    <LocationText  cityName={cityName} />
                   
                    <Box sx={
                        {
                            mt:1,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1
                        }
                    }>
                        <DateIcon height='15' width='14' color={theme.palette.secondary.light}/>
                        <Typography variant="body2" >
                            {visitDate}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default RecentlyVisited;
