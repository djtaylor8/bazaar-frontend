import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core';
import Card from '@mui/material/Card';

const OrderConfirmation = () => {
  let history = useHistory()

  const handleHomeClick = () => {
    history.push('/')
  }

  const handleOrdersClick = () => {
    history.push('/my-orders')
  }

  return (
    <div>
      <Grid container spacing={10} alignItems='center' justifyContent='center' style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Grid item xs={6}>
          <Card raised={true} style={{ minHeight: '8rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
            <Typography style={{marginTop: '1rem' }}>Thank you for your purchase!</Typography>
            <div style={{ marginTop: 'auto', marginBottom: '1rem'}}>
              <Button onClick={handleOrdersClick} variant="outlined" size="small">View Orders</Button>
              <Button onClick={handleHomeClick} variant="outlined" size="small">Home</Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderConfirmation;