import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#f9db79',
        },
        secondary: {
            main: '#4196e0',
        },
        text: {
            primary: '#707070',
            secondary: '#9B9B9B',
        },
        grey: {
            50: '#FAFAFA',
            100: '#F0F0F0',
            200: '#D7D9DD',
            300: '#C4C4C4',
            400: '#9B9B9B',
        },
    },
    typography: {
        fontFamily: 'Poppins',
    },
    shape: {
        borderRadius: '3px',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
                },
            },
        },
    },
});

export default theme;
