import React, { useState, MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Route, useRouteMatch } from 'react-router-dom';
//@ts-ignore
import Product from './ProductShow.tsx'
//@ts-ignore
import Search from '../search/Search.tsx'

interface Props {
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

const ProductsList: React.FC<Props> = ({ products, addToCart, user }) => {
  const { url, path } = useRouteMatch()
  let history = useHistory();
  const [searchQuery, setSearchQuery] = useState()
  const filteredProducts = filterProducts(products, searchQuery)


  const handleClick = (e: MouseEvent) => {
    history.push(`${url}/${(e.currentTarget).getAttribute('data-id')}`)
  }
 
  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '0 auto', alignItems: 'center', justifyContent: 'center' }}>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <ImageList sx={{ width: 700, height: 600 }} cols={searchQuery ? 2 : 4}>
        {filteredProducts.map((product) => (
          <ImageListItem key={product.id}>
            <img
              src={`${product.image}?w=248&fit=crop&auto=format`}
              srcSet={`${product.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={product.name}
              loading="lazy"
            />
            <ImageListItemBar
              data-id={product.id}
              title={product.name}
              style={{ cursor: 'pointer' }}
              subtitle={`$ ${product.price}`}
              onClick={(e) => handleClick(e)}
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
      <Route path={`${path}/:productId`}>
        <Product products={products} user={user} addToCart={addToCart} />
      </Route>
    </div>
  );
}

export default ProductsList;