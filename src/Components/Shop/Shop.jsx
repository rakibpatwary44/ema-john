import React, { useState } from "react";
import fakeData from "../../fakeData";
import "./Shop.css";
import Products from "../Product/Products";
import Card from "../Card/Card";
import { addToDatabaseCart } from "../../utilities/databaseManager";

const Shop = () => {
  //   console.log(fakeData);
  const first10 = fakeData.slice(0, 10);
  const [product, setProduct] = useState(first10);

  const [card, setCard] = useState([]);

  const handelAddCard = (product) => {
    // console.log("product add in the container", product);

    const newCard = [...card, product];
    setCard(newCard);
    const newProduct = newCard.filter((pd) => pd.key === product.key);
    const count = newProduct.length;

    addToDatabaseCart(product.key, count);
  };
  //   console.log(first10);
  return (
    <div className="shop-container">
      <div className="product-container">
        {product.map((product, index) => (
          <Products
            key={index}
            product={product}
            showAddToCard={true}
            handelAddCard={handelAddCard}
          ></Products>
        ))}
      </div>
      <div className="card-container">
        <Card card={card}></Card>
      </div>
    </div>
  );
};

export default Shop;
