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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomTable from "../components/CustomTable";
import "../css/Services.css"; // Import the CSS file

const NodeService = () => {
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const [services, setServices] = useState([
    { id: 1, name: "Car Wash", price: "₹450" },
    { id: 2, name: "Exterior and Interior Wash", price: "₹500" },
    { id: 3, name: "Steam Wash", price: "₹600" },
  ]);

  const [formValues, setFormValues] = useState({ name: "", price: "" });

  const handleOpen = (service = null) => {
    setEditMode(!!service);
    setCurrentService(service);
    setFormValues(service ? { name: service.name, price: service.price } : { name: "", price: "" });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    if (editMode) {
      setServices(services.map(service =>
        service.id === currentService.id
          ? { ...service, ...formValues }
          : service
      ));
    } else {
      setServices([...services, { id: Date.now(), ...formValues }]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  // Table headings
  const headings = [
    { title: "Service Name", field: "name", width: 5 },
    { title: "Price", field: "price", width: 3 },
  ];

  // Table actions
  const actions = [
    { label: "Edit", handler: handleOpen, variant: "outlined", color: "primary" },
    { label: "Delete", handler: handleDelete, variant: "outlined", color: "error" }
  ];

  // Table data
  const tableData = {
    headings,
    data: services.map(service => ({
      id: service.id,
      name: service.name,
      price: service.price,
    })),
    actions
  };

  return (
    <div className="node-service-container">
      <Box className="header-container">
        <Typography variant="h5" component="h1" className="header-title">
          Services
        </Typography>
        <Button variant="contained" onClick={() => handleOpen()} className="add-service-button">
          Add Service
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
                {editMode ? "Edit Service" : "Add Service"}
              </Typography>
            </Box>
            <Grid container spacing={2} className="form-container">
              <Grid item xs={12}>
                <InputLabel htmlFor="name">Service Name</InputLabel>
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
                <InputLabel htmlFor="price">Price</InputLabel>
                <TextField
                  id="price"
                  name="price"
                  variant="outlined"
                  fullWidth
                  value={formValues.price}
                  onChange={(e) => setFormValues({ ...formValues, price: e.target.value })}
                />
              </Grid>
            </Grid>
            <Box className="modal-actions">
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                className="save-button"
              >
                {editMode ? "Save Changes" : "Add Service"}
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

export default NodeService;
