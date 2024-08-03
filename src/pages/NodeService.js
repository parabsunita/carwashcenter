import React, { useState } from "react";
import {
  Box,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  TextField,
  Grid,
  InputLabel,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

// Custom TabPanel component
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

// Accessibility props for Tabs
const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
};

const NodeService = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: 1, padding: "20px" }}>
        <Box sx={{ bgcolor: "background.paper" }} spacing={2} mt={3}>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Service Type" {...a11yProps(0)} />
              <Tab label="Product Type" {...a11yProps(1)} />
              <Tab label="Service Type" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <Box sx={{ p: 3 }}>
            {value === 0 && (
              <TabPanel value={value} index={0} dir={theme.direction}>
                <div>
                  <Formik
                    initialValues={{
                      carWash: "$450",
                      exteriorInteriorWash: "$500",
                      steamWash: "$600",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                      console.log(values);
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <Box mb={3} sx={{ mt: 2 }}>
                          <Grid container spacing={2} alignItems="center">
                            <Grid item xs={3}>
                              <InputLabel htmlFor="carWash">
                                Car Wash
                              </InputLabel>
                            </Grid>
                            <Grid item xs={5}>
                              <Field
                                name="carWash"
                                as={TextField}
                                variant="outlined"
                                fullWidth
                                error={touched.carWash && !!errors.carWash}
                                helperText={touched.carWash && errors.carWash}
                              />
                            </Grid>
                          </Grid>
                        </Box>

                        <Box mb={3} sx={{ mt: 2 }}>
                          <Grid container spacing={2} alignItems="center">
                            <Grid item xs={3}>
                              <InputLabel htmlFor="exteriorInteriorWash">
                                Exterior and Interior Wash
                              </InputLabel>
                            </Grid>
                            <Grid item xs={5}>
                              <Field
                                name="exteriorInteriorWash"
                                as={TextField}
                                variant="outlined"
                                fullWidth
                                error={
                                  touched.exteriorInteriorWash &&
                                  !!errors.exteriorInteriorWash
                                }
                                helperText={
                                  touched.exteriorInteriorWash &&
                                  errors.exteriorInteriorWash
                                }
                              />
                            </Grid>
                          </Grid>
                        </Box>

                        <Box mb={3} sx={{ mt: 2 }}>
                          <Grid container spacing={2} alignItems="center">
                            <Grid item xs={3}>
                              <InputLabel htmlFor="steamWash">
                                Steam Wash
                              </InputLabel>
                            </Grid>
                            <Grid item xs={5}>
                              <Field
                                name="steamWash"
                                as={TextField}
                                variant="outlined"
                                fullWidth
                                error={touched.steamWash && !!errors.steamWash}
                                helperText={
                                  touched.steamWash && errors.steamWash
                                }
                              />
                            </Grid>
                          </Grid>
                        </Box>

                        <Box mb={3} sx={{ mt: 2 }}>
                          <Grid container spacing={2} alignItems="center">
                            <Grid item xs={3}>
                             
                            </Grid>
                            <Grid item xs={5}>
                            <Button variant="contained" onClick={handleOpen} sx={{ width: '100%' }}>
                              Add button
                            </Button>
                            </Grid>
                          </Grid>
                        </Box>

                        
                      </Form>
                    )}
                  </Formik>
                </div>
              </TabPanel>
            )}
            {value === 1 && (
              <TabPanel value={value} index={1} dir={theme.direction}>
                Item Two
              </TabPanel>
            )}
            {value === 2 && (
              <TabPanel value={value} index={2} dir={theme.direction}>
                Item Three
              </TabPanel>
            )}
          </Box>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "50%",
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography variant="h6" component="h2">
                Modal Title
              </Typography>
              <Typography sx={{ mt: 2 }}>
                This is the content of the modal.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleClose}
                sx={{ mt: 2 }}
              >
                Close
              </Button>
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};

export default NodeService;
