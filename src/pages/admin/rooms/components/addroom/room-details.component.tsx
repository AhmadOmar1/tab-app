import { Box, Button, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'
import React from 'react'
import { useGetHotelsQuery } from '../../../../../redux/admin/hotel/hotel-api';
import { useFormik } from 'formik';
import { Room } from '../../../../../models/room';
import { AddRoomDetailsSchema } from '../../../../../schemas';

export const RoomTypes = [
    'Single',
    'Double',
    'Triple',
    'Quad',
    'Queen',
    'King',
    'Twin',
    'Double-double',
    'Studio',
    'Master Suite',
    'Mini Suite',
    'Cabana',
    'Junior Suite',
    'President Suite',
    'Connecting Room',
    'Adjoining Room',
    'Adjacent Room',
    'Murphy Room',
    'Accessible Room',
    'Cabana',
    'Duplex Room',
    'Efficiency Room',
]

const AddRoomDetails: React.FC<{
    onSubmit: (values: Room) => void,
    values: Room
}> = ({ onSubmit, values }) => {
    const formik = useFormik({
        validationSchema: AddRoomDetailsSchema,
        initialValues: values,
        onSubmit: (values) => {
            onSubmit(values);
        },
    });


    const { data: hotelsData } = useGetHotelsQuery();

    const hotels = hotelsData?.map((hotel) => ({ name: hotel.name, hotelId: hotel.id }));

    const handleContinue = () => {
        formik.handleSubmit(); 
    };

    return <Box component={'form'} >
        <Stack spacing={1} direction='row' justifyContent={'space-between'}>
            <Box>
                <InputLabel id="hotelName">Hotel name</InputLabel>
                <Select
                    labelId="hotelId"
                    id="hotelId"
                    name='hotelId'
                    value={formik.values.hotelId}
                    onChange={formik.handleChange}
                    sx={{ m: 1, width: 170 }}
                    fullWidth
                >
                    {hotels?.map((hotel, index) => (
                        <MenuItem key={index} value={hotel.hotelId}>
                            {hotel.name}
                        </MenuItem>
                    ))}
                </Select>
            </Box>
            <Box>
                <InputLabel id="hotelType">Room type</InputLabel>
                <Select
                    labelId="roomType"
                    id="roomType"
                    name='roomType'
                    value={formik.values.roomType}
                    onChange={formik.handleChange}
                    sx={{ m: 1, width: 170 }}
                    fullWidth
                >
                    {RoomTypes?.map((room, index) => (
                        <MenuItem key={index} value={room}>
                            {room}
                        </MenuItem>
                    ))}
                </Select>
            </Box>
        </Stack>
        <TextField
            fullWidth
            id="name"
            name="roomNumber"
            label="Room Number"
            variant="outlined"
            margin="normal"
            value={formik.values.roomNumber}
            onChange={formik.handleChange}
            helperText={formik.errors.roomNumber}
            error={formik.touched.roomType && Boolean(formik.errors.roomNumber)}
        />
        <TextField
            fullWidth
            id="description"
            name="description"
            label="Room Description"
            variant="outlined"
            margin="normal"
            value={formik.values.description}
            onChange={formik.handleChange}
            multiline
            rows={3}
            helperText={formik.errors.description}
            error={formik.touched.description && Boolean(formik.errors.description)}
        />
        <Stack direction='row' sx={{ my: 1 }} spacing={1}>
            <TextField
                fullWidth
                id="price"
                name="price"
                label="Price"
                type='number'
                variant="outlined"
                margin="normal"
                value={formik.values.price}
                onChange={formik.handleChange}
                helperText={formik.errors.price}
                error={formik.touched.price && Boolean(formik.errors.price)}
            />
            <TextField
                fullWidth
                id="capacityOfAdults"
                name="capacityOfAdults"
                label="Capacity of Adults"
                type='number'
                variant="outlined"
                margin="normal"
                value={formik.values.capacityOfAdults}
                onChange={formik.handleChange}
                helperText={formik.errors.capacityOfAdults}
                error={formik.touched.capacityOfAdults && Boolean(formik.errors.capacityOfAdults)}
            />
            <TextField
                fullWidth
                id="capacityOfChildren"
                name="capacityOfChildren"
                label="Capacity of Children"
                type='number'
                variant="outlined"
                margin="normal"
                value={formik.values.capacityOfChildren}
                onChange={formik.handleChange}
                helperText={formik.errors.capacityOfChildren}
                error={formik.touched.capacityOfChildren && Boolean(formik.errors.capacityOfChildren)}
            />

        </Stack>
        <Button
            variant="contained"
            onClick={handleContinue}
            sx={{ mt: 2, mr: 1 }}
            disabled={!formik.isValid}
        >
            {'Continue'}
        </Button>
    </Box>
}

export default AddRoomDetails