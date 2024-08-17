import React from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Link,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { carwash_bg, logo, signup_bg } from "../assets/images/image";
import { useTheme } from "@mui/material/styles";
const LoginPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    localStorage.setItem("authToken", "dummyToken");
    navigate("/dashboard");
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    // <Container maxWidth="sm">
    //   <Typography variant="h4" component="h1" gutterBottom>
    //     Login
    //   </Typography>
    //   <Formik
    //     initialValues={{ email: "", password: "" }}
    //     validationSchema={validationSchema}
    //     onSubmit={(values) => handleSubmit(values)}
    //   >
    //     {({ errors, touched }) => (
    //       <Form>
    //         <Box mb={3}>
    //           <Field
    //             name="email"
    //             as={TextField}
    //             label="Email"
    //             variant="outlined"
    //             fullWidth
    //             error={touched.email && !!errors.email}
    //             helperText={touched.email && errors.email}
    //           />
    //         </Box>
    //         <Box mb={3}>
    //           <Field
    //             name="password"
    //             as={TextField}
    //             label="Password"
    //             type="password"
    //             variant="outlined"
    //             fullWidth
    //             error={touched.password && !!errors.password}
    //             helperText={touched.password && errors.password}
    //           />
    //         </Box>
    //         <Box
    //           display="flex"
    //           justifyContent="space-between"
    //           alignItems="center"
    //         >
    //           <Button variant="contained" color="primary" type="submit">
    //             Login
    //           </Button>
    //           <Link component={RouterLink} to="/signup" variant="body2">
    //             Don't have an account? Sign up here
    //           </Link>
    //         </Box>
    //       </Form>
    //     )}
    //   </Formik>
    // </Container>
    <section className="singin_sec_new">
    <div className="singin_sec_new_left">
      <div className="post-banner post-banner2 ">
        <h2>Welcome to Car Wash</h2>
        <p>
          Washing away the dirt. Sparkling like new..
        </p>
        <img src={logo} alt="" className="brand_logo_signup" />
      </div>
      <img src={carwash_bg} alt="" className="background_image"/>
    </div>

    <div className="right-wrapper">

      <div className="">
        {/* <img src={logo}
            
            className="logo1"
            alt="Logo"
            
          /> */}
        <div className="sign_head">
          <h1>Log In</h1>
          <p>Let's get started with 30 day trial</p>
        </div>
        <Formik
  initialValues={{ email: "", password: "" }}
  validationSchema={validationSchema}
  onSubmit={(values) => handleSubmit(values)}
>
  {({ errors, touched }) => (
    <Form>
      <Box mb={3} sx={{ mt: 2 }}>
        <Field
          name="email"
          as={TextField}
          label="Email"
          variant="outlined"
          fullWidth
          error={touched.email && !!errors.email}
          helperText={touched.email && errors.email}
         
        />
      </Box>
      <Box mb={3}>
        <Field
          name="password"
          as={TextField}
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          error={touched.password && !!errors.password}
          helperText={touched.password && errors.password}
     
        />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            mt: 2,
            p: 1,
            mb: 1,
            width: 200,
            backgroundColor: theme.palette.custom.signup_Button,
            border: `1.5px solid transparent`,
            '&:hover': {
              backgroundColor: '#ffffff',
              border: `1.5px solid ${theme.palette.custom.signup_Button}`,
              color: theme.palette.custom.signup_Button,
            },
          }}
          className="custom-button"
        >
          Login
        </Button>
        <Link component={RouterLink} to="/register" variant="body2">
          Don't have an account? Sign up here
        </Link>
      </Box>
      {/* <Link component={RouterLink} to="/register" variant="body2">
        Register
      </Link> */}
    </Form>
  )}
</Formik>

      </div>




    </div>
  </section>
  );

};

export default LoginPage;
