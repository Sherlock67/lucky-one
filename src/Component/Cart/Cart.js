import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const Cart = (props) => {
    //const {name,img} = props;
    const {cart} = props;
    console.log(cart);
    return (
        <div className='cart'>
        <h4>Cart Products</h4>
           {
            
            cart.map(cartProducts=><div className='cart-product'>
                <img className='img-round' src={cartProducts.img} alt=""></img>
                <p>{cartProducts.name}</p>
                <FontAwesomeIcon className='icons' icon={faTrash}></FontAwesomeIcon>
            </div>
            
            )  
           }
            
        
        </div>
    );
};

export default Cart;