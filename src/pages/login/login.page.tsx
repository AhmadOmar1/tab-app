import { Formik, Field, ErrorMessage, FormikHelpers } from 'formik';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LockIcon from '../../assets/icons/lock-icon.component';
import { InputAdornment, Paper, useTheme, Button, Fade } from '@mui/material';
import UserIcon from '../../assets/icons/user-icon.component';
import { login as loginReducer } from '../../redux/user/auth/auth-slice';
import { loginValidationSchema } from '../../schemas';
import { useNavigate } from 'react-router-dom';
import EyeIcon from '../../assets/icons/eye-icon.component';
import { useEffect,  useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../redux/user/auth/authApi';
export default function Login() {

    useEffect(() => {
        document.title = "Login Page";
    }, []);

    const navigate = useNavigate();
    const initialValues = { username: '', password: '' };
    const [loginMutation, { isLoading }] = useLoginMutation();
    const dispatch = useDispatch();
    const [displayPassword, setDisplayPassword] = useState(false);
    const theme = useTheme();


    const handleLogin = async (
        values: { username: string; password: string; },
        formikProps: FormikHelpers<typeof initialValues>
    ) => {
        try {
            const response = await loginMutation(values).unwrap();
            const [, tokenPayloadEncoded] = response.authentication.split('.');
            const tokenPayload = JSON.parse(atob(tokenPayloadEncoded));    
            dispatch(loginReducer({ user:tokenPayload, token: response.authentication }));
            if (response.userType === 'Admin') {
                navigate('/admin/cities');
            } else if (response.userType === 'User') {
                navigate('/home');
            }
        } catch (error: any) {
            console.error('Login failed:', error);
            if (error?.response?.status === 400) {
                formikProps.setErrors({ password: 'Invalid username or password' });
            } else if (error?.response?.status === 401) {
                formikProps.setErrors({ password: 'Unauthorized' });
            } else {
                formikProps.setErrors({ password: 'Something went wrong' });
            }
        }
    }

    function handlePasswordDispaly(): void {
        setDisplayPassword(!displayPassword);
    }

    return <Fade   in={true} timeout={1000}>
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
                                   {
                                        formikProps.isSubmitting  || isLoading
                                         ? 'Loading...' : 'Sign In'
                                   }
                                </Button>
                            </form>
                        )}
                    </Formik>
                </Box>
            </Container>
        </Paper>
        </Fade>
    ;

}
