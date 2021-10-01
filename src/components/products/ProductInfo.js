import React from 'react';
import { Grid, Typography, Divider, Button, Box } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';


const ProductInfo = ({ product, addToCart }) => {

    const { productId } = useParams()

    return (
        <Grid container direction='column' style={{ height: '100%' }}>
        <Typography variant='subtitle1'>{product.listing_type}</Typography>
        <Divider />
        <Box mt={2}>
            <Typography variant='h4'>{product.name}</Typography>
            <Typography variant='subtitle1'>{product.description}</Typography>
            <Typography variant='h5'>${product.price}</Typography>
        </Box>
        <Button id={productId} onClick={(e) => addToCart(e)} variant='contained' color='primary' style={{ marginTop: 'auto' }}>Add To Cart</Button>
        </Grid>
    );
};

export default ProductInfo;