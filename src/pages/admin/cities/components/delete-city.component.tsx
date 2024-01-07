import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import { City } from '../../../../models/trending-destination';
import { useDeleteCityMutation } from '../../../../redux/admin/city/city-api';

interface DeleteCityProps {
    city: City;
    setIsOpen(value: boolean): void;
}

const DeleteCity: React.FC<DeleteCityProps> = ({ city, setIsOpen }) => {
    const [deleteCityMutation, { isLoading }] = useDeleteCityMutation();

    const handleDeleteCity = () => {
        console.log('delete city', city);
        try {
            deleteCityMutation({ cityId: city.id as number });
            alert('City deleted successfully');
            setIsOpen(false);
        } catch (error) {
            console.log(error);
            alert('Something went wrong');
        }
    }

    return (
        <>

            <Box>
                <DialogTitle id="alert-dialog-title">
                    {`Are you sure you want to delete ${city.name} city?`}
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
        </>

    );
}

export default DeleteCity;