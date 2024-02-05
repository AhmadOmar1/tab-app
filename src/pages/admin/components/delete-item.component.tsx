import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';

interface DeleteItemProps {
    onDelete: () => void;
    isLoading: boolean;
    deleteMessage: string;
}

const DeleteItem: React.FC<DeleteItemProps> = ({ deleteMessage,isLoading,onDelete }) => {
    return (
        <Box>
            <DialogTitle id="alert-dialog-title">
                {deleteMessage}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    This action is irreversible.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant='contained' onClick={onDelete} autoFocus>
                    {isLoading ? 'Deleting...' : 'Delete'}
                </Button>
            </DialogActions>
        </Box>
    );
}

export default DeleteItem;