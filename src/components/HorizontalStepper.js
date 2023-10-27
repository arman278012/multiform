import React, { useContext, useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, Container } from '@mui/material';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import { AppContext } from './AuthContexts';
import TotalUserData from './TotalUserData';

const steps = ['Step 1', 'Step 2', 'Step 3'];
const pages = [<Page1 />, <Page2 />, <Page3 />];

const HorizontalStepper = () => {
    const { number } = useContext(AppContext)
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = (e) => {
        e.preventDefault()
        if (number == activeStep) {
            alert("please fill al")
        } else if (number != activeStep) {
            setActiveStep(number);
        }
    };

    const handleBack = (e) => {
        e.preventDefault()
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    // 
    return (
        <Container className='p- container'>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography><TotalUserData /></Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        <Typography>{pages[activeStep]}</Typography>
                        <div className='flex justify-between mt-5 mb-10'>
                            <Button disabled={activeStep === 0} onClick={handleBack}>
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={(e) => handleNext(e)}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </Container>
    );
};

export default HorizontalStepper;
