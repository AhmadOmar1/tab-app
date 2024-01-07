import React from 'react';
import { Box, Button, Typography, CardContent, Step, Stepper, StepLabel, StepContent, Paper, } from '@mui/material';
import CustomAlert from '../../../../../components/common/alert/custom-alert.component';
import { Room } from '../../../../../models/room';
import { useGetHotelsQuery } from '../../../../../redux/admin/hotel/hotel-api';
import AddRoomDetails from './room-details.component';
import AddRoomPhoto from './room-photo.component';
import AddRoomAmenities from './room-amenities.component';
import { useAddRoomAmenityMutation, useAddRoomPhotoMutation, useCreateRoomMutation } from '../../../../../redux/admin/room/room-api';
import { Amenity } from '../../../../../models/amenity';


const AddRoom: React.FC = () => {

    const [isError, setIsError] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [lastRoomId, setLastRoomId] = React.useState(0);
    const [activeStep, setActiveStep] = React.useState(0);
    const [isRoomSuccess, setIsRoomSuccess] = React.useState(false);
    const [roomPhotoDetails, setRoomPhotoDetails] = React.useState<string>()
    const { data: hotelsData } = useGetHotelsQuery();
    const hotels = hotelsData?.map((hotel) => ({ name: hotel.name, hotelId: hotel.id }));
    const [roomDetails, setRoomDetails] = React.useState<Room>({
        roomNumber: '',
        roomType: '',
        description: '',
        price: 0,
        capacityOfAdults: 0,
        capacityOfChildren: 0,
        hotelId: hotels?.[0]?.hotelId ?? 0
    });




    const [createRoomMutation, { isLoading: creatingRoomLoading }] = useCreateRoomMutation();
    const [addRoomPhotoMutation, { isLoading: addingRoomPhotoLoading }] = useAddRoomPhotoMutation();
    const [AddRoomAmenitiesMutation, { isLoading: addingRoomAmenitiesLoading }] = useAddRoomAmenityMutation();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const isLoading = creatingRoomLoading || addingRoomPhotoLoading || addingRoomAmenitiesLoading;
    const steps = [
        {
            label: 'Enter Your Room Details',
            content:
                <AddRoomDetails
                    onSubmit={handleRoomAdd}
                    values={roomDetails}
                />
        },
        {
            label: 'Enter Your Room Photo',
            content:
                <AddRoomPhoto
                    values={roomPhotoDetails as string}
                    onSubmit={handleRoomPhoto}
                    handleBack={handleBack}
                />
        },
        {
            label: 'Enter Your Room Amenities',
            content:
                <AddRoomAmenities
                    onSubmit={handleRoomAmenities}
                    values={{ name: '', description: '' }}
                    handleBack={handleBack}

                />
        },
    ];


    async function handleRoomAdd(values: Room): Promise<void> {
        try {
            const res = await createRoomMutation({ hotelId: values.hotelId as number, room: values }).unwrap();
            console.log(res.id);
            setLastRoomId(res.id as number);
            setRoomDetails(values);
            handleNext();
            setIsRoomSuccess(true);
        } catch (error) {
            console.error("Error creating room:", error);
            setIsRoomSuccess(false);
        }
    }

    function handleRoomPhoto(url: string): void {
        try {
            setRoomPhotoDetails(url);
            addRoomPhotoMutation({ roomId: lastRoomId, url }).unwrap();
            handleNext();
            setIsRoomSuccess(true);

        } catch (error) {
            console.error("Error adding room photo:", error);
            setIsRoomSuccess(false);
        }
    }

    async function handleRoomAmenities(values: Amenity | Amenity[]): Promise<void> {
        try {
            if (Array.isArray(values)) {
                for (const amenity of values) {
                    await AddRoomAmenitiesMutation({ roomId: lastRoomId, amenity }).unwrap();
                }
            } else {
                await AddRoomAmenitiesMutation({ roomId: lastRoomId, amenity: values }).unwrap();
            }
            handleNext();
            setIsRoomSuccess(true);
        } catch (error) {
            console.error("Error adding room amenities:", error);
            setIsRoomSuccess(false);
        }
    }


    const handleRoomState = async () => {
        if (isRoomSuccess === false) {
            setIsError(true);
        }
        setIsSuccess(true);
        handleReset();
    };
    return <>
        <CustomAlert
            description='ٌRoom added successfully'
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
        <Paper sx={{ minHeight: '100vh' }}>
            <CardContent >
                <Typography variant="h5" component="div">
                    Add Room
                </Typography>
                <Box sx={{ maxWidth: 600, }}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={step.label}>
                                <StepLabel
                                    optional={
                                        index === 2 ? (
                                            <Typography variant="caption">Last step</Typography>
                                        ) : null
                                    }
                                >
                                    {step.label}
                                </StepLabel>
                                <StepContent>
                                    {step.content}
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} sx={{ p: 3 }}>
                            <Typography>All steps completed - you&apos;re finished</Typography>
                            <Button
                                fullWidth
                                sx={{ my: 1 }}
                                variant="contained"
                                color="primary"
                                onClick={handleRoomState}

                            >
                                {isLoading ? 'Loading...' : 'Done'}
                            </Button>
                            <Button variant='text' onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                Reset
                            </Button>
                        </Paper>
                    )}
                </Box>
            </CardContent>
        </Paper>
    </>
};

export default AddRoom;


