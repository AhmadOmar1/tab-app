import { createTheme, experimental_extendTheme as extendTheme } from '@mui/material';
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      contrastText: "#ffff",
      light: "#DA0A08",
      main: "#e76f51",
      dark: "#000",
    },
    secondary: {
      light: "#CFACA3",
      main: "#C3978C",
      dark: "#A17C73",
    },
    success: {
      light: "#268C3E",
      main: "#06711F",
      dark: "#055A19",
    },
    error: {
      light: "#E13B39",
      main: "#DA0A08",
      dark: "#AE0806",
    },
    warning: {
      light: "#E9B449",
      main: "#E4A11C",
      dark: "#B68116",
    },
    background: {
      paper: "#f2f2f2",
    },
    text: {
      primary: "#111111",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
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
      contrastText: "#ffff",
      light: "#ffff",
      main: "#e76f51",
      dark: "#9e2a2b",
    },
    secondary: {
      light: "#CFACA3",
      main: "#C3978C",
      dark: "#A17C73",
    },
    success: {
      light: "#268C3E",
      main: "#06711F",
      dark: "#055A19",
    },
    error: {
      light: "#E13B39",
      main: "#DA0A08",
      dark: "#AE0806",
    },
    warning: {
      light: "#E9B449",
      main: "#E4A11C",
      dark: "#B68116",
    },
    background: {
      paper: "#222",
    },
    text: {
      primary: "#fff",
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily:  'Montserrat',
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

