import React from "react";
import { useParams } from "react-router";
import Products from "../Product/Products";
import fakeData from "../../fakeData";

const ProductDetlis = () => {
  let { Key } = useParams();
  const product = fakeData.find((product) => product.key === Key);
  console.log(Key);
  return (
    <div>
      <h1>This is ProductDetlis</h1>
      <p>Product ID: {Key}</p>
      <Products showAddToCard={false} product={product}></Products>
    </div>
  );
};

export default ProductDetlis;
