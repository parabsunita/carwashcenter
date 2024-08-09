import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  TextField,
  Tooltip,
  IconButton,
  Grid,
  InputLabel,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomTable from '../components/CustomTable';
import "../css/Payments.css"; // Import the CSS file

const initialPaymentData = [
  { id: 1, customerName: 'John Doe', paymentAmount: 100, paymentStatus: 'Completed', accountStatus: 'Active' },
  { id: 2, customerName: 'Jane Smith', paymentAmount: 200, paymentStatus: 'Pending', accountStatus: 'Active' },
  { id: 3, customerName: 'Alice Johnson', paymentAmount: 150, paymentStatus: 'Completed', accountStatus: 'Closed' },
];

const statusColors = {
  Completed: '#4CAF50', // Green
  Pending: '#FFEB3B',   // Yellow
  NotPaid: '#F44336',   // Red
};

const getStatusColor = (payment) => {
  if (payment.paymentStatus === 'Completed') {
    return statusColors.Completed;
  } else if (payment.paymentAmount > 0 && payment.paymentStatus === 'Pending') {
    return statusColors.Pending;
  } else {
    return statusColors.NotPaid;
  }
};

const Payments = () => {
  const [open, setOpen] = useState(false);
  const [payments, setPayments] = useState(initialPaymentData);
  const [currentPayment, setCurrentPayment] = useState(null);
  const [formValues, setFormValues] = useState({
    customerName: '',
    paymentAmount: '',
    paymentStatus: '',
    accountStatus: '',
  });

  const handleOpen = (payment = null) => {
    if (payment) {
      setCurrentPayment(payment);
      setFormValues({
        customerName: payment.customerName,
        paymentAmount: payment.paymentAmount,
        paymentStatus: payment.paymentStatus,
        accountStatus: payment.accountStatus,
      });
    } else {
      setCurrentPayment(null);
      setFormValues({
        customerName: '',
        paymentAmount: '',
        paymentStatus: '',
        accountStatus: '',
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
    const newPayment = {
      id: Date.now(),
      ...formValues,
    };

    if (currentPayment) {
      setPayments(payments.map((payment) =>
        payment.id === currentPayment.id ? newPayment : payment
      ));
    } else {
      setPayments([...payments, newPayment]);
    }

    handleClose();
  };

  const handleDelete = (id) => {
    setPayments(payments.filter((payment) => payment.id !== id));
  };

  const tableData = {
    headings: [
      { title: 'Customer Name', field: 'customerName', width: 2 },
      { title: 'Payment Amount', field: 'paymentAmount', width: 2 },
      { title: 'Payment Status', field: 'paymentStatus', width: 2 },
      { title: 'Account Status', field: 'accountStatus', width: 2 },
    ],
    data: payments.map(payment => ({
      ...payment,
      paymentStatus: (
        <Box
          sx={{
            backgroundColor: getStatusColor(payment),
            color: '#fff',
            padding: '4px 8px',
            borderRadius: '12px',
            textAlign: 'center',
          }}
        >
          {payment.paymentStatus}
        </Box>
      ),
    })),
    actions: [
      {
        label: 'Edit',
        color: 'primary',
        handler: (payment) => handleOpen(payment),
        icon: <EditIcon />,
      },
      {
        label: 'Delete',
        color: 'error',
        handler: (payment) => handleDelete(payment.id),
        icon: <DeleteIcon />,
      },
    ],
  };

  return (
    <div className="payments-container">
      <Box className="header-container">
        <Typography variant="h6" component="h1" className="header-title">
          Payment Details
        </Typography>
        <Button variant="contained" onClick={() => handleOpen()} className="add-payment-button">
          Add Payment
        </Button>
      </Box>
      <CustomTable tableData={tableData} />

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
                {currentPayment ? "Edit Payment" : "Add Payment"}
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <InputLabel htmlFor="customerName">Customer Name</InputLabel>
                <TextField
                  id="customerName"
                  name="customerName"
                  variant="outlined"
                  fullWidth
                  value={formValues.customerName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="paymentAmount">Payment Amount</InputLabel>
                <TextField
                  id="paymentAmount"
                  name="paymentAmount"
                  variant="outlined"
                  type="number"
                  fullWidth
                  value={formValues.paymentAmount}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="paymentStatus">Payment Status</InputLabel>
                <TextField
                  id="paymentStatus"
                  name="paymentStatus"
                  variant="outlined"
                  fullWidth
                  value={formValues.paymentStatus}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="accountStatus">Account Status</InputLabel>
                <TextField
                  id="accountStatus"
                  name="accountStatus"
                  variant="outlined"
                  fullWidth
                  value={formValues.accountStatus}
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
              {currentPayment ? "Save Changes" : "Add Payment"}
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

export default Payments;
