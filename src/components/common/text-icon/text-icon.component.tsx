import React from 'react';
import { Typography, Box } from '@mui/material';

interface TextIconProps {
    text: string;
    icon: React.ReactNode;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline' ;
}

const TextIcon: React.FC<TextIconProps> = ({ text, icon , variant='h6'}) => {
    return (
        <Box display="flex" alignItems="center" sx={{ gap: 1 }} >
            {icon}
            <Typography variant={variant}>{text}</Typography>
        </Box>
    );
};

export default TextIcon;
