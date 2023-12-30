import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import {  StyledTextarea} from "./reviews/reviews.style"



const SpecialRequest: React.FC = () => {
    return (
        <Card sx={{ width: 400 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h5" component="div">
                    Special Request
                </Typography>
                <StyledTextarea aria-label="minimum height" minRows={3} placeholder="Add a special request" />
            </CardContent>
        </Card>
    );
};

export default SpecialRequest;
