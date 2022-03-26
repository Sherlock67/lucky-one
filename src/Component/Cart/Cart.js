import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const Cart = (props) => {
    //const {name,img} = props;
    
    const {cart} = props;
  
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
           <div className='button-grp'>
                <button onClick={props.ChooseBestForMe} className='button-best'>Choose Best For Me</button>
                <button onClick={props.Remove} className='button-choose-again'>Choose Again</button>  
           </div>
          
           
        
        </div>
    );
};

export default Cart;