import React from 'react';
import { Container, Box, TextField, Button, Typography, CardContent } from '@mui/material';
import { useFormik } from 'formik';
import { City } from '../../../../models/trending-destination';
import { useUpdateCityMutation } from '../../../../redux/admin/city/city-api';
import CustomAlert from '../../../../components/common/alert/custom-alert.component';

type UpdateCityProps = {
    selectedCity: City;
}

const UpdateCity: React.FC<UpdateCityProps> = ({ selectedCity }) => {

    const [updateCityMutation, { isLoading }] = useUpdateCityMutation();
    const [isError, setIsError] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);

    const formik = useFormik({
        initialValues: {
            name: selectedCity.name,
            description: selectedCity.description,
        },
        onSubmit: async (values) => {
            try {
                const city: City = {
                    id: selectedCity.id,
                    name: values.name,
                    description: values.description,
                };
                await updateCityMutation({city: city , cityId: selectedCity.id as number });
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


    return (
        <>
            <CustomAlert
                description='City added successfully'
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
                        Update City
                    </Typography>
                    <Box component={'form'} onSubmit={formik.handleSubmit}>
                        <TextField
                            fullWidth
                            id="name"
                            name="name"
                            label="City Name"
                            variant="outlined"
                            margin="normal"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            fullWidth
                            id="description"
                            name="description"
                            label="City Description"
                            variant="outlined"
                            margin="normal"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            multiline
                            minRows={3}
                            maxRows={10}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={
                                formik.values.name === selectedCity.name &&
                                formik.values.description === selectedCity.description
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


export default UpdateCity;
