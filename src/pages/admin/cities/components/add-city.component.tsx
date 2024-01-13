import React from 'react';
import { Container, Box, TextField, Button, Typography, CardContent,  } from '@mui/material';
import { useFormik } from 'formik';
import { useAddCityMutation } from '../../../../redux/admin/city/city-api';
import { City } from '../../../../models/trending-destination';
import CustomAlert from '../../../../components/common/alert/custom-alert.component';
import { AddCitySchema } from '../../../../schemas';



const AddCity: React.FC = () => {

    const [addCityMutation, { isLoading }] = useAddCityMutation();
    const [isError, setIsError] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);


    const formik = useFormik({
        validationSchema:AddCitySchema,
        initialValues: {
            name: '',
            description: '',
        },
        onSubmit: async (values) => {
            try {
                const city: City = {
                    name: values.name,
                    description: values.description,
                };
                await addCityMutation({city:city}).unwrap();

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


    return <>
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
                    Add City
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
                        helperText={formik.errors.name}
                        error={formik.touched.name && Boolean(formik.errors.name)}
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
                        rows={3}
                        helperText={formik.errors.description}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={
                          !formik.dirty 
                        }
                    >
                        {isLoading ? 'Loading...' : 'Add'}
                    </Button>
                </Box>
            </CardContent>
        </Container>
    </>
};


export default AddCity;
