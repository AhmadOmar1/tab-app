import { Grid } from '@mui/material';
import { useState } from 'react'
import { Room } from '../../../models/room';
import RoomCard from './room-card.component';
import CustomPopup from '../../popups/popup.component';
import RoomDetails from './room-details.component';


type RoomProps = {
    rooms: Room[],
    disabled?: boolean,

}

const RoomList: React.FC<RoomProps> = ({ rooms, disabled,}) => {
    const [dialogState, setDialogState] = useState(false);
    const [selectedRoom, setSelectedCity] = useState<Room | null>(null);
    const handleDialogOpen = (room: Room) => {
        setSelectedCity(room);
        setDialogState(true);
    };
    const handleDialogClose = () => {
        setDialogState(false);
    }

    return <Grid
        container
        spacing={1}
        gap={5}
        justifyContent={'center'}
    >
        {rooms?.map((room: Room) => {
            return (
                <RoomCard
                    disabled={disabled ?? false}
                    key={room.roomNumber}
                    room={room}
                    onClick={() => handleDialogOpen(room)}
                />
            )
        })}
        {selectedRoom && (
            <CustomPopup
                content={
                    <RoomDetails
                        key={selectedRoom.roomNumber}
                        room={selectedRoom}
                    />
                }
                dialogState={dialogState}
                handleClose={handleDialogClose}
            />
        )}
    </Grid>
}

export default RoomList