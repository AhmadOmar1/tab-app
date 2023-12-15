import React from 'react';
import { Card, CardContent, Typography, TextField } from '@mui/material';

const PaymentCard: React.FC = () => {
    return (
        <Card sx={{ width: 400 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h5" component="div">
                    Payment Details
                </Typography>
                <Typography variant="body2" component="div">
                    Card Number
                </Typography>
                <TextField placeholder='0000 0000 0000 0000' fullWidth />
                <Typography variant="body2" component="div">
                    Cardholder Name
                </Typography>
                <TextField placeholder="ex: Ahmad Omar" fullWidth />
                <Typography variant="body2" component="div">
                    Expiration
                </Typography>
                <TextField placeholder="MM / YYYY" fullWidth />
                <Typography variant="body2" component="div">
                    CVV
                </Typography>
                <TextField placeholder="3-4 digits" fullWidth />
            </CardContent>
        </Card>
    );
};

export default PaymentCard;
