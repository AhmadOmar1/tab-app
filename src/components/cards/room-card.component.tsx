import { Box, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import TextIcon from "../common/text-icon/text-icon.component"
import ChildrenIcon from "../../assets/icons/children-icon.component"
import { useState } from "react";
import ResponsiveDialog from "../popups/popup.component";
import RoomDetails from "./room-details.component";
import { RoomProps } from "../../models/room";
import AdultsIcon from "../../assets/icons/adults-icon.component";
import React from "react";

const RoomCard: React.FC<RoomProps> = ({ roomType = 'Standard', price = 20, imageSrc = 'hotelImg.jpg', capacityOfAdults = 2, capacityOfChildrens = 1 }) => {
    const [dialogState, setDialogState] = useState(false);
    
    const handleOpenDialog = () => {
        setDialogState(true);
    };

    const handleCloseDialog = () => {
        setDialogState(false);
    };

    return <Card
        elevation={5}
        sx={{
            display: 'flex',
            cursor: 'pointer',
            width: '500px'
        }}
        onClick={handleOpenDialog}
    >
        <Box sx={{
            display: 'flex',
            width: '100%',
        }}>
            <CardMedia
                component="img"
                sx={{ width: 200 }}
                image={imageSrc}
                alt="hotel image"
            />
            <CardContent sx={{
                width: '100%',
            }} >
                <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                        {roomType}
                    </Typography>
                    <Box>
                        <Typography gutterBottom sx={{ fontWeight: 'bold', fontFamily: 'Montserrat', fontSize: 20 }} variant="h4" component="div">
                            {price % 1 === 0 ? `$${price}.00` : `$${price}0`}
                        </Typography>
                        <Typography gutterBottom sx={{ fontFamily: 'Montserrat', lineHeight: 0 }} variant="body1" component="div">
                            {price && 'night'}
                        </Typography>
                    </Box>
                </Box>
                <Stack sx={{ gap: 1 }}>
                    <TextIcon text={`${capacityOfAdults} Adults`} icon={<AdultsIcon />} />
                    <TextIcon text={`${capacityOfChildrens} Children`} icon={<ChildrenIcon />} />
                </Stack>
            </CardContent>
        </Box>
        <ResponsiveDialog dialogState={dialogState} handleClose={handleCloseDialog} content={<RoomDetails roomType={roomType} imageSrc={imageSrc} capacityOfAdults={capacityOfAdults} capacityOfChildrens={capacityOfChildrens} price={price} />} />
    </Card>
}

export default RoomCard