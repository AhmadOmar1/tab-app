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
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useLocation } from 'react-router-dom';
import { Alert, Collapse } from '@mui/material';



export default function CheckOut() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    address: '',
  });

const handleFormSubmit = (values:any) => {
  // Handle form submission here, e.g., save to state
  setFormData(values);
}; 
const steps = [
  {
    label: 'Enter Your Personal Details',
    content: <PersonalDetails onSubmit={handleFormSubmit} />,
  },
  {
    label: 'Enter Your Payment Details',
    content: <PaymentCard />,
  },
  {
    label: 'Confirm Reservation Details',
    content: <SpecialRequest />,

  },
];

  // const hotelDetails = useSelector((state: RootState) => state.hotelsApi.queries)

  const room = useLocation().state;



  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleBookConfirm = () => {
    try {

      
    } catch (error) {
      
    }

  };

  function handleReset(): void {
    setActiveStep(0);
  }

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
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 2, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 2, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
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
    <RoomOrder checkIn='02/12/2003' checkOut='02/14/2003' hotelLocation='Ramllah,Nablus' hotelName='Plaza' room={room} />
  
  </Paper> 

  );
}