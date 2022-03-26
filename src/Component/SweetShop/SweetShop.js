import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingleSweet from '../SingleSweet/SingleSweet';
import './SweetShop.css'
const SweetShop = () => {
    const [bestProduct , setBestProduct] = useState({});
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch("sweets.json")
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);
    const AddToCart = (product)=>{
        const newCart = [...cart,product];
        setCart(newCart);
    }
    const ChooseBestForMe = (props) =>{
        const {id} = props;
        const randomProduct = Math.floor(Math.random(id)*cart.length);
        console.log(randomProduct);
        setBestProduct(cart[randomProduct]);
        console.log(cart[randomProduct]);
        
    }
    return (
        <div className='shop-container'>
        <div className='products-container'>
            {
                products.map(product=> <SingleSweet AddToCart={AddToCart} key={product.id} product={product}></SingleSweet>)
            }
        </div>
        <div className='cart-container'>
            <Cart ChooseBestForMe={ChooseBestForMe} bestProduct={bestProduct} cart={cart}></Cart>
        </div>
    </div>
    );
};

export default SweetShop;