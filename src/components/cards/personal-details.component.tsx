import React from 'react';
import { Box, Card, CardContent, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { PersonalDetailsSchema } from './../../schemas/index';

interface PersonalDetailsProps {
    firstName?: string;
    lastName?: string;
    address?: string;
}

const PersonalDetails: React.FC<{ onSubmit: (values: PersonalDetailsProps) => void }> = ({ onSubmit }) => {
    const formik = useFormik({
        validationSchema: PersonalDetailsSchema,
        initialValues: {
            firstName: '',
            lastName: '',
            address: '',
        },
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
                </form>
            </CardContent>
        </Card>
    );
};

export default PersonalDetails;
