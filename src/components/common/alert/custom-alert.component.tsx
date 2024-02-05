
import { Close } from '@mui/icons-material';
import { Alert, Collapse, IconButton, Typography } from '@mui/material';
import React from 'react'

type CustomAlertProps = {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    title: string;
    description: string;
    color?: 'success' | 'info' | 'warning' | 'error' | undefined;
}
const CustomAlert: React.FC<CustomAlertProps> = ({ description, isOpen, setIsOpen, title,color }) => {
    return <Collapse
        in={isOpen}
        sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            //make it center
            margin: 'auto',
            width: '70%',
            transition: 'all 0.5s ease-in-out',
           

        }}
    >
        <Alert
            color={color}
            variant='outlined'
            action={
                <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        setIsOpen(false);
                    }}
                >
                    <Close />
                </IconButton>
            }
            sx={{ mb: 2 }}
        >
            <Typography variant='h6'>
                {title}
            </Typography>
            {description}
        </Alert>
    </Collapse>

}

export default CustomAlert