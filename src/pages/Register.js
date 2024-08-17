import React from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Box,
  Grid,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  InputLabel,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { carwash_bg, Carwash_bgm, logo } from "../assets/images/image";
import { useTheme } from "@mui/material/styles";

const Register = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    localStorage.setItem("authToken", "dummyToken");
    navigate("/dashboard");
  };

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <section className="singin_sec_new">
      <div className="singin_sec_new_left">
        <div className="post-banner post-banner2">
          <h2>Welcome to Car Wash</h2>
          <p>Washing away the dirt. Sparkling like new..</p>
          <img src={logo} alt="" className="brand_logo_signup" />
        </div>
        <div className="background_image_wrapper">
  <img src={Carwash_bgm} alt="" className="background_image" />
</div>

      </div>

      <div className="right-wrapper regiter">
        <div className="">
          <div className="sign_head">
            <h1>Register</h1>
          </div>

          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ touched, errors }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Box mb={0} sx={{ mt: 2 }}>
                      <Field
                        name="shop_name"
                        as={TextField}
                        label="Shop Name"
                        variant="outlined"
                        fullWidth
                        error={touched.shop_name && !!errors.shop_name}
                        helperText={touched.shop_name && errors.shop_name}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box mb={0} sx={{ mt: 2 }}>
                      <Field
                        name="owner"
                        as={TextField}
                        label="Owner Name"
                        variant="outlined"
                        fullWidth
                        error={touched.owner && !!errors.owner}
                        helperText={touched.owner && errors.owner}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box mb={0} sx={{ mt: 2 }}>
                      <Field
                        name="number"
                        as={TextField}
                        label="Mobile Number"
                        variant="outlined"
                        fullWidth
                        error={touched.Number && !!errors.Number}
                        helperText={touched.Number && errors.Number}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box mb={0} sx={{ mt: 2 }}>
                      <Field
                        name="Age"
                        as={TextField}
                        label="Age"
                        variant="outlined"
                        fullWidth
                        error={touched.owner && !!errors.owner}
                        helperText={touched.owner && errors.owner}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box mb={0} sx={{ mt: 2 }}>
                      <FormControl fullWidth variant="outlined">
                        <InputLabel id="state-label">State</InputLabel>
                        <Field
                          as={Select}
                          name="state"
                          labelId="state-label"
                          id="state-select"
                          label="State"
                          fullWidth
                          error={touched.state && !!errors.state}
                          helperText={touched.state && errors.state}
                        >
                          <MenuItem value="" disabled>Select State</MenuItem>
                          {states.map((state) => (
                            <MenuItem key={state} value={state}>
                              {state}
                            </MenuItem>
                          ))}
                        </Field>
                        {touched.state && errors.state ? (
                          <FormHelperText error>{errors.state}</FormHelperText>
                        ) : null}
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box mb={0} sx={{ mt: 2 }}>
                      <Field
                        name="owner"
                        as={TextField}
                        label="Owner Name"
                        variant="outlined"
                        fullWidth
                        error={touched.owner && !!errors.owner}
                        helperText={touched.owner && errors.owner}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box mb={0} sx={{ mt: 2 }}>
                      <Field
                        name="Address"
                        as={TextField}
                        label="Address"
                        variant="outlined"
                        fullWidth
                        error={touched.Address && !!errors.Address}
                        helperText={touched.Address && errors.Address}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box mb={0} sx={{ mt: 2 }}>
                      <Field
                        name="gst_number"
                        as={TextField}
                        label="GST Number"
                        variant="outlined"
                        fullWidth
                        error={touched.owner && !!errors.owner}
                        helperText={touched.owner && errors.owner}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box mb={0} sx={{ mt: 2 }}>
                      <Field
                        name="Email"
                        as={TextField}
                        label="Email Id"
                        variant="outlined"
                        fullWidth
                        error={touched.owner && !!errors.owner}
                        helperText={touched.owner && errors.owner}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box mb={0} sx={{ mt: 2 }}>
                      <Field
                        name="owner"
                        as={TextField}
                        label="Owner Name"
                        variant="outlined"
                        fullWidth
                        error={touched.owner && !!errors.owner}
                        helperText={touched.owner && errors.owner}
                      />
                    </Box>
                  </Grid>
                </Grid>
                <Box display="flex" justifyContent="center" mt={2} width="100%">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ width: '60%' }} // Adjust width to 60%
                    className="custom-button"
                  >
                    Register
                  </Button>
                </Box>

              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Register;
