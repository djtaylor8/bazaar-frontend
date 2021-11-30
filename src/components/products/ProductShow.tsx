import React, { MouseEvent } from 'react';
import { Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
// @ts-ignore
import ProductImage from './ProductImage.tsx';
// @ts-ignore
import ProductInfo from './ProductInfo.tsx';

type Props = {
  products: {
    products: {
      id: number;
      price: number;
      description: string;
      listing_type: string;
      image: string;
    }[],
    loading: boolean;
  };
  addToCart: (e: MouseEvent) => void;
  user: {
    id: number;
    isAuth: boolean;
  };
}

const Product: React.FC<Props> = ({ products, addToCart, user }) => {
  const { productId } = useParams<{productId: string}>()
  

  const product = products.products.find((product: { id: number; }) => product.id === parseInt(productId));

  return (
    <div>
      <Grid container spacing={1} style={{ maxWidth: 1100, margin: '0 auto', marginTop: '5rem' }}>
        <Grid item sm={4}>
          <ProductImage image={product?.image} />
        </Grid>
        <Grid item sm={8}>
          <ProductInfo product={product} onClick={(e: React.MouseEvent<Element, globalThis.MouseEvent>) => addToCart(e)} user={user}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Product;