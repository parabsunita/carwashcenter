import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import '../css/CustomTable.css'; // Import the CSS file

const CustomTable = ({ tableData }) => {
  const { headings, data, actions } = tableData;
  const showActions = actions && actions.length > 0;

  return (
    <Box className="custom-table-container">
      <Grid container spacing={2} className="table-header-row">
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
          <Box key={item.id} className="table-row">
            <Grid container spacing={2} alignItems="center">
              {/* Render data cells */}
              {headings.map((heading, index) => (
                <Grid item xs={heading.width || 2} key={index} className="table-cell">
                  <Typography variant="body1">{item[heading.field]}</Typography>
                </Grid>
              ))}
              {/* Render actions if actions are provided */}
              {showActions && (
                <Grid item xs={actions.length * 2} className="table-cell">
                  <Box className="action-buttons">
                    {actions.map((action, index) => (
                      <Button
                        key={index}
                        variant={action.variant || 'outlined'}
                        color={action.color || 'default'}
                        onClick={() => action.handler(item)}
                      >
                        {action.label}
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
