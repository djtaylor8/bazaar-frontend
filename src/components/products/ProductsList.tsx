import React, { useState } from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@mui/material';
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
      name: string;
      price: number;
      description: string;
      listing_type: string;
      image: string;
  }[];
  addToCart: (e: string | null) => void;
  user: {
    id: number;
    isAuth: boolean;
  };
}

interface Products {
  id: number;
  name: string;
  price: number;
  description: string;
  listing_type: string;
  image: string;
}


const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    margin: '0 auto',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 300,
  },
  img: {
    height: '100%',
    width: '100%'
  }
}));

const filterProducts = (products: Products[], search?: string) => {
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
  const [searchQuery, setSearchQuery] = useState('')
  const filteredProducts = filterProducts(products, searchQuery)
  
  const productClasses = useStyles();
  
  return (
    <div>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Grid container spacing={2} style={{ marginTop: '5rem', marginBottom: '5rem'}}>
        {filteredProducts.map((product) => (
          <Grid item md={3} key={product.id}>
            <Card sx={{ width: 345, height: 345 }}>
              <div className={productClasses.container}>
                <CardMedia
                  className={productClasses.img}
                  component='img'
                  alt={product.name}
                  image={product.image}
                />
              </div>
              <CardContent>
                <Typography gutterBottom variant='body1' component='div'>
                  {product.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  ${product.price}
                </Typography>
                <Link to={`${url}/${product.id}`} className='productLinks'>
                  <Button size='small'>Learn More</Button>
                </Link>
                {user.isAuth && (
                  <Button data-id={product.id} size='small' onClick={(e) => addToCart((e.currentTarget).getAttribute('data-id'))}>Add To Cart</Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Route path={`${path}/:productId`}>
        <Product products={products} user={user} addToCart={addToCart} />
      </Route>
    </div>
  );
}

export default ProductsList;
