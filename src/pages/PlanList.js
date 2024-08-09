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
  Checkbox,
  FormControlLabel
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomTable from '../components/CustomTable';
import '../css/PlanList.css'; // Import the CSS file

// Sample services data
const servicesData = [
  { id: 1, name: 'Car Wash', price: 450 },
  { id: 2, name: 'Exterior and Interior Wash', price: 500 },
  { id: 3, name: 'Steam Wash', price: 600 }
];

const PlanList = () => {
  const [open, setOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState({});
  const [plans, setPlans] = useState([]);
  const [currentPlan, setCurrentPlan] = useState(null);
  const [formValues, setFormValues] = useState({ name: '', discount: '' });

  // Open modal for adding or editing a plan
  const handleOpen = (plan = null) => {
    if (plan) {
      setSelectedServices(
        plan.services.reduce((acc, service) => {
          acc[service.id] = true;
          return acc;
        }, {})
      );
      setCurrentPlan(plan);
      setFormValues({ name: plan.name, discount: (plan.discount * 100).toString() });
    } else {
      setSelectedServices({});
      setCurrentPlan(null);
      setFormValues({ name: '', discount: '' });
    }
    setOpen(true);
  };

  // Close modal
  const handleClose = () => setOpen(false);

  // Handle service checkbox change
  const handleServiceChange = (event) => {
    const { id, checked } = event.target;
    setSelectedServices((prev) => ({ ...prev, [id]: checked }));
  };

  // Calculate total price after discount
  const calculateTotalPrice = () => {
    const selected = servicesData.filter(service => selectedServices[service.id]);
    const total = selected.reduce((acc, service) => acc + service.price, 0);
    return total - total * (parseFloat(formValues.discount) / 100 || 0);
  };

  // Save or update the plan
  const handleSave = () => {
    const selected = servicesData.filter(service => selectedServices[service.id]);
    const newPlan = {
      id: Date.now(),
      name: formValues.name,
      services: selected,
      totalPrice: calculateTotalPrice(),
      discount: parseFloat(formValues.discount) / 100 || 0,
    };
    if (currentPlan) {
      setPlans(plans.map(plan => (plan.id === currentPlan.id ? newPlan : plan)));
    } else {
      setPlans([...plans, newPlan]);
    }
    handleClose();
  };

  // Delete a plan
  const handleDelete = (id) => {
    setPlans(plans.filter(plan => plan.id !== id));
  };

  // Table headings
  const headings = [
    { title: 'Plan Name', field: 'name', width: 4 },
    { title: 'Total Price', field: 'totalPrice', width: 2 },
    { title: 'Discount', field: 'discount', width: 2 },
  ];

  // Table actions
  const actions = [
    { label: 'Edit', handler: handleOpen, variant: 'outlined', color: 'primary' },
    { label: 'Delete', handler: handleDelete, variant: 'outlined', color: 'error' }
  ];

  // Table data
  const tableData = {
    headings,
    data: plans.map(plan => ({
      id: plan.id,
      name: plan.name,
      totalPrice: `₹${plan.totalPrice.toFixed(2)}`,
      discount: `${(plan.discount * 100).toFixed(2)}%`,
    })),
    actions
  };

  return (
    <div className="plan-list-container">
      <Box className="header-container">
        <Typography variant="h5" component="h1" className="header-title">
          Plans
        </Typography>
        <Button variant="contained" onClick={() => handleOpen()} className="add-plan-button">
          Add Plan
        </Button>
      </Box>
      <CustomTable tableData={tableData} />
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Box className="modal-container">
            <IconButton
              onClick={handleClose}
              className="close-button"
            >
              <CloseIcon />
            </IconButton>
            <Box className="modal-header">
              <Typography variant="h6" component="h2">
                {currentPlan ? 'Edit Plan' : 'Add Plan'}
              </Typography>
            </Box>
            <Grid container spacing={2} className="form-container">
              <Grid item xs={12}>
                <InputLabel htmlFor="name">Plan Name</InputLabel>
                <TextField
                  id="name"
                  name="name"
                  variant="outlined"
                  fullWidth
                  value={formValues.name}
                  onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="discount">Discount (%)</InputLabel>
                <TextField
                  id="discount"
                  name="discount"
                  variant="outlined"
                  fullWidth
                  value={formValues.discount}
                  onChange={(e) => setFormValues({ ...formValues, discount: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" className="service-label">Select Services:</Typography>
                {servicesData.map(service => (
                  <FormControlLabel
                    key={service.id}
                    control={
                      <Checkbox
                        id={service.id.toString()}
                        checked={!!selectedServices[service.id]}
                        onChange={handleServiceChange}
                      />
                    }
                    label={`${service.name} - ₹${service.price}`}
                  />
                ))}
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">
                  Total Price after {formValues.discount || 0}% Discount: ₹{calculateTotalPrice().toFixed(2)}
                </Typography>
              </Grid>
            </Grid>
            <Box className="modal-actions">
              <Button
                variant="contained"
                color="primary"
                onClick={handleSave}
                className="save-button"
              >
                {currentPlan ? 'Save Changes' : 'Add Plan'}
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={handleClose}
                className="cancel-button"
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

export default PlanList;
