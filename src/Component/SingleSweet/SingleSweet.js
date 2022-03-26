
import React from "react";
import "./SingleSweet.css";

const SingleSweet = (props) => {
  const { id, name, img, price, ratings, stock } = props.product;
  return (
  
    <div className="col p-2">
      <div className="card h-100">
        <img src={img} className="img-fluid card-img-top p-1" alt="" />
        <div className="card-body text-start">
          <h5 className="card-title  ">{name}</h5>
          <h5 className="card-title ">Price: ${price}</h5>
          <h5 className="card-title ">Rating: {ratings}</h5>
          <h5 className="card-title">Stock: {stock}</h5>
        </div>

        <div className=" text-center">
          <button id={id} className="p-0 btn-cart" onClick={() => props.AddToCart(props.product)}>
            <p className='p-2'>
              Add to Choose &nbsp;
              <i className="fa-solid fa-cart-plus"></i>
            </p>

          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleSweet;
