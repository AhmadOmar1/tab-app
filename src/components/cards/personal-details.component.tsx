import React from 'react';
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { PersonalDetailsSchema } from './../../schemas/index';
import { PersonalDetailsProps } from '../../models/personal-details';


const PersonalDetails: React.FC<{
    onSubmit: (values: PersonalDetailsProps) => void,
    values: PersonalDetailsProps
}> = ({ onSubmit , values }) => {
    const formik = useFormik({
        validationSchema: PersonalDetailsSchema,
        initialValues: values,
        onSubmit: (values) => {
            onSubmit(values);
        },

    });
    return (
        <Card sx={{ width: 400 }}>
            <CardContent >
                <form onSubmit={formik.handleSubmit}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Typography variant="h5" component="div">
                            Personal Details
                        </Typography>
                        <TextField
                            placeholder='First Name'
                            fullWidth
                            name="firstName"
                            inputProps={{ maxLength: 30 }}
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                        <TextField
                            placeholder='Second Name'
                            fullWidth
                            name="lastName"
                            value={formik.values.lastName}
                            inputProps={{ maxLength: 30 }}
                            onChange={formik.handleChange}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                        />
                        <TextField
                            placeholder='Address'
                            fullWidth
                            name="address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            error={formik.touched.address && Boolean(formik.errors.address)}
                            helperText={formik.touched.address && formik.errors.address}
                        /></Box>

                    <Box sx={{ mb: 2 }}>
                        <div>
                            <Button
                                variant="contained"
                                type="submit"
                                sx={{ mt: 2, mr: 1 }}
                                disabled={!formik.isValid}
                            >
                                {'Continue'}
                            </Button>
                     
                        </div>
                    </Box>
                </form>
            </CardContent>
        </Card>
    );
};

export default PersonalDetails;
