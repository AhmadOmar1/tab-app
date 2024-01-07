import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import { Room } from '../../../../models/room';

interface DeleteRoomProps {
    room: Room;
    setIsOpen(value: boolean): void;
}

const DeleteRoom: React.FC<DeleteRoomProps> = ({ room ,setIsOpen}) => {

    const handleDeleteCity = () => {
        console.log('delete room', room);
        setIsOpen(false);
    }

    return (
        <Box>
            <DialogTitle id="alert-dialog-title">
                {`Are you sure you want to delete ${room.roomNumber}/${room.roomType} room?`}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    This action is irreversible.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant='contained' onClick={handleDeleteCity} autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Box>
    );
}

export default DeleteRoom;