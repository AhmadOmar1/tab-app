import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import { AddHotel } from '../../../../models/hotel';
import { useDeleteHotelMutation } from '../../../../redux/admin/hotel/hotel-api';

interface DeleteHotelProps {
    hotel: AddHotel;
    setIsOpen(value: boolean): void;
}

const DeleteHotel: React.FC<DeleteHotelProps> = ({ hotel, setIsOpen }) => {
    const [deleteHotelMutation, { isLoading }] = useDeleteHotelMutation();

    const handleDeleteCity = () => {
        console.log('delete hotel', hotel);
        try {
            deleteHotelMutation({ hotelId: hotel.id as number });
            setIsOpen(false);
            !isLoading && alert('Hotel deleted successfully');

        } catch (error) {
            console.log(error);
            alert('Something went wrong');
        }
    }

    return (
        <Box>
            <DialogTitle id="alert-dialog-title">
                {`Are you sure you want to delete ${hotel.name} Hotel?`}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    This action is irreversible.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant='contained' onClick={handleDeleteCity} autoFocus>
                    {isLoading ? 'Deleting...' : 'Delete'}
                </Button>
            </DialogActions>
        </Box>
    );
}

export default DeleteHotel;