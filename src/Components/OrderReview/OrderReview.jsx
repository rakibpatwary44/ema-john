import React, { useState } from "react";
import { useEffect } from "react";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import fakeData from "../../fakeData";
import ReviewItem from "../RecviewItem/ReviewItem";

const OrderReview = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    const savedData = getDatabaseCart();
    const productKeys = Object.keys(savedData);

    const cardProduct = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedData[key];
      return product;
    });
    // console.log(cardProduct);
    setCard(cardProduct);
  }, []);

  const handelProductRemove = (key) => {
    let mainCard = card.filter((pd) => pd.key !== key);
    setCard(mainCard);
    removeFromDatabaseCart(key);
  };

  //   const handleRemove = (key) => {
  //   const newCart = card.filter((product) => product.key !== key);
  //   setCard(newCart);
  // };
  // const remove = removeFromDatabaseCart();
  return (
    <div>
      <h1>Card Items : {card.length}</h1>
      {card.map((pd) => (
        <ReviewItem
          product={pd}
          // removeFromDatabaseCart={removeFromDatabaseCart}
          handelProductRemove={handelProductRemove}
          key={pd.key}
        ></ReviewItem>
      ))}
    </div>
  );
};

export default OrderReview;
