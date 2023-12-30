import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Stack, Tooltip, Typography } from "@mui/material"
import TextIcon from "../../common/text-icon/text-icon.component"
import ChildrenIcon from "../../../assets/icons/children-icon.component"
import AdultsIcon from "../../../assets/icons/adults-icon.component"
import { Room } from "../../../models/room"
import React from "react"
import { Amenity } from "../../../models/amenity"
import { useNavigate } from "react-router-dom"
import AmenityChip from "../../amenity/amenity.component"



const RoomDetails: React.FC<{ room: Room }> = ({ room }) => {
    const navigate = useNavigate();

    const handleBookClick = () => {
        navigate(`/checkout` , {state:room})
    }
    return (<Card elevation={5} sx={{ maxWidth: '800px', overflow: 'hidden' }}>
        <CardMedia
            component="img"
            image={room.roomPhotoUrl}
            alt="Room image"
        />
        <CardContent>
            <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                    {room.roomType} Room
                </Typography>
                <Box>
                    <Typography gutterBottom sx={{ fontWeight: 'bold', fontFamily: 'Montserrat', fontSize: 20 }} variant="h4" component="div">
                        {room.price % 1 === 0 ? `$${room.price}.00` : `$${room.price}0`}
                    </Typography>
                    <Typography gutterBottom sx={{ fontFamily: 'Montserrat', lineHeight: 0 }} variant="body1" component="div">
                        night
                    </Typography>
                </Box>
            </Box>
            {
                room.description && <Box>
                    <Typography gutterBottom sx={{ fontFamily: 'Montserrat' }} variant="h6" component="div">
                        About Room
                    </Typography>
                    <Box padding={1}>
                        <Typography gutterBottom sx={{ fontFamily: 'Montserrat' }} variant="body1" component="div">
                            {room.description}
                        </Typography>
                    </Box>
                </Box>
            }
            <Box>
                <Typography gutterBottom sx={{ fontFamily: 'Montserrat' }} variant="h6" component="div">
                    Amenties
                </Typography>
                <Stack direction="row" sx={{ p: 1, width: '70%', flexWrap: 'wrap', gap: 1 }}>

                    {room.roomAmenities?.map((amenity: Amenity, index) => {
                      return  <AmenityChip key={index} description={amenity.description}  amenity={amenity.name} />
                    }
                    )}
                </Stack>
            </Box>
            <Box>
                <Typography gutterBottom sx={{ fontFamily: 'Montserrat' }} variant="h6" component="div">
                    Room Size
                </Typography>
                <Stack direction={'row'} sx={{ p: 1, gap: 1 }}>
                    <TextIcon text={`${room.capacityOfAdults} Adults`} icon={<AdultsIcon />} />
                    <TextIcon text={`${room.capacityOfChildren} Children`} icon={<ChildrenIcon />} />
                </Stack>
            </Box>
            <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
                <Button
                    variant="contained"
                    onClick={handleBookClick}
                    sx={{
                        width: '80%',
                        height: '50px'
                    }} >Book now</Button>
            </CardActions>
        </CardContent>
    </Card>
    )
}

export default RoomDetails