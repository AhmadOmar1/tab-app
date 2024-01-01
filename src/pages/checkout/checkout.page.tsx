import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PersonalDetails from '../../components/cards/personal-details.component';
import PaymentCard from '../../components/cards/payment-card.component';
import RoomOrder from '../../components/cards/room/room-order.component';
import style from "./checkout.module.css"
import SpecialRequest from '../../components/cards/special-request.component';
import { useLocation, useNavigate } from 'react-router-dom';
import { PersonalDetailsProps } from '../../models/personal-details';
import { PaymentDetailsProps } from '../../models/payment-details';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Room } from '../../models/room';
import { useGetHotelByIdQuery } from '../../redux/hotel/hotelsApi';
import { useBookMutation } from '../../redux/booking/booking-api';
import { Alert } from '@mui/material';



export default function CheckOut() {
  const location = useLocation();
  const room: Room = location.state;
  const { checkin, checkout } = useSelector((state: RootState) => state.searchFormValues.searchRoomDate);
  const [bookMuataion, { }] = useBookMutation();
  const navigate = useNavigate();


    if (!room) {
      console.log('Room is null or undefined:', room);
      navigate('/home');
      return;
    }

  const checkInDate = new Date(checkin);
  const checkOutDate = new Date(checkout);
  const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24));
  const totalPrice = nights * room.price;

  const hotelId = room.hotelId as number;



  const { data: hotelData } = useGetHotelByIdQuery({ id: hotelId, includeRooms: true });

  const [activeStep, setActiveStep] = React.useState(0);

  const [personalData, setPersonalData] = React.useState<PersonalDetailsProps>({
    firstName: '',
    lastName: '',
    address: '',
  });

  const [paymentData, setPaymentData] = React.useState<PaymentDetailsProps>({
    cardNumber: '',
    cardHolderName: '',
    expiration: '',
    cvv: '',
  });

  const [specialRequest, setSpecialRequest] = React.useState<string>('');

  const handlePersonalInfoSubmit = (values: PersonalDetailsProps) => {
    setPersonalData(values)
    console.log(personalData);
    handleNext();
  };

  const handlePaymentInfoSubmit = (values: PaymentDetailsProps) => {
    setPaymentData(values)
    console.log(paymentData);
    handleNext();
  };

  const handleSpecialRequestSubmit = (values: { specialRequest: string }) => {
    setSpecialRequest(values.specialRequest)
    console.log(specialRequest);
    handleNext();
  }
  const handleBookConfirm = () => {
    const bookingDateTime = new Date().toLocaleDateString('en-US');
    try {
      bookMuataion({
        bookingDateTime: bookingDateTime,
        totalCost: totalPrice,
        customerName: personalData.firstName + ' ' + personalData.lastName,
        hotelName: hotelData?.hotelName as string,
        roomNumber: room.roomNumber,
        roomType: room.roomType,
        paymentMethod: 'visa',
        bookingStatus: 'Confirmed',
      });

    } catch (error) {
      console.log(error);
    }

  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  function handleReset(): void {
    setActiveStep(0);
  }

  const steps = [
    {
      label: 'Enter Your Personal Details',
      content: <PersonalDetails
        onSubmit={handlePersonalInfoSubmit}
        values={personalData}
      />,
    },
    {
      label: 'Enter Your Payment Details',
      content: <PaymentCard
        onSubmit={handlePaymentInfoSubmit}
        handleBackStep={handleBack}
        values={paymentData}
      />,
    },
    {
      label: 'Confirm Reservation Details',
      content: <SpecialRequest
        specialRequest={specialRequest}
        onSubmit={handleSpecialRequestSubmit}
        onBack={handleBack}
      />,

    },
  ];


  return (<Paper className={style.checkoutConatiner}>
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
          <Button variant='contained' onClick={handleBookConfirm} sx={{ mt: 1, mr: 1 }}>
            Reserve
          </Button>
          <Button variant='text' onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
    <RoomOrder nights={nights} checkIn={checkin} checkOut={checkout} hotelLocation={hotelData?.location as string} hotelName={hotelData?.hotelName as string} room={room} />

  </Paper>

  );
}