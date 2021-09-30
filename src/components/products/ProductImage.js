import React from 'react';

const ProductImage = ({ image }) => {
    return (
        <div>
            <img src={image} width='100%'></img>
        </div>
    );
};

export default ProductImage;