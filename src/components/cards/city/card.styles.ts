import { Box, Card, Typography } from "@mui/material";
import styled from "@emotion/styled";


const StyledCard = styled(Card)`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 400px;
    height: 550px;
    border-radius: 20px;
    overflow: hidden;
`;

const StyledBox = styled(Box)`
    // Add any additional styles for the Box component here
`;

interface StyledTypographyProps {
    component?: React.ElementType;
  }
  
const StyledTypography = styled(Typography)<StyledTypographyProps>`
font-weight:bold;
`;


export { StyledCard, StyledBox, StyledTypography };