import { Box, Button, Rating,   Tooltip, Typography } from "@mui/material"
import TabIcon from "../../../assets/icons/tab-icon.component"
import {  TextSnippet } from "@mui/icons-material";

import { StyledContainer , StyledBoxDiv , StyledTextarea} from "./reviews.style"



const AddReview = () => {
    return <StyledContainer>
        <TabIcon />
        <StyledBoxDiv>
            <Typography variant="h6" component={'span'} >Your rating*</Typography>
            <Typography variant="body2" >
                1 star for poor experience, 5 stars for great experience
            </Typography>
        </StyledBoxDiv>
        <Rating size="large" />
        <StyledBoxDiv>


            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1

            }}>
                <Typography variant="h6" component={'span'} >Your review</Typography>
                <Tooltip placement="top" title="Assist fellow travelers in making well-informed choices. Kindly share your feedback exclusively if you have booked and stayed at our hotel. Focus on recounting your individual experience to provide valuable insights for others considering their stay.
" >
                    <TextSnippet />
                </Tooltip>
            </Box>



            <StyledTextarea aria-label="minimum height" minRows={3} placeholder="Add a comment review" />
            <Button variant="contained" sx={{
                backgroundColor: 'gold',
                color: '#000',
                '&:hover': {
                    backgroundColor: 'gold',
                },
                width: '60%',
                marginBlock: '1rem'
            }}>
                Post
            </Button>
        </StyledBoxDiv>
    </StyledContainer>
}

export default AddReview