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
  Typography,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import "../css/ContactDetails.css"; // Import the CSS file

const ContactDetails = () => {
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
    shop_name: Yup.string().required("Shop name is required"),
    owner: Yup.string().required("Owner name is required"),
    number: Yup.string().required("Mobile number is required"),
    age: Yup.number().required("Age is required").positive().integer(),
    state: Yup.string().required("State is required"),
    address: Yup.string().required("Address is required"),
    gst_number: Yup.string().required("GST number is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
  });

  return (
    <section className="contact-details-container-section">
      <div className="main-container">
      <Box className="header-container">
        <Typography variant="h5" component="h1" className="header-title">
          Contact Details
        </Typography>
      </Box>
      <Box className="form-content">
        <Formik
          initialValues={{
            shop_name: "",
            owner: "",
            number: "",
            age: "",
            state: "",
            address: "",
            gst_number: "",
            email: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ touched, errors }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="shop_name"
                    as={TextField}
                    label="Shop Name"
                    variant="outlined"
                    fullWidth
                    error={touched.shop_name && !!errors.shop_name}
                    helperText={touched.shop_name && errors.shop_name}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="owner"
                    as={TextField}
                    label="Owner Name"
                    variant="outlined"
                    fullWidth
                    error={touched.owner && !!errors.owner}
                    helperText={touched.owner && errors.owner}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="number"
                    as={TextField}
                    label="Mobile Number"
                    variant="outlined"
                    fullWidth
                    error={touched.number && !!errors.number}
                    helperText={touched.number && errors.number}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="age"
                    as={TextField}
                    label="Age"
                    variant="outlined"
                    fullWidth
                    error={touched.age && !!errors.age}
                    helperText={touched.age && errors.age}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl
                    fullWidth
                    variant="outlined"
                    error={touched.state && !!errors.state}
                  >
                    <InputLabel id="state-label">State</InputLabel>
                    <Field
                      as={Select}
                      name="state"
                      labelId="state-label"
                      id="state-select"
                      label="State"
                      fullWidth
                    >
                      <MenuItem value="" disabled>
                        Select State
                      </MenuItem>
                      {states.map((state) => (
                        <MenuItem key={state} value={state}>
                          {state}
                        </MenuItem>
                      ))}
                    </Field>
                    {touched.state && errors.state && (
                      <FormHelperText error>{errors.state}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="address"
                    as={TextField}
                    label="Address"
                    variant="outlined"
                    fullWidth
                    error={touched.address && !!errors.address}
                    helperText={touched.address && errors.address}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="gst_number"
                    as={TextField}
                    label="GST Number"
                    variant="outlined"
                    fullWidth
                    error={touched.gst_number && !!errors.gst_number}
                    helperText={touched.gst_number && errors.gst_number}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="email"
                    as={TextField}
                    label="Email Id"
                    variant="outlined"
                    fullWidth
                    error={touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                  />
                </Grid>
              </Grid>
              <Box className="form-actions">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="save-button custom-btn-pd"
                >
                  Save
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
    </section>
    
  );
};

export default ContactDetails;
