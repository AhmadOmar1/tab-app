import { createTheme, experimental_extendTheme as extendTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      contrastText: "#fff",
      light: "#222",
      main: '#e76f51',
      dark: "#AE4806",
    },
    secondary: {
      main: '#222',
      light: '#333',
      dark: "#e76f51",
    },
    success: {
      light: "#268C3E",
      main: "#06711F",
      dark: "#055A19",
    },
    error: {
      light: "#A17C73",
      main: "#AE0806",
      dark: "#AE0806",
    },
    warning: {
      light: "#E9B449",
      main: "#E4A11C",
      dark: "#B68116",
    },
    background: {
      paper: "#f2f2f3",
    },
    text: {
      primary: "#111111",
    },

  },
 
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: 700, 
        },
        h2: {
          fontWeight: 700,
        },
        h3: {
          fontWeight: 700,
        },
        h4: {
          fontWeight: 700,
        },
        h5: {
          fontWeight: 700,
        },
        root: {
          fontFamily: 'Montserrat',
          fontWeightBold: 700,
          fontWeightLight: 300,
          fontWeightRegu1ar: 400,
        },
      },

    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 700,
          textDecoration:'uppercase',

        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      contrastText: "#444",
      light: "#fff",
      main: "#eee",
      dark: "#e76f51",
    },
    secondary: {
      light: "#fff",
      main: "#AE4806",
      dark: "#e76f51",
    },
    success: {
      light: "#268C3E",
      main: "#06711F",
      dark: "#055A19",
    },
    error: {
      light: "#A17C73",
      main: "#e76f51",
      dark: "#AE0806",
    },
    warning: {
      light: "#E9B449",
      main: "#E4A11C",
      dark: "#B68116",
    },
  
    background: {
      paper: "#333",
    },
    text: {
      primary: "#fff",
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: 700, 
        },
        h2: {
          fontWeight: 700,
        },
        h3: {
          fontWeight: 700,
        },
        h4: {
          fontWeight: 700,
        },
        h5: {
          fontWeight: 700,
        },
        root: {
          fontFamily: 'Montserrat',
          fontWeightBold: 700,
          fontWeightLight: 300,
          fontWeightRegu1ar: 400,
        },
      },

    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 700,
          
          
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },

});

