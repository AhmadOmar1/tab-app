import React from 'react';
import { Typography, Box, Icon } from '@mui/material';

interface TextIconProps {
    text: string;
    icon: React.ReactNode;
}

const TextIcon: React.FC<TextIconProps> = ({ text, icon }) => {
    return (
        <Box display="flex" alignItems="center"  sx={{gap:1}} >
            {icon}
            <Typography variant="body2">{text}</Typography>
        </Box>
    );
};

export default TextIcon;
