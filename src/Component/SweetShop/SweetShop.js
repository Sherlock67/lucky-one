import React, { useEffect, useState } from "react";
import BestProduct from "../BestProduct/BestProduct";
import Cart from "../Cart/Cart";
import SingleSweet from "../SingleSweet/SingleSweet";
import "./SweetShop.css";
const SweetShop = () => {
  const [bestProduct, setBestProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("sweets.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const AddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  const ChooseBestForMe = (props) => {
    const { id } = props;
    const randomProduct = Math.floor(Math.random(id) * cart.length);

    setBestProduct(cart[randomProduct]);
  };
  const Remove = () =>{
    setCart([]);
    setBestProduct({});
  }
  return (

    <div>
      <h4 className="shop-name">Sweet Shop</h4>
      <div className="shop-container">
        <div className="products-container">
          {products.map((product) => (
            <SingleSweet
              AddToCart={AddToCart}
              key={product.id}
              product={product}
            ></SingleSweet>
          ))}
        </div>
        <div className="cart-container">
          <Cart ChooseBestForMe={ChooseBestForMe} Remove={Remove} cart={cart}></Cart>
        </div>
      </div>
      <div >
        <BestProduct bestProduct={bestProduct}></BestProduct>
      </div>
    </div>
  );
};

export default SweetShop;
