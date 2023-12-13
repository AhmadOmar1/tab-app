import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

type DialogProps = {
    dialogState: boolean,
    handleClose: () => void,
    content: React.ReactNode;
}

const ResponsiveDialog: React.FC<DialogProps> = ({ dialogState, handleClose, content }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Dialog
            fullScreen={fullScreen}
            open={dialogState}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogActions>
                <IconButton  onClick={handleClose}  sx={{backgroundColor:'lightgray'}}>
                    <Close color='primary' />
                </IconButton>
            </DialogActions>
            <DialogContent>
                {content}
            </DialogContent>

        </Dialog>
    );
}

export default ResponsiveDialog;
