import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import LocationIcon from '../../../assets/icons/location-icon.component';

interface LocationTextProps {
    cityName: string;
    countryName?: string;
}
const LocationText: React.FC<LocationTextProps> = ({ cityName, countryName = '' }) => {
    const theme = useTheme();

    return <Box sx={
        {
            display: 'flex',
            alignItems: 'center',
            gap: 1
        }
    }>
        {cityName && <LocationIcon height='15' color={theme.palette.secondary.light} />}
        <Typography variant="body2" >
            {cityName}
            {countryName && `, ${countryName}`}
        </Typography>
    </Box>
}

export default LocationText