import React from 'react';

type Props = {
  image: string,
}

const ProductImage = ({ image }: Props) => (
  <img src={image} width='100%' alt='product' />
);

export default ProductImage;