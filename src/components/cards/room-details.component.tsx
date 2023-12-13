import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Rating, Stack, Typography } from "@mui/material"
import TextIcon from "../common/text-icon/text-icon.component"
import ChildrenIcon from "../../assets/icons/children-icon.component"
import AdultsIcon from "../../assets/icons/adults-icon.component"
import { RoomProps } from "../../models/room"
import React from "react"

const RoomDetails: React.FC<RoomProps> = ({ capacityOfAdults = 2, capacityOfChildrens = 1, roomType = 'Standard', price = 22.6, amenities = ['Free-Wifi', 'SwimingPool'], imageSrc = 'hotelImg.jpg', description, starRating = 5 }) => {
    return (<Card elevation={5} sx={{ maxWidth: '800px', overflow: 'hidden' }}>
        <CardMedia
            component="img"
            image={imageSrc}
            alt="Room image"
        />
        <CardContent>
            <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                    {roomType}
                </Typography>
                <Box>
                    <Typography gutterBottom sx={{ fontWeight: 'bold', fontFamily: 'Montserrat', fontSize: 20 }} variant="h4" component="div">
                        {price % 1 === 0 ? `$${price}.00` : `$${price}0`}
                    </Typography>
                    <Typography gutterBottom sx={{ fontFamily: 'Montserrat', lineHeight: 0 }} variant="body1" component="div">
                        night
                    </Typography>
                </Box>
            </Box>
            <Rating sx={{ marginBottom:1 }} value={starRating} />
            {
                description && <Box>
                <Typography gutterBottom sx={{ fontFamily: 'Montserrat' }} variant="h6" component="div">
                    About Room
                </Typography>
                <Box padding={1}>
                    <Typography gutterBottom sx={{ fontFamily: 'Montserrat' }} variant="body1" component="div">
                        {description}
                    </Typography>
                </Box>
            </Box>
            }
            <Box>
                <Typography gutterBottom sx={{ fontFamily: 'Montserrat' }} variant="h6" component="div">
                    Amenties
                </Typography>
                <Stack direction="row" sx={{ p: 1, width: '70%', flexWrap: 'wrap', gap: 1 }}>
                    {amenities.map((amenity) => {
                        return <Chip label={amenity} />
                    }
                    )}
                </Stack>
            </Box>
            <Box> 
                <Typography gutterBottom sx={{ fontFamily: 'Montserrat' }} variant="h6" component="div">
                    Room Size
                </Typography>
                <Stack direction={'row'} sx={{ p: 1, gap: 1 }}>
                    <TextIcon text={`${capacityOfAdults} Adults`} icon={<AdultsIcon />} />
                    <TextIcon text={`${capacityOfChildrens} Children`} icon={<ChildrenIcon />} />
                </Stack>
            </Box>
            <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
                <Button variant="contained" sx={{ width: '80%' }} >Book now</Button>
            </CardActions>
        </CardContent>
    </Card>
    )
}

export default RoomDetails