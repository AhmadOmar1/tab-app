import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          contrastText: '#ffff',
          light: '#000',
          main: '#000',
          dark: '#000',
        },
        secondary: {
          light: '#CFACA3',
          main: '#C3978C',
          dark: '#A17C73',
        },
        success: {
          light: '#268C3E',
          main: '#06711F',
          dark: '#055A19',
        },
        error: {
          light: '#E13B39',
          main: '#DA0A08',
          dark: '#AE0806',
        },
        warning: {
          light: '#E9B449',
          main: '#E4A11C',
          dark: '#B68116',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Poppins',
    fontWeightBold: 700,
    fontWeightLight: 300,
    fontWeightRegular: 400,
  },
});


