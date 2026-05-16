import React, { useState } from "react";
import fakeData from "../../fakeData";
import "./Shop.css";
import Products from "../Product/Products";

const Shop = () => {
  //   console.log(fakeData);
  const first10 = fakeData.slice(0, 10);
  const [product, setProduct] = useState(first10);
  const handelAddCard = () => {
    console.log("product add in the container");
  };
  //   console.log(first10);
  return (
    <div className="shop-container">
      <div className="product-container">
        {product.map((product) => (
          <Products product={product} handelAddCard={handelAddCard}></Products>
        ))}
      </div>
      <div className="card-container">
        <h3>This is card section</h3>
      </div>
    </div>
  );
};

export default Shop;
