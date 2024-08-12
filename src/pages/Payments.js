// src/components/Payments.js
import React, { useState } from 'react';
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
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Payments = ({ open, handleClose, payments }) => {
  const [formValues, setFormValues] = useState({
    customerName: '',
    paymentAmount: '',
    paymentStatus: '',
    accountStatus: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Implement save functionality
  };

  return (
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
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            position: 'relative',
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
              Payment Details
            </Typography>
          </Box>
          {/* Payment details content */}
          <Grid container spacing={2}>
            {payments.map((payment) => (
              <Grid item xs={12} key={payment.id}>
                <Typography variant="body1">{payment.customerName}</Typography>
                <Typography variant="body2">{`Amount: $${payment.paymentAmount}`}</Typography>
                <Typography variant="body2">{`Status: ${payment.paymentStatus}`}</Typography>
                <Typography variant="body2">{`Account Status: ${payment.accountStatus}`}</Typography>
              </Grid>
            ))}
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            sx={{ mt: 2 }}
          >
            Save Changes
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
  );
};

export default Payments;
