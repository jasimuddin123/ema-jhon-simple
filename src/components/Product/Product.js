import React from 'react';

const Product = (props) => {
    console.log(props.product.name);
    return (
        <div>
            <h3>This is Product</h3>  
            <h4>{props.product.name}</h4>
        </div>
    );
};

export default Product;