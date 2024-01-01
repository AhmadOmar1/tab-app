import React from 'react';
import { Card, CardContent, Typography, TextField, Box, Button } from '@mui/material';
import { PaymentDetailsProps } from '../../models/payment-details';
import { useFormik } from 'formik';
import { PaymentlDetailsSchema } from '../../schemas';

const PaymentCard: React.FC<{
    onSubmit: (values: PaymentDetailsProps) => void,
    handleBackStep: () => void,
    values: PaymentDetailsProps
}> = ({ onSubmit, handleBackStep, values }) => {
    const formik = useFormik({
        validationSchema: PaymentlDetailsSchema,
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
                            Payment Details
                        </Typography>
                        <Typography variant="body2" component="div">
                            Card Number
                        </Typography>
                        <TextField
                            placeholder='0000 0000 0000 0000'
                            fullWidth
                            name="cardNumber"
                            value={formik.values.cardNumber}
                            onChange={formik.handleChange}
                            error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
                            helperText={formik.touched.cardNumber && formik.errors.cardNumber}
                        />
                        <Typography variant="body2" component="div">
                            Cardholder Name
                        </Typography>
                        <TextField
                            placeholder="ex: Ahmad Omar"
                            fullWidth
                            name="cardHolderName"
                            value={formik.values.cardHolderName}
                            onChange={formik.handleChange}
                            error={formik.touched.cardHolderName && Boolean(formik.errors.cardHolderName)}
                            helperText={formik.touched.cardHolderName && formik.errors.cardHolderName}

                        />
                        <Typography variant="body2" component="div">
                            Expiration
                        </Typography>
                        <TextField
                            placeholder="MM / YYYY"
                            fullWidth
                            name="expiration"
                            value={formik.values.expiration}
                            onChange={formik.handleChange}
                            error={formik.touched.expiration && Boolean(formik.errors.expiration)}
                            helperText={formik.touched.expiration && formik.errors.expiration}
                        />
                        <Typography variant="body2" component="div">
                            CVV
                        </Typography>
                        <TextField
                            placeholder="3-4 digits"
                            fullWidth
                            name="cvv"
                            value={formik.values.cvv}
                            onChange={formik.handleChange}
                            error={formik.touched.cvv && Boolean(formik.errors.cvv)}
                            helperText={formik.touched.cvv && formik.errors.cvv}

                        />
                    </Box>

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
                            <Button
                                onClick={handleBackStep}
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

export default PaymentCard;
