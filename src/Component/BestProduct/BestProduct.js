import React from 'react';
import './BestProduct.css'
const BestProduct = (props) => {
    const {bestProduct} = props;
    return (
        <div className='cart'>
            <p>The Best Product For you is : {bestProduct.name}</p>
        </div>
    );
};

export default BestProduct;