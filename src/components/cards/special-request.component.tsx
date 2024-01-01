import React from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { StyledTextarea } from "./reviews/reviews.style"
import { useFormik } from 'formik';



const SpecialRequest: React.FC<{
    specialRequest: string,
    onSubmit: (values: { specialRequest: string }) => void,
    onBack: () => void

}> = ({ specialRequest, onSubmit, onBack }) => {

    const formik = useFormik({
        initialValues: {
            specialRequest
        },
        onSubmit: (values) => {
            onSubmit(values);
        },

    });
    return (
        <Card sx={{ width: 400 }}>
            <CardContent>

                <form onSubmit={formik.handleSubmit}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>


                        <Typography variant="h5" component="div">
                            Special Request
                        </Typography>
                        <StyledTextarea
                            aria-label="minimum height"
                            minRows={3}
                            placeholder="Add a special request"
                            value={formik.values.specialRequest}
                            onChange={formik.handleChange}
                            name="specialRequest"
                        />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <div>
                            <Button
                                variant="contained"
                                type="submit"
                                sx={{ mt: 2, mr: 1 }}
                            >
                                {'Continue'}
                            </Button>
                            <Button
                                onClick={onBack}
                                sx={{ mt: 2, mr: 1 }}
                            >
                                Back
                            </Button>
                        </div>
                    </Box>
                </form>
            </CardContent>
        </Card>
    );
};

export default SpecialRequest;
