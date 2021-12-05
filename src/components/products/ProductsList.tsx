import React, { useState, MouseEvent } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Link, useRouteMatch } from 'react-router-dom';
//@ts-ignore
import Product from './ProductShow.tsx'
import Search from '../search/Search'

type Props = {
  products: {
      id: number;
      price: number;
      description: string;
      listing_type: string;
      image: string;
  }[];
  addToCart: (e: MouseEvent) => void;
  user: {
    id: number;
    isAuth: boolean;
  };
}

const useStyles = makeStyles(() => ({
  media: {
    objectFit: 'cover',
  },
}));

const filterProducts = (products, search) => {
  if (!search) {
    return products
  }
  return products.filter((product) => {
    const productName = product.name.toLowerCase();
    return productName.includes(search);
  });
};

const ProductsList: React.FC<Props> = ({ products, addToCart, user }) => {
  const { url, path } = useRouteMatch()
  const  { products } = props.products;
  const [searchQuery, setSearchQuery] = useState('')
  const filteredProducts = filterProducts(products, searchQuery)

  const handleAdd = (e) => {
    props.addToCart(e.target.id)
  }
  
  const productClasses = useStyles();
  
  return (
    <div>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Grid container spacing={2} style={{ marginTop: '5rem', marginBottom: '5rem'}}>
        {filteredProducts.map((product) => (
          <Grid item md={3} key={product.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                className={productClasses.media}
                component='img'
                alt={product.name}
                image={product.image}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {product.name}
                </Typography>
                <Typography variant='body2' color='text.secondary' style={{marginTop: '1rem'}}>
                  ${product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`${url}/${product.id}`} className='productLinks'>
                  <Button size='small'>Learn More</Button>
                </Link>
                {props.user.isAuth && (
                  <Button id={product.id} size='small' onClick={(e) => handleAdd(e)}>Add To Cart</Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Route path={`${path}/:productId`}>
        <Product products={products} user={props.user}/>
      </Route>
    </div>
  );
}

export default ProductsList;