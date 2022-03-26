
import React from "react";
import "./Cart.css";

const Cart = (props) => {
  //const {name,img} = props;

  const { cart } = props;

  return (
    <div className="cart">
      <h4>Cart Products</h4>
      {cart.map((cartProducts) => (
        <div className="d-flex mb-3 px-2 justify-content-between align-items-center">
          <div className="d-flex">
          <img className="me-2 img-round" src={cartProducts.img} alt=""></img>
          <p className="pt-3">{cartProducts.name}</p>
          </div>
          <div className="me-2">
            <i class="fa-solid fa-trash "></i>
          </div>
          
        </div>
      ))}
      <div className="button-grp">
        <button onClick={props.ChooseBestForMe} className="button-best">
          Choose Best For Me
        </button>
        <button onClick={props.Remove} className="button-choose-again">
          Choose Again
        </button>
      </div>
    </div>
  );
};

export default Cart;
