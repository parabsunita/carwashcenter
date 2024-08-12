import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Modal, Backdrop, Fade } from '@mui/material';
import CustomTable from '../components/CustomTable';
import '../css/ServiceBookingTable.css'; // Import the CSS file

const ServiceBookingTable = () => {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [statusToChange, setStatusToChange] = useState('');

  // Sample booking data with date and time
  const bookings = [
    { id: 1, customer: 'John Doe', service: 'Car Wash', status: 'Pending', date: '2024-08-12', time: '10:00 AM' },
    { id: 2, customer: 'Jane Smith', service: 'Interior Wash', status: 'Completed', date: '2024-08-11', time: '11:30 AM' },
    // Add more sample bookings as needed
  ];

  const handleStatusChangeClick = (booking, status) => {
    setSelectedBooking(booking);
    setStatusToChange(status);
    setOpenConfirmation(true);
  };

  const handleConfirmStatusChange = () => {
    // Update booking status
    const updatedBookings = bookings.map(booking =>
      booking.id === selectedBooking.id ? { ...booking, status: statusToChange } : booking
    );
    console.log('Updated bookings:', updatedBookings);

    setOpenConfirmation(false);
    setSelectedBooking(null);
    setStatusToChange('');
  };

  const handleCloseConfirmation = () => {
    setOpenConfirmation(false);
    setSelectedBooking(null);
    setStatusToChange('');
  };

  // Table headings including Date and Time
  const headings = [
    { title: 'Customer', field: 'customer', width: 3 },
    { title: 'Service', field: 'service', width: 3 },
    { title: 'Status', field: 'status', width: 2 },
    { title: 'Date', field: 'date', width: 2 },
    { title: 'Time', field: 'time', width: 2 },
  ];

  // Table data
  const tableData = {
    headings,
    data: bookings.map(booking => ({
      id: booking.id,
      customer: booking.customer,
      service: booking.service,
      status: booking.status,
      date: booking.date,
      time: booking.time,
    })),
    onStatusChangeClick: handleStatusChangeClick,
  };

  return (
    <div className="service-booking-table-container">
      <Box className="header-container">
        <Typography variant="h5" component="h1" className="header-title">
          Service Bookings
        </Typography>
      </Box>
      <CustomTable tableData={tableData} />
      <Modal
        open={openConfirmation}
        onClose={handleCloseConfirmation}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={openConfirmation}>
          <Box className="confirmation-modal-container">
            <Typography variant="h6">
              Are you sure you want to change the status to "{statusToChange}"?
            </Typography>
            <Box className="confirmation-actions">
              <Button
                variant="contained"
                color="primary"
                onClick={handleConfirmStatusChange}
              >
                Confirm
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={handleCloseConfirmation}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ServiceBookingTable;
