import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  TextField,
  Grid,
  InputLabel,
  IconButton,
  Tooltip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "../css/Customers.css"; // Import the CSS file

const initialCustomerData = [
  { id: 1, name: "John Doe", appointmentDate: "2024-08-10", service: "Car Wash", status: "Completed", contact: "123-456-7890" },
  { id: 2, name: "Jane Smith", appointmentDate: "2024-08-15", service: "Exterior and Interior Wash", status: "Pending", contact: "987-654-3210" },
  { id: 3, name: "Alice Johnson", appointmentDate: "2024-08-20", service: "Steam Wash", status: "Completed", contact: "456-789-1230" },
];

const CustomerDetails = () => {
  const [open, setOpen] = useState(false);
  const [customers, setCustomers] = useState(initialCustomerData);
  const [currentCustomer, setCurrentCustomer] = useState(null);
  const [formValues, setFormValues] = useState({
    name: "",
    appointmentDate: "",
    service: "",
    status: "",
    contact: "",
  });

  const handleOpen = (customer = null) => {
    if (customer) {
      setCurrentCustomer(customer);
      setFormValues({
        name: customer.name,
        appointmentDate: customer.appointmentDate,
        service: customer.service,
        status: customer.status,
        contact: customer.contact,
      });
    } else {
      setCurrentCustomer(null);
      setFormValues({
        name: "",
        appointmentDate: "",
        service: "",
        status: "",
        contact: "",
      });
    }
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const newCustomer = {
      id: Date.now(),
      ...formValues,
    };

    if (currentCustomer) {
      setCustomers(customers.map((customer) =>
        customer.id === currentCustomer.id ? newCustomer : customer
      ));
    } else {
      setCustomers([...customers, newCustomer]);
    }

    handleClose();
  };

  const handleDelete = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  return (
    <div className="customer-details-container">
      <Box className="header-container">
        <Typography variant="h6" component="h1" className="header-title">
          Customer Details
        </Typography>
        <Button variant="contained" onClick={() => handleOpen()} className="add-customer-button">
          Add Customer
        </Button>
      </Box>
      <Box>
        <Grid container spacing={2}>
          {customers.map((customer) => (
            <Grid item xs={12} md={6} lg={4} key={customer.id}>
              <Box className="customer-card">
                <Typography variant="h6">{customer.name}</Typography>
                <Typography variant="body2">Appointment Date: {customer.appointmentDate}</Typography>
                <Typography variant="body2">Service: {customer.service}</Typography>
                <Typography variant="body2">Status: {customer.status}</Typography>
                <Typography variant="body2">Contact: {customer.contact}</Typography>
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                  <Tooltip title="Edit Customer">
                    <IconButton
                      size="small"
                      onClick={() => handleOpen(customer)}
                      className="edit-button"
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete Customer">
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => handleDelete(customer.id)}
                      className="delete-button"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
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
              position: 'relative'
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{ position: 'absolute', top: 8, right: 8 }}
            >
              <CloseIcon />
            </IconButton>
            <Box sx={{ borderBottom: '2px solid', borderBottomColor: (theme) => theme.palette.text.primary, mb: 2 }}>
              <Typography variant="h6" component="h2" sx={{ color: 'text.primary', fontSize: '1.25rem', pb: 1 }}>
                {currentCustomer ? "Edit Customer" : "Add Customer"}
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <InputLabel htmlFor="name">Name</InputLabel>
                <TextField
                  id="name"
                  name="name"
                  variant="outlined"
                  fullWidth
                  value={formValues.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="appointmentDate">Appointment Date</InputLabel>
                <TextField
                  id="appointmentDate"
                  name="appointmentDate"
                  variant="outlined"
                  type="date"
                  fullWidth
                  value={formValues.appointmentDate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="service">Service</InputLabel>
                <TextField
                  id="service"
                  name="service"
                  variant="outlined"
                  fullWidth
                  value={formValues.service}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="status">Status</InputLabel>
                <TextField
                  id="status"
                  name="status"
                  variant="outlined"
                  fullWidth
                  value={formValues.status}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="contact">Contact</InputLabel>
                <TextField
                  id="contact"
                  name="contact"
                  variant="outlined"
                  fullWidth
                  value={formValues.contact}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              sx={{ mt: 2 }}
            >
              {currentCustomer ? "Save Changes" : "Add Customer"}
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={handleClose}
              sx={{ mt: 2, ml: 2 }}
            >
              Cancel
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default CustomerDetails;
