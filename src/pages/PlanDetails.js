// src/pages/PlanDetails.js
import React from "react";
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Typography, Container, Box } from '@mui/material';
import { styled } from '@mui/system';
import "./PlanDetails.css";

const PlanCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    textAlign: 'center',
    backgroundColor: '#2c2c2c', // Grey background color
    color: 'white', // White text color
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
    borderRadius: '10px',
}));

const plans = [
    {
        title: 'Free',
        subtitle: 'Binance Freemium',
        price: 'Free',
        details: ['Free as long as you trade*', 'Weekly YAE rewards', 'Full features'],
        note: '*One transaction a week is required.',
    },
    {
        title: '1500 YAE',
        subtitle: 'YAE Holding',
        price: '1500 YAE',
        details: ['Most flexible', 'CEX and DEX available', 'Weekly YEA rewards', 'Lifetime validity'],
        note: '*Starting from YAE 1500',
    },
    {
        title: '390 USD/year',
        subtitle: 'CEX Master',
        price: '390 USD/year',
        details: ['All CEX included', 'Best for CEX trades'],
    },
];

function PlanDetails() {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ flexGrow: 1, padding: "20px" }}>
                <h2>Plan Details</h2>
                <Container maxWidth="md" sx={{ mt: 5 }}>
                    <Typography variant="h3" gutterBottom align="center" color="white">
                        Pricing plan
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom align="center" color="white">
                        Choose a plan that meets your needs.
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, mb: 5 }}>
                        <img src="path-to-your-icons" alt="Exchanges" />
                    </Box>
                    <Carousel
                        autoPlay
                        interval={3000}
                        animation="slide"
                        indicators={false}
                        navButtonsAlwaysVisible
                    >
                        {plans.map((plan, i) => (
                            <PlanCard key={i} className="plan-card">
                                <Typography variant="h4" color="primary" gutterBottom>
                                    {plan.title}
                                </Typography>
                                <Typography variant="h6" gutterBottom>
                                    {plan.subtitle}
                                </Typography>
                                <Typography variant="h5" color="secondary" gutterBottom>
                                    {plan.price}
                                </Typography>
                                <ul>
                                    {plan.details.map((detail, index) => (
                                        <li key={index}>
                                            <Typography variant="body1" color="inherit">{detail}</Typography>
                                        </li>
                                    ))}
                                </ul>
                                {plan.note && (
                                    <Typography variant="caption" display="block" gutterBottom>
                                        {plan.note}
                                    </Typography>
                                )}
                                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                                    Start plan
                                </Button>
                            </PlanCard>
                        ))}
                    </Carousel>
                </Container>
            </div>
        </div>
    );
}

export default PlanDetails;
