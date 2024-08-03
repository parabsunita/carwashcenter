import React from "react";
import Sidebar from "../components/Sidebar";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import SearchBar from "../components/CommanComponant/SearchBar";
import "./Dashboard.css";

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
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100%' }}>
          <Box sx={{ marginLeft: 3 }}> {/* Adjust margin as needed */}
            Sort By
          </Box>
        </Box>

          </Grid>
        </Grid>
        <Grid container spacing={2} mt={3}>
          <Grid item xs={4}>
            <div className="row Washing_Card">
              <div className="col-md-4">
                <img
                  src="https://www.speedcarwash.com/images/services/silver-wash.jpg"
                  alt=""
                  width="100%"
                />
              </div>
              <div className="col-md-8">
                <h2 className="shorter">
                  SILVER WASH<strong> @ Rs.400</strong>
                </h2>
                <hr />

                <div className="row">
                  
                  <p className="card_description">
                    Complete vacuuming of cars incl. seats and boot + Washing
                    and cleaning of foot mats + Body Shampooing and washing
                    including door frames + Tyre arches cleaning + Underbody
                    wash + Engine hot water wash and dressing + Side doors
                    cleaning + Dash board polishing + Car perfume spray
                  </p>
                  <p></p>
                  <div className="col-md-8">
                    <div className="h-social-share">
                      <a
                        href="http://www.facebook.com/share.php?u=https://www.speedcarwash.com/scw-washing&amp;title=SILVER WASH"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="so-fa"></div>
                      </a>

                      <a
                        href="http://twitter.com/intent/tweet?status=SILVER WASH+https://www.speedcarwash.com/scw-washing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="so-tw"></div>
                      </a>

                      <a
                        href="https://plus.google.com/share?url=https://www.speedcarwash.com/scw-washing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="so-lin"></div>
                      </a>

                      <a
                        href="whatsapp://send?text=Complete vacuuming of cars incl. seats and boot + Washing and cleaning of foot mats + Body Shampooing and washing including door frames + Tyre arches cleaning + Underbody wash + Engine hot water wash and dressing + Side doors cleaning + Dash board polishing + Car perfume spray - https://www.speedcarwash.com/scw-washing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="so-what"></div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <form action="booking.php" method="post" id="1">
                      <input type="hidden" name="service" value="1" />
                    </form>
                    <a
                      href="#car_companies"
                      data-toggle="modal"
                      className="btn btn-md btn-primary margin-right-20"
                    >
                      Change Car!
                    </a>
                    <button
                      className="btn btn-md btn-primary"
                    >
                      Book Now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="row Washing_Card">
            <div className="col-md-4">
              <img
                src="https://www.speedcarwash.com/images/services/platinum-wash.jpg"
                alt=""
                width="100%"
              />
            </div>
            <div className="col-md-8">
              <h2 className="shorter">
                PLATINUM WASH<strong> @ Rs.1400</strong>
              </h2>
              <hr />

              <div className="row">
               
                <p className="card_description">
                  Complete dry cleaning of a interior including seats
                  (carpet/leather), roof, mats and boot + Complete vacuuming of
                  cars incl. seats and boot + Washing and cleaning of foot mats
                  + Pre washing of car + Foam cleaning of exterior + Tyre arches
                  cleaning + Underbody wash + Engine hot water wash and dressing
                  + Washing and cleaning of door frames + Side doors cleaning
                  and polishing +&nbsp;Dash board cleaning and polishing + Tyre
                  and alloy polishing + Scratch proof windshield spray + Car
                  perfume spray
                </p>
                <p></p>
                <div className="col-md-8">
                  <div className="h-social-share">
                    <a
                      href="http://www.facebook.com/share.php?u=https://www.speedcarwash.com/scw-washing&amp;title=PLATINUM WASH"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="so-fa"></div>
                    </a>

                    <a
                      href="http://twitter.com/intent/tweet?status=PLATINUM WASH+https://www.speedcarwash.com/scw-washing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="so-tw"></div>
                    </a>

                    <a
                      href="https://plus.google.com/share?url=https://www.speedcarwash.com/scw-washing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="so-lin"></div>
                    </a>

                    <a
                      href="whatsapp://send?text=Complete dry cleaning of a interior including seats (carpet/leather), roof, mats and boot + Complete vacuuming of cars incl. seats and boot + Washing and cleaning of foot mats + Pre washing of car + Foam cleaning of exterior + Tyre arches cleaning + Underbody wash + Engine hot water wash and dressing + Washing and cleaning of door frames + Side doors cleaning and polishing +&nbsp;Dash board cleaning and polishing + Tyre and alloy polishing + Scratch proof windshield spray + Car perfume spray - https://www.speedcarwash.com/scw-washing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="so-what"></div>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <form action="booking.php" method="post" id="3">
                    <input type="hidden" name="service" value="3" />
                  </form>

                  <a
                    href="#car_companies"
                    data-toggle="modal"
                    className="btn btn-md btn-primary margin-right-20"
                  >
                    Change Car!
                  </a>

                  <button
                    className="btn btn-md btn-primary"
                  >
                    Book Now!
                  </button>
                </div>
              </div>
            </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="row Washing_Card">
              <div className="col-md-4">
                <img
                  src="https://www.speedcarwash.com/images/services/gold-wash.jpg"
                  alt=""
                  width="100%"
                />
              </div>

              <div className="col-md-8">
                <h2 className="shorter">
                  GOLD WASH<strong> @ Rs.500</strong>
                </h2>
                <hr />

                <div className="row">
                  <p className="card_description">
                    Complete vacuuming of cars incl. seats and boot + Washing
                    and cleaning of foot mats + Body Shampooing and washing
                    including door frames + Tyre arches cleaning + Underbody
                    wash + Engine hot water wash and dressing + Side doors
                    cleaning + Dash board cleaning and polishing + tires and
                    alloy wheels treatment + Car perfume spray
                  </p>
                  <p></p>
                  <div className="col-md-8">
                    <div className="h-social-share">
                      <a
                        href="http://www.facebook.com/share.php?u=https://www.speedcarwash.com/scw-washing&amp;title=GOLD WASH"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="so-fa"></div>
                      </a>

                      <a
                        href="http://twitter.com/intent/tweet?status=GOLD WASH+https://www.speedcarwash.com/scw-washing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="so-tw"></div>
                      </a>

                      <a
                        href="https://plus.google.com/share?url=https://www.speedcarwash.com/scw-washing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="so-lin"></div>
                      </a>

                      <a
                        href="whatsapp://send?text=Complete vacuuming of cars incl. seats and boot + Washing and cleaning of foot mats + Body Shampooing and washing including door frames + Tyre arches cleaning + Underbody wash + Engine hot water wash and dressing + Side doors cleaning + Dash board cleaning and polishing + tires and alloy wheels treatment + Car perfume spray - https://www.speedcarwash.com/scw-washing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="so-what"></div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <form action="booking.php" method="post" id="2">
                      <input type="hidden" name="service" value="2" />
                    </form>

                    <a
                      href="#car_companies"
                      data-toggle="modal"
                      className="btn btn-md btn-primary margin-right-20"
                    >
                      Change Car!
                    </a>

                    <button
                      className="btn btn-md btn-primary"
                    >
                      Book Now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>

        {/* Add Dashboard content here */}
      </div>
    </div>
  );
};

export default Dashboard;
