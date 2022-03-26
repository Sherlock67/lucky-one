import React, { useEffect, useState } from 'react';
import SingleSweet from '../SingleSweet/SingleSweet';
import './SweetShop.css'
const SweetShop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch("sweets.json")
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);
    return (
        <div className='shop-container'>
        <div className='products-container'>
            {
                products.map(product=> <SingleSweet key={product.id} product={product}></SingleSweet>)
            }
        </div>
        <div className='cart-container'>
           
        </div>
    </div>
    );
};

export default SweetShop;