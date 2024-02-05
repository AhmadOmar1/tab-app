import React from 'react';
import { Card, CardContent, Typography, CardMedia, CardActions, Button } from "@mui/material";
import { TrendingDestination } from '../../../models/trending-destination';
import LocationText from '../../common/text-icon/location.component';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs'; 
import { useNavigate } from 'react-router-dom';
import { updateFormValues } from '../../../redux/user/hotel/hotels-slice';

const CityDetailsComponent: React.FC<TrendingDestination> = ({ cityName, countryName, thumbnailUrl, description }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function handleCityDetailsClick(): void {
        try {
            const queryParams = {
                location: cityName,
                checkin: dayjs(),
                checkout: dayjs().add(1, 'day'),
                adults: 2,
                children: 0,
                rooms: 1,
            }
            dispatch(updateFormValues(queryParams))
            navigate('/search?' + new URLSearchParams(queryParams as any).toString());
        }
        catch (error) {
            console.log(error)
        }
    }

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
                <Typography variant="body2" padding={1} component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant='contained'
                    fullWidth
                    size="medium"
                    onClick={handleCityDetailsClick}
                >VIEW CITY</Button>
            </CardActions>
        </Card>
    );
};

export default CityDetailsComponent;
