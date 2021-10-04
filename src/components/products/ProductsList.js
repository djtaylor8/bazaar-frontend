import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, Redirect } from 'react-router-dom';
import Product from './ProductShow'




export default function ProductsList(props) {

  const { url, path } = useRouteMatch()
  const  { products } = props.products;

  const handleAdd = (e) => {
    props.addToCart(e.target.id)
}
  
  return (
    <div>
    <Grid container spacing={1}>
    {products.map((product) => (
      <Grid item md={3} key={product.id}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={product.name}
        height="140"
        image={product.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={`${url}/${product.id}`} className="productLinks">
        <Button size="small">Learn More</Button>
      </Link>
        <Button id={product.id} size="small" onClick={(e) => handleAdd(e)}>Add To Cart</Button>
      </CardActions>
    </Card>
    </Grid>
    ))}
    </Grid>

    <Route path={`${path}/:productId`}>
       <Product products={products} />
     </Route>
    </div>
  );
}
