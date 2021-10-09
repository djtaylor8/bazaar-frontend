import React from 'react';
import { Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';


function Product(props) {

    const { productId } = useParams()
    const { products } = props.products

   const handleAddToCart = (e) => {
        props.addToCart(e.target.parentNode.id)
    }

    const product = products.find(product => product.id == productId)

    return (
        <div>
            <Grid container spacing={1} style={{ maxWidth: 1100, margin: '0 auto', marginTop: '5rem' }}>
                <Grid item sm={4}>
                    <ProductImage image={product.image} />
                </Grid>
                <Grid item sm={8}>
                    <ProductInfo product={product} addToCart={handleAddToCart} user={props.user}/>
                </Grid>
            </Grid>
            
        </div>
    );
}

export default Product;