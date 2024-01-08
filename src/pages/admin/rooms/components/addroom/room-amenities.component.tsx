import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Amenity } from "../../../../../models/amenity";
import { useFormik } from "formik";
import { useState } from "react";
import { RoomAmenitiesSchema } from "../../../../../schemas";

const AddRoomAmenities: React.FC<{
  onSubmit: (values: Amenity | Amenity[]) => void;
  values: Amenity;
  handleBack: () => void;
}> = ({ onSubmit, values, handleBack }) => {
  const [amenitiesCount, setAmenitiesCount] = useState(1);

  const formik = useFormik({
    validationSchema: RoomAmenitiesSchema,
    initialValues: {
      roomAmenities: Array.from({ length: amenitiesCount }, (_, index) =>
        index === 0 ? values : { name: "", description: "" }
      ),
    },
    onSubmit: (values) => {
      onSubmit(values.roomAmenities);
    },
  });

  function handleAddNewAmenity(): void {
    setAmenitiesCount(amenitiesCount + 1);

    formik.setValues({
      roomAmenities: [
        ...formik.values.roomAmenities,
        { name: "", description: "" },
      ],
    });
  }

  return (
    <Box component={'form'} onClick={formik.handleSubmit}>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant="h6">Room Amenities</Typography>
        <Button
         
          color="primary"
          onClick={handleAddNewAmenity}
          sx={{ my: 1 }}
        >
          Add Amenity
        </Button>
      </Stack>

      {formik.values.roomAmenities.map((amenity, index) => (
        <Stack key={index} gap={1} my={2} >
          {`Amenity ${index+1}`}
          <TextField
            id={`name-${index}`}
            name={`roomAmenities[${index}].name`}
            label="Name"
            value={amenity.name}
            onChange={formik.handleChange}
            error={formik.touched.roomAmenities && Boolean(formik.errors.roomAmenities)}
          />
          <TextField
            fullWidth
            id={`description-${index}`}
            name={`roomAmenities[${index}].description`}
            label="Description"
            value={amenity.description}
            onChange={formik.handleChange}
            error={formik.touched.roomAmenities && Boolean(formik.errors.roomAmenities)}
          />
        </Stack>
      ))}
      <Stack direction={'row'} justifyContent={'space-between'} my={1}>
        <Button
          variant="text"
          color="primary"
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          Next
        </Button>
      </Stack>
    </Box>
  );
};

export default AddRoomAmenities;
