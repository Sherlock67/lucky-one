import React from 'react';
import './SingleSweet.css'
const SingleSweet = (props) => {
    const {name,img,price,ratings,stock} =props.product; 
    return (
        <div className='product'>
        <div className='product-info'>
        <img src={img} alt=""></img>
        <p className='product-name'> {name}</p>
        <p><small>Price : {price}</small></p>
        <p><small>Seller : {stock}</small></p>
        <p><small>Rating : {ratings}</small></p>
        </div>
        {/* <button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'>
            <p className='btn-text'>Add to cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button> */}
       

    </div>
    );
};

export default SingleSweet;