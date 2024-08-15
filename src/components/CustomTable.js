import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Menu, MenuItem } from '@mui/material';
import '../css/CustomTable.css'; // Import the CSS file

const CustomTable = ({ tableData }) => {
  const { headings, data, onStatusChangeClick } = tableData;
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  const handleStatusClick = (event, item) => {
    setAnchorEl(event.currentTarget);
    setCurrentItem(item);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setCurrentItem(null);
  };

  const handleChangeStatus = (status) => {
    onStatusChangeClick(currentItem, status);
    handleCloseMenu();
  };

  return (
    <Box className="custom-table-container">
      <Grid container spacing={1} className="table-header-row">
        {headings.map((heading, index) => (
          <Grid
            item
            xs={heading.width || 2}
            key={index}
            className={`table-header ${heading.field === 'date' || heading.field === 'time' || heading.field === 'status'? 'centered-header' : ''}`}
          >
            <Typography variant="h6" className='table-header-h6'>{heading.title}</Typography>
          </Grid>
        ))}
      </Grid>
      <Box className="table-body">
        {data.map(item => (
          <Box key={item.id} className="table-row custom-table-row">
            <Grid container spacing={1} alignItems="center" className="custom-table-grid-row">
              {headings.map((heading, index) => (
                <Grid
                  item
                  xs={heading.width || 2}
                  key={index}
                  className={`table-cell custom-table-cell ${heading.field === 'date' || heading.field === 'time' ? 'centered-cell' : ''}`}
                >
                  <Typography variant="body2 custom-table-data">
                    {heading.field === 'status' ? (
                      <Button
                        variant="outlined"
                        onClick={(event) => handleStatusClick(event, item)}
                        className="status-button"
                      >
                        {item.status}
                      </Button>
                    ) : (
                      item[heading.field]
                    )}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        PaperProps={{
          style: {
            width: 170, // Fixed width for Menu
          },
        }}
      >
        <MenuItem
          onClick={() => handleChangeStatus('Approved')}
          style={{
            width: '100%', // Ensure MenuItem fills the Menu width
            textAlign: 'center', // Center-align text in MenuItem
          }}
        >
          Approve
        </MenuItem>
        <MenuItem
          onClick={() => handleChangeStatus('Declined')}
          style={{
            width: '100%', // Ensure MenuItem fills the Menu width
            textAlign: 'center', // Center-align text in MenuItem
          }}
        >
          Decline
        </MenuItem>
        <MenuItem
          onClick={() => handleChangeStatus('On Hold')}
          style={{
            width: '100%', // Ensure MenuItem fills the Menu width
            textAlign: 'center', // Center-align text in MenuItem
          }}
        >
          On Hold
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default CustomTable;
