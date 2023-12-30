import React from 'react';
import { Card, CardContent, Typography, CardMedia, CardActions, Button } from "@mui/material";
import { TrendingDestination } from '../../../models/trending-destination';
import LocationText from '../../common/text-icon/location.component';




const CityDetailsComponent: React.FC<TrendingDestination> = ({ cityName, countryName, thumbnailUrl, description }) => {
    return (
        <Card>
             <CardMedia
                component="img"
                height="140px"
                image={thumbnailUrl}
                alt="City Image"
            />
            <CardContent>
                <LocationText cityName={cityName} countryName={countryName} />
                <Typography variant="body2" padding={1}  component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant='outlined' fullWidth size="medium">VIEW CITY</Button>
            </CardActions>
        </Card>
    );
};

export default CityDetailsComponent;
