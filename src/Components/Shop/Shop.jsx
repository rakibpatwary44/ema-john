import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import { Link } from "react-router";
import "./Shop.css";
import Products from "../Product/Products";
import Card from "../Card/Card";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";
import { ShoppingCart } from "lucide-react";

const Shop = () => {
  //   console.log(fakeData);
  const first10 = fakeData.slice(0, 10);
  const [product, setProduct] = useState(first10);

  const [card, setCard] = useState([]);

  useEffect(() => {
    const savedCard = getDatabaseCart();
    const productKeys = Object.keys(savedCard);
    const previousCard = productKeys.map((existingKey) => {
      const product = fakeData.find((pd) => pd.key === existingKey);
      product.quantity = savedCard[existingKey];
      return product;
      console.log(existingKey, savedCard[existingKey]);
    });
    setCard(previousCard);
  }, []);

  const handelAddCard = (product) => {
    // console.log("product add in the container", product);
    const newProductAdd = product.key;

    const sameProduct = card.find((pd) => pd.key === newProductAdd);
    let count = 1;
    let newCard;
    if (sameProduct) {
      const count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = card.filter((pd) => pd.key !== newProductAdd);
      newCard = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCard = [...card, product];
    }

    setCard(newCard);

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
        <Card card={card}>
          <Link to="/orderReview" className="card-btn ">
            <button>
              <ShoppingCart size={20} /> Order Review
            </button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Shop;
