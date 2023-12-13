import React from 'react';
import {  Card, CardContent, TextField, Typography } from '@mui/material';

interface PersonalDetailsProps {
    firstName?: string;
    lastName?: string;
    address?: string;
    width: number | string;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({ }) => {
    return (
        <Card sx={{ width: 400 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h5" component="div">
                    Personal Details
                </Typography>
                <TextField placeholder='First Name' fullWidth />
                <TextField placeholder='Second Name' fullWidth />
                <TextField placeholder='Address' fullWidth />
            </CardContent>
        </Card>
    );
};

export default PersonalDetails;
