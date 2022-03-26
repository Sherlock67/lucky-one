import React from "react";
import "./BestProduct.css";
const BestProduct = (props) => {
  const { bestProduct } = props;
  return (
    <div className="bestproduct">
      <p>
        The Best Product For you is :{" "}
        <span className="best-product-name">{bestProduct.name}</span>{" "}
      </p>
    </div>
  );
};

export default BestProduct;
