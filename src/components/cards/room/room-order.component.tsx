import styled from '@emotion/styled'
import { Box, Button, Card, CardContent, CardMedia, Chip, Divider, Paper, Rating, Typography } from '@mui/material'
import { Room } from '../../../models/room'
import { useNavigate } from 'react-router-dom'

type RoomOrderProps = {
    room: Room,
    hotelName: string,
    hotelLocation: string,
    checkIn: string,
    checkOut: string,
    nights: number,
}


const StyledBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`

const RoomOrder: React.FC<RoomOrderProps> = ({ room, checkIn, checkOut, hotelLocation, hotelName , nights }) => {

    const totalPrice = nights * room.price;

    const navigate = useNavigate();
    const handleEditClick = () => {
        navigate(-1);
    }

    return (
        <Paper sx={{ width: 400, height: 700 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h6" component="div">
                    Reservation Summry
                </Typography>

                <Card
                    elevation={5}
                    sx={{
                        display: 'flex',
                        p: 1,
                        borderRadius: 3,
                    }}>
                    <CardMedia
                        component="img"
                        sx={{
                            width: 120,
                            borderRadius: 2,
                        }}
                        image="/hotelImg.jpg"
                        alt="hotel image"
                    />
                    <CardContent sx={{
                        flex: '1 0 auto',
                        pt: 0,
                    }}>
                        <Typography component="div" variant="body2">
                            {hotelName}
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>

                            <Typography variant="body1" component="div">
                                {room.roomType}
                            </Typography>
                            <Typography variant="body1" component="div">
                                ${room.price}
                            </Typography>
                        </Box>
                        <Rating name="read-only" value={4} readOnly size='small' />
                        <Typography component="div" variant="body2">
                            {hotelLocation}
                        </Typography>
                    </CardContent>

                </Card>


                <Card elevation={5}
                    sx={{
                    }}
                >
                    <CardContent>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                            <Typography variant="h6" component="div">
                                Room Details
                            </Typography>
                            <Button variant="text" size="small" onClick={handleEditClick}>Edit</Button>
                        </Box>
                        <Divider />


                        <StyledBox >
                            <Typography variant="body1" component="div">
                                Checkin
                            </Typography>
                            <Typography variant="body1" component="div">
                                {checkIn}
                            </Typography>

                        </StyledBox>
                        <StyledBox >
                            <Typography variant="body1" component="div">
                                Checkout
                            </Typography>
                            <Typography variant="body1" component="div">
                                {checkOut}
                            </Typography>
                        </StyledBox>
                        <Divider />
                        <StyledBox >
                            <Typography variant="body1" component="div">
                                Rooms
                            </Typography>
                            <Typography variant="body1" component="div">
                                Adults
                            </Typography>
                            <Typography variant="body1" component="div">
                                Children
                            </Typography>
                        </StyledBox>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            paddingInline: 2.5,
                        }}>
                            <Chip sx={{ width: 40 }} label={1} variant="filled" />
                            <Chip sx={{ width: 40 }} label={room.capacityOfAdults} variant="filled" />
                            <Chip sx={{ width: 40 }} label={room.capacityOfChildren} variant="filled" />
                        </Box>
                    </CardContent>
                </Card>
                <Card elevation={5}
                    sx={{
                    }}
                >
                    <CardContent>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                            <Typography variant="h6" component="div">
                                Price Details
                            </Typography>
                        </Box>
                        <StyledBox >
                            <Typography variant="body1" component="div">

                                ${room.price} x {nights} {'nights'}
                            </Typography>
                            <Typography variant="body1" component="div">
                                {totalPrice}
                            </Typography>
                        </StyledBox>

                        <Divider />
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            p: 1
                        }}>
                            <Typography variant="h6" component="div">
                                Total
                            </Typography>
                            <Typography variant="h6" component="div">
                                ${totalPrice}
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>

            </CardContent>
        </Paper>
    )
}

export default RoomOrder