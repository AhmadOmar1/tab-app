import { Formik, Field } from 'formik'
import { Box, Button, Container, TextField } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { login, logout } from '../../redux/app-slice'
import { Navigate, useNavigate } from 'react-router-dom'
import { FormEvent } from 'react'

const Login = () => {

    const dispatch = useDispatch();
    const loginValue = useSelector((state: RootState) => state.isLoggedIn);
    const navigate = useNavigate();

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            dispatch(login());
            if (loginValue.isLoggedIn) {
                console.log('Login sucssfully' + loginValue.isLoggedIn);
                <Navigate to="/home" />

                navigate('/home');
            } else {
                console.error("Login failed.");
            }

        } catch (error) {
            // Handle login error
            console.error("Login failed:", error);
        }
    };
    return (
        <>

            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    <form onSubmit={handleLogin}>
                        <Box sx={{ width: 500 }}>
                            <Field
                                component={TextField}
                                name='Username'
                                type='text'
                                label='Username*'
                                variant='outlined'
                                fullWidth
                                margin='normal'
                            />
                            <Field
                                component={TextField}
                                name='password'
                                type='password'
                                label='Password*'
                                variant='outlined'
                                fullWidth
                                margin='normal'
                            />
                            <Button type='submit' variant='outlined' color='primary' fullWidth>SIGN IN</Button>
                        </Box>

                    </form>
                </Formik>

            </Container></>


    )
}

export default Login