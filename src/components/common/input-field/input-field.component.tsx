import React from 'react';
import { Container, TextField, TextFieldProps } from '@mui/material';
import style from './input-field.module.css'

type InputFieldProps = {
    icon?: React.ReactNode;
    width?: number;
} & TextFieldProps

const InputField: React.FC<InputFieldProps> = (props, { width = 400, }) => {
    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <TextField
                className={style.inputField}
                sx={{ width: { width } }}
                InputProps={{
                    startAdornment: <div style={{ display: 'flex', marginRight: '10px' }}>{props.icon}</div>,
                }}
                {...props}
            />
        </Container>
    );
};

export default InputField;
