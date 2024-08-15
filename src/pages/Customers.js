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
import PaymentIcon from "@mui/icons-material/Payment"; // Import payment icon
import "../css/Customers.css"; // Import the CSS file

const initialCustomerData = [
  { id: 1, name: "John Doe", appointmentDate: "2024-08-10", service: "Car Wash", status: "Completed", contact: "123-456-7890" },
  { id: 2, name: "Jane Smith", appointmentDate: "2024-08-15", service: "Exterior and Interior Wash", status: "Pending", contact: "987-654-3210" },
  { id: 3, name: "Alice Johnson", appointmentDate: "2024-08-20", service: "Steam Wash", status: "Completed", contact: "456-789-1230" },
];

const initialPaymentData = [
  { id: 1, customerName: 'John Doe', paymentAmount: 100, paymentStatus: 'Completed', accountStatus: 'Active' },
  { id: 2, customerName: 'Jane Smith', paymentAmount: 200, paymentStatus: 'Pending', accountStatus: 'Active' },
  { id: 3, customerName: 'Alice Johnson', paymentAmount: 150, paymentStatus: 'Completed', accountStatus: 'Closed' },
];

const CustomerDetails = () => {
  const [open, setOpen] = useState(false);
  const [showPayments, setShowPayments] = useState(false); // New state to control payment modal
  const [customers, setCustomers] = useState(initialCustomerData);
  const [currentCustomer, setCurrentCustomer] = useState(null);
  const [formValues, setFormValues] = useState({
    name: "",
    appointmentDate: "",
    service: "",
    status: "",
    contact: "",
  });
  const [currentPayments, setCurrentPayments] = useState([]);

  const handleOpen = (customer = null) => {
    setShowPayments(false); // Ensure form modal is in the correct state
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

  const handlePaymentsOpen = (customer) => {
    setShowPayments(true);
    setCurrentCustomer(customer);
    setCurrentPayments(initialPaymentData.filter(payment => payment.customerName === customer.name));
    setOpen(true);
  };

  return (
    <div className="main-container">
      <Box className="header-container">
        <Typography variant="h5" component="h1" className="header-title">
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
                <Grid container direction="column" spacing={1}>
                  <Grid item>
                    <Typography
                      variant="h6"
                      sx={{
                        backgroundColor: '#f9f9bf',  // Highlight background
                        fontWeight: 'bold',         // Make text bold
                        padding: '4px',             // Add padding
                        borderRadius: '4px'         // Optional: Add border-radius for rounded corners
                      }}
                    >
                      {customer.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      <strong>Appointment Date:</strong> {customer.appointmentDate}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      <strong>Service:</strong> {customer.service}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      <strong>Status:</strong> {customer.status}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      <strong>Contact:</strong> {customer.contact}
                    </Typography>
                  </Grid>
                </Grid>
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
                  <Tooltip title="View Payments">
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => handlePaymentsOpen(customer)} // Open payments modal
                      className="payments-button"
                    >
                      <PaymentIcon />
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
            {!showPayments ? (
              <>
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
              </>
            ) : (
              <>
                <Box sx={{ borderBottom: '2px solid', borderBottomColor: (theme) => theme.palette.text.primary, mb: 2 }}>
                  <Typography variant="h6" component="h2" sx={{ color: 'text.primary', fontSize: '1.25rem', pb: 1 }}>
                    Payments for {currentCustomer?.name}
                  </Typography>
                </Box>
                <Grid container spacing={2}>
                  {currentPayments.map((payment) => (
                    <Grid item xs={12} key={payment.id}>
                    <Box
                      className="payment-card"
                      sx={{
                        padding: '16px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        backgroundColor: '#f9f9f9',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        marginBottom: '16px'
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={4}>
                          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            Payment Amount:
                          </Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <Typography variant="body1">
                            ${payment.paymentAmount}
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                            Payment Status:
                          </Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <Typography variant="body2">
                            {payment.paymentStatus}
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                            Account Status:
                          </Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <Typography variant="body2">
                            {payment.accountStatus}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                  ))}
                </Grid>
                {/* <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleClose}
                  sx={{ mt: 2 }}
                >
                  Close
                </Button> */}
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default CustomerDetails;
