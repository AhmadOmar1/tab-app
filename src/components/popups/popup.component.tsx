import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, IconButton , useTheme as useColor } from '@mui/material';
import { Close } from '@mui/icons-material';

type DialogProps = {
    dialogState: boolean,
    handleClose: () => void,
    content: React.ReactNode;
}

const CustomPopup: React.FC<DialogProps> = ({ dialogState, handleClose, content }) => {
    const theme = useTheme();
    const colorTheme = useColor();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <Dialog
            fullScreen={fullScreen}
            open={dialogState}
            aria-labelledby="responsive-dialog-title"
            onClose={handleClose} 
            sx={{
                zIndex: 10000
            }}  
                 >
            <Box 
              sx={{
                 backgroundColor: colorTheme.palette.primary.contrastText,
            }}>
                <DialogActions>
                    <IconButton onClick={handleClose} sx={{backgroundColor: theme.palette.primary.main  }}>
                        <Close sx={{
                            color: colorTheme.palette.primary.contrastText,
                        }} />
                    </IconButton>
                </DialogActions>
                <DialogContent
                >
                    {content}
                </DialogContent>
            </Box>
        </Dialog>
    );
}

export default CustomPopup;
