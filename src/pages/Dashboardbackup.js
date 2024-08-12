import React from "react";
import Sidebar from "../components/Sidebar";
import { Box, Grid, Typography, Paper, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchBar from "../components/CommanComponant/SearchBar";
import "./Dashboard.css";
import theme from "../theme";

const Dashboard = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: 1, padding: "20px" }}>
        <Grid container spacing={2} mt={3}>
          <Grid item xs={6}>
            <SearchBar />
          </Grid>
          <Grid item xs={6}>
            {/* Add content here if needed */}
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={3}>
          <Grid item xs={4}>
            <Box className="Washing_Card" sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ mb: 2 }}>
                <img
                  src="https://www.speedcarwash.com/images/services/silver-wash.jpg"
                  alt="Silver Wash"
                  width="100%"
                />
              </Box>
              <Typography variant="h6" sx={{ mb: 1, color: theme.palette.custom.dashboard_des }}>
                SILVER WASH <strong>@ Rs.400</strong>
              </Typography>
              <hr />
              <Typography variant="body2" sx={{ mb: 2, color: theme.palette.custom.dashboard_des }}>
                Complete vacuuming of cars incl. seats and boot + Washing and cleaning of foot mats + Body Shampooing and washing including door frames + Tyre arches cleaning + Underbody wash + Engine hot water wash and dressing + Side doors cleaning + Dash board polishing + Car perfume spray
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >
                <Box>
                  <a href="http://www.facebook.com/share.php?u=https://www.speedcarwash.com/scw-washing&amp;title=SILVER WASH" target="_blank" rel="noopener noreferrer">
                    <div className="so-fa"></div>
                  </a>
                  <a href="http://twitter.com/intent/tweet?status=SILVER WASH+https://www.speedcarwash.com/scw-washing" target="_blank" rel="noopener noreferrer">
                    <div className="so-tw"></div>
                  </a>
                  <a href="https://plus.google.com/share?url=https://www.speedcarwash.com/scw-washing" target="_blank" rel="noopener noreferrer">
                    <div className="so-lin"></div>
                  </a>
                  <a href="whatsapp://send?text=Complete vacuuming of cars incl. seats and boot + Washing and cleaning of foot mats + Body Shampooing and washing including door frames + Tyre arches cleaning + Underbody wash + Engine hot water wash and dressing + Side doors cleaning + Dash board polishing + Car perfume spray - https://www.speedcarwash.com/scw-washing" target="_blank" rel="noopener noreferrer">
                    <div className="so-what"></div>
                  </a>
                </Box>
                <Box>
                  <form action="booking.php" method="post" id="1">
                    <input type="hidden" name="service" value="1" />
                  </form>
                  {/* <a href="#car_companies" data-toggle="modal" className="btn btn-md btn-primary margin-right-20">
                    Change Car!
                  </a> */}
                  <Button 
                    variant="contained" 
                    sx={{ backgroundColor: theme.palette.custom.signup_Button, '&:hover': { backgroundColor: theme.palette.custom.signup_Button } }}
                  >
                    Book Now!
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className="Washing_Card" sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ mb: 2 }}>
                <img
                  src="https://www.speedcarwash.com/images/services/platinum-wash.jpg"
                  alt="Platinum Wash"
                  width="100%"
                />
              </Box>
              <Typography variant="h6" sx={{ mb: 1, color: theme.palette.custom.dashboard_des }}>
                PLATINUM WASH <strong>@ Rs.1400</strong>
              </Typography>
              <hr />
              <Typography variant="body2" sx={{ mb: 2, color: theme.palette.custom.dashboard_des }}>
                Complete dry cleaning of a interior including seats (carpet/leather), roof, mats and boot + Complete vacuuming of cars incl. seats and boot + Washing and cleaning of foot mats + Pre washing of car + Foam cleaning of exterior + Tyre arches cleaning + Underbody wash + Engine hot water wash and dressing + Washing and cleaning of door frames + Side doors cleaning and polishing + Dash board cleaning and polishing + Tyre and alloy polishing + Scratch proof windshield spray + Car perfume spray
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                  <a href="http://www.facebook.com/share.php?u=https://www.speedcarwash.com/scw-washing&amp;title=PLATINUM WASH" target="_blank" rel="noopener noreferrer">
                    <div className="so-fa"></div>
                  </a>
                  <a href="http://twitter.com/intent/tweet?status=PLATINUM WASH+https://www.speedcarwash.com/scw-washing" target="_blank" rel="noopener noreferrer">
                    <div className="so-tw"></div>
                  </a>
                  <a href="https://plus.google.com/share?url=https://www.speedcarwash.com/scw-washing" target="_blank" rel="noopener noreferrer">
                    <div className="so-lin"></div>
                  </a>
                  <a href="whatsapp://send?text=Complete dry cleaning of a interior including seats (carpet/leather), roof, mats and boot + Complete vacuuming of cars incl. seats and boot + Washing and cleaning of foot mats + Pre washing of car + Foam cleaning of exterior + Tyre arches cleaning + Underbody wash + Engine hot water wash and dressing + Washing and cleaning of door frames + Side doors cleaning and polishing + Dash board cleaning and polishing + Tyre and alloy polishing + Scratch proof windshield spray + Car perfume spray - https://www.speedcarwash.com/scw-washing" target="_blank" rel="noopener noreferrer">
                    <div className="so-what"></div>
                  </a>
                </Box>
                <Box>
                  <form action="booking.php" method="post" id="3">
                    <input type="hidden" name="service" value="3" />
                  </form>
                  {/* <a href="#car_companies" data-toggle="modal" className="btn btn-md btn-primary margin-right-20">
                    Change Car!
                  </a> */}
                  <Button 
                    variant="contained" 
                    sx={{ backgroundColor: theme.palette.custom.signup_Button, '&:hover': { backgroundColor: theme.palette.custom.signup_Button } }}
                  >
                    Book Now!
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className="Washing_Card" sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ mb: 2 }}>
                <img
                  src="https://www.speedcarwash.com/images/services/gold-wash.jpg"
                  alt="Gold Wash"
                  width="100%"
                />
              </Box>
              <Typography variant="h6" sx={{ mb: 1, color: theme.palette.custom.dashboard_des }}>
                GOLD WASH <strong>@ Rs.500</strong>
              </Typography>
              <hr />
              <Typography variant="body2" sx={{ mb: 2, color: theme.palette.custom.dashboard_des }}>
                Complete vacuuming of cars incl. seats and boot + Washing and cleaning of foot mats + Body Shampooing and washing including door frames + Tyre arches cleaning + Underbody wash + Engine hot water wash and dressing + Side doors cleaning + Dash board cleaning and polishing + tires and alloy wheels treatment + Car perfume spray
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                  <a href="http://www.facebook.com/share.php?u=https://www.speedcarwash.com/scw-washing&amp;title=GOLD WASH" target="_blank" rel="noopener noreferrer">
                    <div className="so-fa"></div>
                  </a>
                  <a href="http://twitter.com/intent/tweet?status=GOLD WASH+https://www.speedcarwash.com/scw-washing" target="_blank" rel="noopener noreferrer">
                    <div className="so-tw"></div>
                  </a>
                  <a href="https://plus.google.com/share?url=https://www.speedcarwash.com/scw-washing" target="_blank" rel="noopener noreferrer">
                    <div className="so-lin"></div>
                  </a>
                  <a href="whatsapp://send?text=Complete vacuuming of cars incl. seats and boot + Washing and cleaning of foot mats + Body Shampooing and washing including door frames + Tyre arches cleaning + Underbody wash + Engine hot water wash and dressing + Side doors cleaning + Dash board cleaning and polishing + tires and alloy wheels treatment + Car perfume spray - https://www.speedcarwash.com/scw-washing" target="_blank" rel="noopener noreferrer">
                    <div className="so-what"></div>
                  </a>
                </Box>
                <Box>
                  <form action="booking.php" method="post" id="2">
                    <input type="hidden" name="service" value="2" />
                  </form>
                  {/* <a href="#car_companies" data-toggle="modal" className="btn btn-md btn-primary margin-right-20">
                    Change Car!
                  </a> */}
                  <Button 
                    variant="contained" 
                    sx={{ backgroundColor: theme.palette.custom.signup_Button, '&:hover': { backgroundColor: theme.palette.custom.signup_Button } }}
                  >
                    Book Now!
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Add Dashboard content here */}
      </div>
    </div>
  );
};

export default Dashboard;
