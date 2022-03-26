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
    if (cart.length < 4) {
      if (cart.indexOf(product) === -1) {
        const newCart = [...cart, product];
        setCart(newCart);
      }

    }

  };
  const ChooseBestForMe = (props) => {
    const { id } = props;
    const randomProduct = Math.floor(Math.random(id) * cart.length);
    setBestProduct(cart[randomProduct]);
    setCart(cart[randomProduct])
  };
  const Remove = () => {
    setCart([]);
    setBestProduct({});
  }
  return (
    <div>
      <h4 className="shop-name">Sweet Shop</h4>

      <div className="row p-5">
        <div className="col-12 col-lg-8 order-1 order-lg-1">
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-lg-3 g-3 mt-4">
            {
              products.map(product => <SingleSweet AddToCart={AddToCart}
                key={product.id}
                product={product} />)
            }
          </div>
        </div>
        <div className="col-12 col-lg-4 h-100 p-4 order-2 order-lg-2 rounded-3 mt-5">
          <Cart ChooseBestForMe={ChooseBestForMe} Remove={Remove} cart={cart}></Cart>
        </div>

        <div className="col-12 order-3">
          <BestProduct bestProduct={bestProduct}></BestProduct>
        </div>

      </div>

    </div>

  );
};

export default SweetShop;
