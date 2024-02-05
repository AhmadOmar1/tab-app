import React from 'react';
import { Container, Box, TextField, Button, Typography, CardContent, InputLabel, Select, MenuItem, Stack } from '@mui/material';
import { useFormik } from 'formik';
import { AddHotel, Hotel } from '../../../../models/hotel';
import { AddHotelSchema } from '../../../../schemas';
import { useGetCitiesQuery } from '../../../../redux/admin/city/city-api';
import { useUpdateHotelMutation } from '../../../../redux/admin/hotel/hotel-api';
import CustomAlert from '../../../../components/common/alert/custom-alert.component';

type UpdateHotelProps = {
    hotel: AddHotel;
}

const UpdateHotel: React.FC<UpdateHotelProps> = ({ hotel }) => {
    const [updateHotelMutation, { isLoading }] = useUpdateHotelMutation();
    const [isError, setIsError] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);

    const { data } = useGetCitiesQuery();

    const cities = data?.map((city) => ({ id: city.id, city: city.name }));


    const hotelTypes = [
        { id: 0, type: 'Default Hotel' },
        { id: 1, type: 'Luxury Hotel' },
        { id: 2, type: 'Budget Hotel' },
        { id: 3, type: 'Boutique Hotel' },
        { id: 4, type: 'Resort' }
    ];


    const formik = useFormik({
        validationSchema: AddHotelSchema,
        initialValues: {
            name: hotel.name,
            description: hotel.description,
            hotelType: hotel.hotelType,
            starRating: hotel.starRating,
            latitude: hotel.latitude,
            longitude: hotel.longitude,
            hotelId: hotel.id,
            cityId: 0,
        },
        onSubmit: async (values) => {
            try {
                const hotel: AddHotel = {
                    name: values.name,
                    description: values.description,
                    hotelType: values.hotelType,
                    starRating: values.starRating,
                    latitude: values.latitude,
                    longitude: values.longitude,
                    id: values.hotelId,
                };
                await updateHotelMutation({hotel: hotel}).unwrap();

                setIsSuccess(true);
                setIsError(false);
                formik.resetForm();

            } catch (error) {
                console.log(error);
                setIsError(true);
                setIsSuccess(false);
            }
        },
    });


    return (<>
        <CustomAlert
            description='Hotel Updated successfully'
            isOpen={isSuccess}
            setIsOpen={(value) => setIsSuccess(value)}
            title={'Success'}
            color='success'
        />
        <CustomAlert
            description='Something went wrong'
            isOpen={isError}
            setIsOpen={(value) => setIsError(value)}
            title='Error'
            color='error'
        />
        <Container maxWidth="sm">
            <CardContent >
                <Typography variant="h5" component="div">
                    Update Hotel
                </Typography>
                <Box component={'form'} onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="Hotel Name"
                        variant="outlined"
                        margin="normal"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        helperText={formik.errors.name}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                    />
                    <TextField
                        fullWidth
                        id="description"
                        name="description"
                        label="Hotel Description"
                        variant="outlined"
                        margin="normal"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        multiline
                        rows={3}
                        helperText={formik.errors.description}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                    />
                    <Stack direction={'row'} spacing={1}>

                        <TextField
                            fullWidth
                            type="number"
                            name='starRating'
                            id="outlined-basic"
                            label="Star rating"
                            variant="outlined"
                            value={formik.values.starRating}
                            onChange={formik.handleChange}
                            helperText={formik.errors.starRating}
                            error={formik.touched.starRating && Boolean(formik.errors.starRating)}
                        />
                    </Stack>
                    <Stack direction={'row'} spacing={1} marginTop={1}>
                        <TextField
                            fullWidth
                            type="number"
                            name='latitude'
                            id="outlined-basic"
                            label="latitude"
                            variant="outlined"
                            value={formik.values.latitude}
                            onChange={formik.handleChange}
                            helperText={formik.errors.latitude}
                            error={formik.touched.latitude && Boolean(formik.errors.latitude)}
                        />
                        <TextField
                            fullWidth
                            type="number"
                            name='longitude'
                            id="outlined-basic"
                            label="longitude"
                            variant="outlined"
                            value={formik.values.longitude}
                            onChange={formik.handleChange}
                            helperText={formik.errors.longitude}
                            error={formik.touched.longitude && Boolean(formik.errors.longitude)}
                        />
                    </Stack>
                    <Stack direction={'row'} justifyContent={'space-around'} marginTop={1} >
                        <Box>
                            <InputLabel id="cityId">City</InputLabel>
                            <Select
                                labelId="cityId"
                                id="cityId"
                                name='cityId'
                                value={formik.values.cityId}
                                onChange={formik.handleChange}
                                sx={{ m: 1, width: 195 }}
                                fullWidth
                            >
                                {cities?.map((city, index) => (
                                    <MenuItem key={index} value={city.id}>
                                        {city.city}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Box>
                        <Box>
                            <InputLabel id="hotelType">Hotel Type</InputLabel>
                            <Select
                                labelId="hotelType"
                                id="hotelType"
                                name='hotelType'
                                value={formik.values.hotelType}
                                onChange={formik.handleChange}
                                sx={{ m: 1, width: 195 }}
                                fullWidth
                            >
                                {
                                    hotelTypes.map((hotelType, index) => (
                                        <MenuItem key={index} value={hotelType.id}>
                                            {hotelType.type}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </Box>
                    </Stack>



                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={
                            !formik.dirty
                        }
                    >
                        {isLoading ? 'Loading...' : 'Update'}
                    </Button>
                </Box>
            </CardContent>
        </Container>
    </>
    );
};


export default UpdateHotel;
