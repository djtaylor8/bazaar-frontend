import React from 'react';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';


function Product(props) {

    const { productId } = useParams()
    const { url, path } = useRouteMatch()

    const product = props.products.find(product => product.id == productId)

    // debugger;

    return (
        <div>
            <Grid container>
                <Grid item sm={1}>
                Hello
                </Grid>
                <Grid item sm={5}>
                Hey
                </Grid>
                <Grid item sm={6}>
                {product.name}
                </Grid>

            </Grid>
            
        </div>
    );
}

export default Product;