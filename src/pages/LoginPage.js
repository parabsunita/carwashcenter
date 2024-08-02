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

const LoginPage = () => {
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
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <Box mb={3}>
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
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button variant="contained" color="primary" type="submit">
                Login
              </Button>
              <Link component={RouterLink} to="/signup" variant="body2">
                Don't have an account? Sign up here
              </Link>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginPage;
