import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import { useState } from 'react';
import { Box, Tooltip } from '@mui/material';


type AmenityChipProps = {
    amenity: string;
    description?: string;
    icon?: React.ReactNode;
}


const AmenityChip: React.FC<AmenityChipProps> = ({ amenity, description, icon }) => {
    const [isHovered, setHovered] = useState(false);

    return (
        <Box sx={{ zIndex: 200000220 }}>
            <Tooltip title={description} placement="top" >
                <Chip
                    icon={<FaceIcon /> || icon}
                    label={amenity}
                    variant={isHovered ? 'filled' : 'outlined'}
                    onMouseOver={() => setHovered(true)}
                    onMouseOut={() => setHovered(false)}
                    sx={{
                        cursor: 'pointer'

                    }}
                />
            </Tooltip>
        </Box>



    );
}
export default AmenityChip;