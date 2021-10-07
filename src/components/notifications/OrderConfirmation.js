import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core';
import Card from '@mui/material/Card';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, Redirect } from 'react-router-dom';

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
            <Card raised={true} style={{ minHeight: '8rem', textAlign: 'center', display: 'flex', justifyContent: 'space-around', flexDirection: 'column', alignItems: 'center' }}>
            <Typography>Thank you for your purchase!</Typography>
            <Button onClick={handleOrdersClick} variant="contained" size="small" style={{maxWidth: '50%'}}>View Orders</Button>
            <Button onClick={handleHomeClick} variant="contained" size="small" style={{maxWidth: '50%'}}>Home</Button>
            </Card>
            </Grid>
          </Grid>
        </div>
    );
};

export default OrderConfirmation;