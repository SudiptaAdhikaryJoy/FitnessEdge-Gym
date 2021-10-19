import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const { name, quantity ,price, id} = product;
    return (
        <div>
            <h2>Name: {name}</h2>
            <h3>{quantity}</h3>
            <h4>price: ${price}</h4>
            <Link to={`/products/:{id}`}>
                <button className="btn btn-warning">product</button>
                </Link>
        </div>
    );
};

export default Product;