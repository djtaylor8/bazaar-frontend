import React from 'react';
import { Grid, Typography, Divider, Button, Box } from '@material-ui/core'

const ProductInfo = ({ product }) => {
    return (
        <Grid container direction='column' style={{ height: '100%' }}>
        <Typography variant='subtitle1'>{product.listing_type}</Typography>
        <Divider />
        <Box mt={2}>
            <Typography variant='h4'>{product.name}</Typography>
            <Typography variant='subtitle1'>{product.description}</Typography>
            <Typography variant='h5'>${product.price}</Typography>
        </Box>
        <Button variant='contained' color='primary' style={{ marginTop: 'auto' }}>Add To Cart</Button>
        </Grid>
    );
};

export default ProductInfo;