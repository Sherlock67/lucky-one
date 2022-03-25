import React, { useEffect, useState } from 'react';
import './SweetShop.css'
const SweetShop = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch("sweets.json")
        .then(res=>res.json())
        .then(data=>console.log(data));
    },[]);
    return (
        <div>
           
        </div>
    );
};

export default SweetShop;