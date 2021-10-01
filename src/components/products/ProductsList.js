// import React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import ListSubheader from '@mui/material/ListSubheader';
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';
// import { Grid } from '@material-ui/core'
// import TemporaryDrawer from '../cart/CartDrawer'
// import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
// import Product from './ProductShow'



// export default function ProductsList(props) {

//     const { url, path } = useRouteMatch()
    
//   return (
//     <div>
//     <Grid container>
//       <Grid item xs={9}>
//     <ImageList sx={{ height: 600 }}>
//       <ImageListItem key="Subheader" cols={2}>
//         <ListSubheader component="div">Products</ListSubheader>
//         <TemporaryDrawer />
//       </ImageListItem>
//       {props.products.map((product) => (
//         <ImageListItem key={product.id}>
//           <img
//             id={`product-${product.id}`}
//             src={`${product.image}`}
//             srcSet={`${product.image}`}
//             alt={product.name}
//             loading="lazy"
//           />
//           <ImageListItemBar
//             title={<Link to={`${url}/${product.id}`} className="productLinks">{product.name}</Link>}
//             subtitle={product.price}
//             actionIcon={
//               <IconButton
//                 sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
//                 aria-label={`info about ${product.name}`}
//               >
//                 <InfoIcon />
//               </IconButton>
//             }
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//     </Grid>
//     </Grid> 

//     <Route path={`${path}/:productId`}>
//         <Product products={props.products} />
//     </Route>
//     </div>
//   );
// }

import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';



export default function ProductsList(props) {

  const { url, path } = useRouteMatch()
  const  { products } = props.products;
  
  return (
    <div>
    <Grid container spacing={24}>
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
        <Button size="small">Learn More</Button>
        <Button size="small">Add To Cart</Button>
      </CardActions>
    </Card>
    </Grid>
    ))}
    </Grid>
    </div>
  );
}
