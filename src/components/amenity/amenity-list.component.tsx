import { Box } from "@mui/material"
import { Amenity } from "../../models/amenity";
import AmenityChip from "./amenity.component";

type AmenityListProps = {
    amenities: Amenity[];
}

const AmenityList: React.FC<AmenityListProps> = ({ amenities }) => {
    return <Box sx={{
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    }}>
        {amenities.map((amenity, index) =>
            <AmenityChip key={index} description={amenity.description} icon amenity={amenity.name} />
        )}
    </Box>
}

export default AmenityList