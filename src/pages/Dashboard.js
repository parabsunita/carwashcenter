import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import "../css/Dashboard.css"; // Import the CSS file

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  // Sample data for the dashboard
  const data = {
    totalCarsServiced: 1200,
    ongoingServices: 35,
    completedServices: 1150,
    customerSatisfaction: 85, // percentage
    onHoldServices: 10,
  };

  // Chart.js data and options for the progress chart
  const chartData = {
    labels: ['Customer Satisfaction'],
    datasets: [{
      data: [data.customerSatisfaction, 100 - data.customerSatisfaction],
      backgroundColor: ['#ff9800', '#e0e0e0'],
      borderWidth: 0,
    }],
  };

  const chartOptions = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // Overall status data
  const overallStatusData = {
    labels: ['Total Cars Serviced', 'Ongoing Services', 'Completed Services', 'On Hold Services'],
    datasets: [{
      label: 'Status',
      data: [data.totalCarsServiced, data.ongoingServices, data.completedServices, data.onHoldServices],
      backgroundColor: ['#2196F3', '#FF5722', '#4CAF50', '#FFC107'],
    }],
  };

  const overallStatusOptions = {
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="dashboard-container">
      <Box className="header">
        <Typography variant="h5" component="h1" className="dashboard-title">
          Dashboard
        </Typography>
        <Button variant="contained" className="view-reports-button">
          View Reports
        </Button>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="animated-card" sx={{ backgroundColor: '#E3F2FD', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" component="div" color="primary">
                Total Cars Serviced
              </Typography>
              <Typography variant="h4" component="div">
                {data.totalCarsServiced}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="animated-card" sx={{ backgroundColor: '#FFEBEE', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" component="div" color="error">
                Ongoing Services
              </Typography>
              <Typography variant="h4" component="div">
                {data.ongoingServices}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="animated-card" sx={{ backgroundColor: '#FFF9C4', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" component="div" color="warning">
                On Hold
              </Typography>
              <Typography variant="h4" component="div">
                {data.onHoldServices}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="animated-card" sx={{ backgroundColor: '#C8E6C9', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" component="div" color="success">
                Completed Services
              </Typography>
              <Typography variant="h4" component="div">
                {data.completedServices}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ marginTop: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="animated-card" sx={{ textAlign: 'center', height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="div" color="warning">
                Customer Satisfaction
              </Typography>
              <Box className="chart-container">
                <Doughnut data={chartData} options={chartOptions} />
              </Box>
              <Typography variant="h4" component="div">
                {data.customerSatisfaction}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Card className="animated-card" sx={{ textAlign: 'center', height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="div" color="primary">
                Overall Status
              </Typography>
              <Box className="chart-container">
                <Doughnut data={overallStatusData} options={overallStatusOptions} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
