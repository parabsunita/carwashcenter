import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Grid, Paper, Button, TextField } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTheme } from "@mui/material/styles";
import carWashImage from "../images/car-wash-logo-bhUYW2jRQcqLo9UuMyEvew-JHZ_q0K4Qaya3JpzRgX6Mg.jpeg"; // Adjust the path accordingly

const validationSchema = Yup.object({
  CentreName: Yup.string().required('Centre Name is required'),
  CentreEmail: Yup.string().email('Invalid email format').required('Centre Email is required'),
  Password: Yup.string().required('Password is required'),
  CentreMobile: Yup.string()
    .required('Centre Mobile is required')
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits'),
});

const SignupPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    localStorage.setItem("authToken", "dummyToken");
    navigate("/dashboard");
  };

  return (
    <Box
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        backgroundColor: theme.palette.custom.limedSpruce,
      }}
    >
      <Grid container sx={{ height: "100%" }}>
        <Grid
          item
          xs={12}
          md={7}
          style={{
            backgroundImage: `url(${carWashImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          md={5}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: theme.spacing(4),
          }}
        >
          <Paper
            elevation={3}
            style={{
              padding: theme.spacing(4),
              backgroundColor: theme.palette.custom.regentGray,
              opacity: 0.9,
              borderRadius: theme.shape.borderRadius,
              width: '100%',
              maxWidth: '400px',
            }}
          >
            <Box width="100%">
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                align="center"
                color={theme.palette.primary.main}
              >
                Welcome to Car Wash
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                align="center"
                color={theme.palette.primary1.main}
              >
                Signup to get started
              </Typography>
              <Formik
                initialValues={{ CentreName: '', CentreEmail: '', Password: '', CentreMobile: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    handleSubmit(values);
                  }, 400);
                }}
              >
                {({ isSubmitting, errors, touched }) => (
                  <Form>
                    <Box display="flex" flexDirection="column" alignItems="flex-end" justifyContent="center">
                      <Field name="CentreName">
                        {({ field }) => (
                          <TextField
                            {...field}
                            label="Centre Name"
                            margin="normal"
                            fullWidth
                            error={touched.CentreName && !!errors.CentreName}
                            helperText={touched.CentreName && errors.CentreName}
                            sx={{ '& label.Mui-focused': { color: theme.palette.primary.main } }}
                          />
                        )}
                      </Field>
                      <ErrorMessage name="CentreName" component="div" style={{ color: 'red' }} />

                      <Field name="CentreEmail">
                        {({ field }) => (
                          <TextField
                            {...field}
                            type="email"
                            label="Centre Email"
                            margin="normal"
                            fullWidth
                            error={touched.CentreEmail && !!errors.CentreEmail}
                            helperText={touched.CentreEmail && errors.CentreEmail}
                            sx={{ '& label.Mui-focused': { color: theme.palette.primary.main } }}
                          />
                        )}
                      </Field>
                      <ErrorMessage name="CentreEmail" component="div" style={{ color: 'red' }} />

                      <Field name="Password">
                        {({ field }) => (
                          <TextField
                            {...field}
                            type="password"
                            label="Password"
                            margin="normal"
                            fullWidth
                            error={touched.Password && !!errors.Password}
                            helperText={touched.Password && errors.Password}
                            sx={{ '& label.Mui-focused': { color: theme.palette.primary.main } }}
                          />
                        )}
                      </Field>
                      <ErrorMessage name="Password" component="div" style={{ color: 'red' }} />

                      <Field name="CentreMobile">
                        {({ field }) => (
                          <TextField
                            {...field}
                            label="Centre Mobile"
                            margin="normal"
                            fullWidth
                            error={touched.CentreMobile && !!errors.CentreMobile}
                            helperText={touched.CentreMobile && errors.CentreMobile}
                            sx={{ '& label.Mui-focused': { color: theme.palette.primary.main } }}
                          />
                        )}
                      </Field>
                      <ErrorMessage name="CentreMobile" component="div" style={{ color: 'red' }} />

                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                        sx={{ mt: 2, backgroundColor: theme.palette.secondary.main }}
                      >
                        Signup
                      </Button>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignupPage;
