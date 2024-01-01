import { Box, Card, CardContent, CardMedia, Stack, Typography, makeStyles } from "@mui/material"
import TextIcon from "../../common/text-icon/text-icon.component"
import ChildrenIcon from "../../../assets/icons/children-icon.component"
import { Room } from "../../../models/room";
import AdultsIcon from "../../../assets/icons/adults-icon.component";
import React from "react";


const RoomCard: React.FC<{ room: Room, onClick: () => void, disabled: boolean }> = ({ room, onClick, disabled }) => {

    return <Card
        elevation={5}
        sx={{
            display: 'flex',
            cursor: 'pointer',
            width: '500px',
            minWidth: '400px',
            opacity: disabled ? 0.7 : 1,
            pointerEvents: disabled ? 'none' : 'auto',
        }}
        onClick={onClick}
    >
        <Box sx={{
            display: 'flex',
            width: '100%',
        }}>
            <CardMedia
                component="img"
                sx={{ width: 200 }}
                image={room.roomPhotoUrl}
                alt="room image"
            />
            <CardContent sx={{
                width: '100%',
            }} >
                <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="body1" component="div">
                        {room.roomType}
                    </Typography>
                    <Box>
                        <Typography gutterBottom sx={{ fontWeight: 'bold', fontFamily: 'Montserrat' }} variant="body1" component="div">
                            {room.price % 1 === 0 ? `$${room.price}.00` : `$${room.price}0`}
                        </Typography>
                        <Typography gutterBottom sx={{ fontFamily: 'Montserrat', lineHeight: 0 }} variant="body1" component="div">
                            {room.price && 'night'}
                        </Typography>
                    </Box>
                </Box>                    <Box></Box>

                <Stack sx={{ gap: 1 }}>
                    <TextIcon variant="body1" text={`${room.capacityOfAdults} Adults`} icon={<AdultsIcon height="20" width="20" />} />
                    <TextIcon variant="body1" text={`${room.capacityOfChildren} Children`} icon={<ChildrenIcon height="20" width="20" />} />
                </Stack>
            </CardContent>
        </Box>
    </Card>
}

export default RoomCard