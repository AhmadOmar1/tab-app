import { Formik, Field, ErrorMessage, FormikHelpers } from 'formik';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LockIcon from '../../assets/icons/lock-icon.component';
import { InputAdornment, Paper, useTheme, Button } from '@mui/material';
import UserIcon from '../../assets/icons/user-icon.component';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth-slice';
import { loginValidationSchema } from '../../schemas';
import { useNavigate } from 'react-router-dom';
import EyeIcon from '../../assets/icons/eye-icon.component';
import { useEffect, useState } from 'react';
import * as authService from '../../services/auth.service';

export default function Login() {

    useEffect(() => {
        document.title = "Login Page"; 
    }, []);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialValues = { username: '', password: '' };
    const [displayPassword, setDisplayPassword] = useState(false);
    const theme = useTheme();

    const handleLogin = async (
        values: { username: string; password: string; },
        formikProps: FormikHelpers<typeof initialValues>
    ) => {
        try {
            const response = await authService.login(values);
            dispatch(login({ user: response.user, token: response.token }));
            if (response.userType === 'Admin') {
                navigate('/admin');
            } else if (response.userType === 'User') {
                navigate('/home');
            }
        } catch (error) {
            console.error('Login failed:', error);
            formikProps.setErrors({ password: 'Invalid username or password' });
        } finally {
        }
    };

    function handlePasswordDispaly(): void {
        setDisplayPassword(!displayPassword);
    }


    return (
        <Paper elevation={0} sx={{ height: '100vh', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Container component="main" maxWidth="sm" sx={{ width: '100vw' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box>
                        <Typography color="primary.main" component="span" variant="h5" sx={{ fontWeight: 'bold' }}>
                            SIGN IN{' '}
                        </Typography>
                        <Typography component="span" variant="h5" color="primary.light" sx={{ fontWeight: 'bold' }}>
                            NOW!
                        </Typography>
                    </Box>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={loginValidationSchema}
                        onSubmit={handleLogin}
                    >
                        {(formikProps) => (
                            <form onSubmit={formikProps.handleSubmit} noValidate>
                                <Field
                                    as={TextField}
                                    sx={{ marginBlock: 1 }}
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    fullWidth
                                    autoFocus
                                    autoComplete="username"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <UserIcon color="#999" />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <ErrorMessage name="username" component="div" >
                                    {msg => <div style={{ color: theme.palette.error.dark }}>{msg}</div>}
                                </ErrorMessage>
                                <Field
                                    as={TextField}
                                    sx={{ marginBlock: 1 }}
                                    type={displayPassword ? "text" : "password"}
                                    placeholder="Password"
                                    name="password"
                                    fullWidth
                                    autoComplete="current-password"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockIcon color="#999" />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end" onClick={handlePasswordDispaly} sx={{ cursor: 'pointer' }} >
                                                <EyeIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                                <ErrorMessage name="password" component="div" >
                                    {msg => <div style={{ color: theme.palette.error.dark }}>{msg}</div>}
                                </ErrorMessage>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="outlined"
                                    sx={{
                                        mt: 3,
                                        fontWeight: 'bold',
                                        height: '40px',
                                        fontSize: '1.1rem'
                                    }}
                                >
                                    SIGN IN
                                </Button>

                            </form>
                        )}
                    </Formik>
                </Box>
            </Container>
        </Paper>
    );

}
