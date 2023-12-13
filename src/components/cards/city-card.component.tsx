import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
 interface CityCardProps {
    name: string;
    image?: string;
    description?: string;
 }

const CityCard: React.FC<CityCardProps> = ({name= 'city' , image = '/hotelImg.jpg'}) => {

    return (
        <Card sx={{ width: 200 }}>
            <CardMedia
                component="img"
                height="140px"
                image={image}
                alt="City Image"
            />
            <CardContent>
                <Typography variant="h5" component="div" textAlign={'center'}>
                    {name}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CityCard;
