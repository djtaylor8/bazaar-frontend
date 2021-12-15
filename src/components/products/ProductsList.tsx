import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
// import { Button } from '@mui/material';
// import Typography from '@mui/material/Typography';
// import { Route, Link, useRouteMatch } from 'react-router-dom';
//@ts-ignore
// import Product from './ProductShow.tsx'
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

const filterProducts = (products: Products[], search?: string) => {
  if (!search) {
    return products
  }
  return products.filter((product) => {
    const productName = product.name.toLowerCase();
    return productName.includes(search);
  });
};

const ProductsList: React.FC<Props> = ({ products }) => {
  // const { url, path } = useRouteMatch()
  const [searchQuery, setSearchQuery] = useState('')
  const filteredProducts = filterProducts(products, searchQuery)
    
  return (
    <div>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <ImageList sx={{ width: 600, height: 600 }}>
        {filteredProducts.map((product) => (
          <ImageListItem key={product.id}>
            <img
              src={`${product.image}?w=248&fit=crop&auto=format`}
              srcSet={`${product.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={product.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={product.name}
              subtitle={`$ ${product.price}`}
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
      {/* <Route path={`${path}/:productId`}>
        <Product products={products} user={user} addToCart={addToCart} />
      </Route> */}
    </div>
  );
}

export default ProductsList;

{/* <Link to={`${url}/${product.id}`} style={{ textDecoration: 'none' }}>
<Button size='small'>Learn More</Button>
</Link>
{user.isAuth && (
<Button data-id={product.id} size='small' onClick={(e) => addToCart((e.currentTarget).getAttribute('data-id'))}>Add To Cart</Button>
)} */}