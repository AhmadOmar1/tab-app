import styled from "@emotion/styled";
import { Box, Paper, Typography, Rating, Theme, Card,Container } from "@mui/material";
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';

interface StyledProps {
    theme?: Theme;
}


const StyledContainer = styled(Container)<StyledProps>(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.main}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    gap: '2.5rem',
    maxWidth: '600px !important',
    backgroundColor: theme.palette.primary.contrastText,

}))

const StyledBoxDiv = styled(Box)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const StyledTextarea = styled(BaseTextareaAutosize)<StyledProps>(({ theme }) => `
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
);


const StyledBox = styled(Box) <StyledProps>`   
    width: 85px;
    height: 85px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${(props) => (props.theme.palette.primary.main)};
   `

const StyledPaper = styled(Paper) <StyledProps>` 
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 1;
    align-items: center;
    justify-content: flex-end;
    padding: 16px;
    height: 300px;
    border-radius: 20px;
    background-color: ${(props) => (props.theme.palette.primary.main)};

   `

const QuoteTypography = styled(Typography)`
        quotes: "❝" "❞" ;
        font-style: italic;
        position: relative;
        width: 240px;

        &::before ,
        &::after {
            line-height:0;
            font-size: 1.7rem;
        }
        &::before {
            content: open-quote;
            position: absolute;
            top: -10px;
            left:0
        }

        &::after {
            content: close-quote;
            position: absolute;
            bottom: -20px;
            right:0

        }
    `;

const StyledRating = styled(Rating)<StyledProps>(({ theme }) => ({
    '.MuiRating-iconFilled, .MuiRating-iconHover': {
        filter: `drop-shadow(2px 2px 2px ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'})`,
    },
}));


const StyledCard = styled(Card)`
    width: 270px;
    padding-top: 2rem;
    border-radius: 4px;
    position: relative;
    overflow: visible;
    height:230px
      `


export { StyledBox, StyledPaper, QuoteTypography, StyledRating, StyledCard  , StyledBoxDiv , StyledContainer , StyledTextarea }