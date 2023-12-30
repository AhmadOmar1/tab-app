import React from 'react'
import { Review } from '../../../models/review'
import { Avatar, Box,  CardContent,  Typography} from '@mui/material'
import { StyledPaper, QuoteTypography , StyledBox , StyledRating , StyledCard } from './reviews.style'
const ReviewCard: React.FC<Review> = ({ customerName, description, rating, reviewId }) => {


    

    return <StyledPaper
        elevation={10}>
        <StyledCard key={reviewId} elevation={10} >
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 3
            }}>
                <Box display={'flex'} flexDirection={'column'} alignItems='center'>
                    <Typography component='div' variant='h6'>
                        {customerName}
                    </Typography>
                    <StyledRating readOnly
                        value={rating}
                        size='small'
                    />
                </Box>
                <QuoteTypography variant='body2'>
                    {description}
                </QuoteTypography>

                <StyledBox>
                    <Avatar
                        alt="Remy Sharp"
                        sx={{
                            width: 70,
                            height: 70,
                            border: '2px solid gold'
                        }}
                    />
                </StyledBox>
            </CardContent>
        </StyledCard>

    </StyledPaper>
}

export default ReviewCard