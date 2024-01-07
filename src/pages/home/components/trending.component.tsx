import  { useEffect, useState } from 'react';
import {  Grid } from '@mui/material';
import { TrendingDestination as CityProps, } from '../../../models/trending-destination';
import CustomPopup from '../../../components/popups/popup.component';
import CityCard from '../../../components/cards/city/city-card.component';
import CityDetailsComponent from '../../../components/cards/city/city-details.component';
import { useGetTrendingDestinationQuery } from '../../../redux/user/hotel/hotelsApi';
import Loading from '../../../components/common/loading/loading.component';


const TrendingDestination = () => {

    const [dialogState, setDialogState] = useState(false);
    const [selectedCity, setSelectedCity] = useState<CityProps | null>(null);
    

    const { data, isError, isLoading } = useGetTrendingDestinationQuery();

    useEffect(() => {
        if (data) {
            console.log('Trending Destination:', data);
        }
        if (isError) {
            console.error('Error fetching trending destination:', isError);
        }
    }, [data, isError])

    if (isLoading) {
        return <Loading />
    }

    const handleDialogOpen = (city: CityProps) => {
        setSelectedCity(city);
        setDialogState(true);
    };
    const handleDialogClose = () => {
        setDialogState(false);
    }

    return (
        <Grid
            container
            spacing={2}
            gap={5}
            justifyContent="center"
        >
            {data?.map((city: CityProps) => {
                return (
                    <CityCard
                        key={city.cityName}
                        cityName={city.cityName}
                        countryName={city.countryName}
                        thumbnailUrl={city.thumbnailUrl}
                        handleClick={() => handleDialogOpen(city)}
                    />
                )
            })}
            {selectedCity && (
                <CustomPopup
                    content={
                        <CityDetailsComponent
                            key={selectedCity.cityName}
                            cityName={selectedCity.cityName}
                            countryName={selectedCity.countryName}
                            thumbnailUrl={selectedCity.thumbnailUrl}
                            description={selectedCity.description}
                        />
                    }
                    dialogState={dialogState}
                    handleClose={handleDialogClose}
                />
            )}
        </Grid>

    );
};

export default TrendingDestination;
