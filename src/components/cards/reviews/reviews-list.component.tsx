import React from 'react'
import { Review } from '../../../models/review'
import { Grid } from '@mui/material'
import ReviewCard from './review-card.component'

type ReviewListProps = {
    reviews: Review[],
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
    return <Grid
        container
        spacing={2}
        gap={5}
        justifyContent="center"
    >
        {reviews?.map((review: Review) => {
            return (
                <ReviewCard
                    key={review.reviewId}
                    reviewId={review.reviewId}
                    customerName={review.customerName}
                    description={review.description}
                    rating={review.rating}
                />
            )
        })}
    </Grid>
}




    export default ReviewList;