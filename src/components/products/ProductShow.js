import React from 'react';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';


function Product(props) {

    const { productId } = useParams()
    const { url, path } = useRouteMatch()

    const product = props.products.find(product => product.id == productId)

    // debugger;

    return (
        <div>
            <Grid container spacing={1} style={{ maxWidth: 1100, margin: '0 auto' }}>
                <Grid item sm={4}>
                    <ProductImage image={product.image} />
                </Grid>
                <Grid item sm={8}>
                    <ProductInfo product={product} />
                </Grid>
            </Grid>
            
        </div>
    );
}

export default Product;