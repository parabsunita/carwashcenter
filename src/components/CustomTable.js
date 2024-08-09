import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import '../css/CustomTable.css'; // Import the CSS file

const CustomTable = ({ tableData }) => {
  const { headings, data, actions } = tableData;
  const showActions = actions && actions.length > 0;

  // Define getStatusColor function for text color
  const getStatusClass = (item) => {
    const statusClasses = {
      Completed: 'completed-text',  // Green
      Pending: 'pending-text',      // Yellow
      NotPaid: 'not-paid-text',      // Red
    };
    if (item.paymentStatus === 'Completed') {
      return statusClasses.Completed;
    } else if (item.paymentAmount > 0 && item.paymentStatus === 'Pending') {
      return statusClasses.Pending;
    } else {
      return statusClasses.NotPaid;
    }
  };

  return (
    <Box className="custom-table-container">
      <Grid container spacing={1} className="table-header-row">
        {/* Render heading columns */}
        {headings.map((heading, index) => (
          <Grid item xs={heading.width || 2} key={index} className="table-header">
            <Typography variant="h6">{heading.title}</Typography>
          </Grid>
        ))}
        {/* Render actions heading if actions are provided */}
        {showActions && (
          <Grid item xs={actions.length * 2} className="table-header">
            <Typography variant="h6">Actions</Typography>
          </Grid>
        )}
      </Grid>
      <Box className="table-body">
        {data.map(item => (
          <Box
            key={item.id}
            className="table-row"
          >
            <Grid container spacing={1} alignItems="center">
              {/* Render data cells */}
              {headings.map((heading, index) => (
                <Grid item xs={heading.width || 2} key={index} className="table-cell">
                  <Typography
                    variant="body2"
                    className={heading.field === 'paymentStatus' ? getStatusClass(item) : ''}
                  >
                    {heading.field === 'paymentAmount' ? `$${item[heading.field]}` : item[heading.field]}
                  </Typography>
                </Grid>
              ))}
              {/* Render actions if actions are provided */}
              {showActions && (
                <Grid item xs={actions.length * 2} className="table-actions">
                  <Box className="action-buttons">
                    {actions.map((action, index) => (
                      <Button
                        key={index}
                        variant={action.variant || 'outlined'}
                        color={action.color || 'default'}
                        onClick={() => action.handler(item)}
                        sx={{ minWidth: '30px', minHeight: '30px', padding: '4px' }}
                      >
                        {action.icon}
                      </Button>
                    ))}
                  </Box>
                </Grid>
              )}
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CustomTable;
