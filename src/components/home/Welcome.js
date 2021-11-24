import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const Welcome = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center', marginTop: '5rem' }}>
      <Typography variant='h5'>your local marketplace</Typography>
      <Link to='/products' style={{ textDecoration: 'none'}}>shop</Link> 
    </div>
  );
};

export default Welcome;