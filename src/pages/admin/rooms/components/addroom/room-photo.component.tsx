import { Box, Button, Stack, TextField } from '@mui/material'
import { useFormik } from 'formik';
import React from 'react'
import { AddRoomPhotoSchema } from '../../../../../schemas';

const AddRoomPhoto: React.FC<{
  onSubmit: (values: string) => void,
  values: string,
  handleBack: () => void,
}> = ({
  onSubmit,
  values,
  handleBack
}) => {
    const formik = useFormik({
      validationSchema: AddRoomPhotoSchema,
      initialValues: { roomPhotoUrl: values },

      onSubmit: (values) => {
        onSubmit(values.roomPhotoUrl);
      },
    });

    const handleContinue = () => {
      formik.handleSubmit();
    };

    return <Box component={'form'}>
      <TextField
        fullWidth
        id="roomPhotoUrl"
        name="roomPhotoUrl"
        label="Room Photo Url"
        variant="outlined"
        margin="normal"
        value={formik.values.roomPhotoUrl}
        onChange={formik.handleChange}
        helperText={formik.errors.roomPhotoUrl}
        error={formik.touched.roomPhotoUrl && Boolean(formik.errors.roomPhotoUrl)}
      />
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Button  onClick={handleBack}>Back</Button>
        
        <Button variant='contained'
          disabled={!formik.isValid}
          onClick={handleContinue}
        >Next</Button>
      </Stack>

    </Box>
  }


export default AddRoomPhoto