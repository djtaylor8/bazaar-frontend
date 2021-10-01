import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Grid } from '@material-ui/core'
import TemporaryDrawer from '../cart/CartDrawer'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import Product from './ProductShow'



export default function ProductsList(props) {

    const { url, path } = useRouteMatch()
    
  return (
    <div>
    <Grid container justify="center">
    <ImageList sx={{ width: 800, height: 600 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Products</ListSubheader>
        <TemporaryDrawer />
      </ImageListItem>
      {props.products.map((product) => (
        <ImageListItem key={product.id}>
          <img
            id={`product-${product.id}`}
            src={`${product.image}`}
            srcSet={`${product.image}`}
            alt={product.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={<Link to={`${url}/${product.id}`} className="productLinks">{product.name}</Link>}
            subtitle={product.price}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${product.name}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Grid> 

    <Route path={`${path}/:productId`}>
        <Product products={props.products} />
    </Route>
    </div>
  );
}