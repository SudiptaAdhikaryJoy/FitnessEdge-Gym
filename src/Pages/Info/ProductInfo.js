import React from 'react';
import { useParams } from 'react-router';

const ProductInfo = () => {
    const {productInfo} = useParams();
    return (
        <div>
            <h2>{productInfo}</h2>
        </div>
    );
};

export default ProductInfo;