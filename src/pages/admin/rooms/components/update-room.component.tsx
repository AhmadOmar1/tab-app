import React from 'react';
import { Container, Box, TextField, Button, Typography, CardContent } from '@mui/material';
import { useFormik } from 'formik';
import { Room } from '../../../../models/room';
import { useUpdateRoomMutation } from '../../../../redux/admin/room/room-api';
import CustomAlert from '../../../../components/common/alert/custom-alert.component';

type UpdateRoomProps = {
    room: Room;
}

const UpdateRoom: React.FC<UpdateRoomProps> = ({ room }) => {
    const [isError, setIsError] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);

    const [updateRoomMutation, { isLoading: updatingRoomLoading }] = useUpdateRoomMutation();

    const formik = useFormik({
        initialValues: {
            roomNumber: room.roomNumber,
            cost: room.price,
        },
        onSubmit: (values) => {
            try {
                updateRoomMutation({ roomId: room.id as number, room: values });
                setIsSuccess(true);
            }
            catch (error) {
                setIsError(true);
            }
        },
    });

    return (
        <>
            <CustomAlert
                description='ٌRoom updated successfully'
                isOpen={isSuccess}
                setIsOpen={(value) => setIsSuccess(value)}
                title={'Success'}
                color='success'
            />
            <CustomAlert
                description='Something went wrong'
                isOpen={isError}
                setIsOpen={(value) => setIsError(value)}
                title='Error'
                color='error'
            />
            <Container maxWidth="sm">
                <CardContent >
                    <Typography variant="h5" component="div">
                        Update Room
                    </Typography>
                    <Box component={'form'} onSubmit={formik.handleSubmit}>
                        <TextField
                            fullWidth
                            id="name"
                            name="name"
                            label="Room number"
                            variant="outlined"
                            margin="normal"
                            value={formik.values.roomNumber}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            fullWidth
                            id="cost"
                            name="cost"
                            label="Cost"
                            variant="outlined"
                            margin="normal"
                            value={formik.values.cost}
                            onChange={formik.handleChange}
                            multiline
                            minRows={3}
                            maxRows={10}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={
                                formik.values.roomNumber === room.roomType &&
                                formik.values.cost === room.price
                            }
                        >
                            {
                                updatingRoomLoading ? 'Updating...' : 'Update'
                            }
                        </Button>
                    </Box>
                </CardContent>
            </Container>
        </>

    );
};


export default UpdateRoom;
