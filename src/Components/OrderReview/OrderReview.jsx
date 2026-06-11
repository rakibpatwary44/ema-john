import React, { useState } from "react";
import { useEffect } from "react";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import fakeData from "../../fakeData";
import ReviewItem from "../RecviewItem/ReviewItem";
import Card from "../Card/Card";
import { ShoppingCart } from "lucide-react";
import happyImg from "../../images/giphy.gif";

const OrderReview = () => {
  const [card, setCard] = useState([]);
  const [orderPlace, setOrderPlace] = useState(false);

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

  const handelPlaceOrder = () => {
    setCard([]);
    processOrder();
    setOrderPlace(true);
  };

  const handelProductRemove = (key) => {
    let mainCard = card.filter((pd) => pd.key !== key);
    setCard(mainCard);
    removeFromDatabaseCart(key);
  };
  let thankyou;
  if (orderPlace) {
    thankyou = <img src={happyImg} alt="" />;
  }
  //   const handleRemove = (key) => {
  //   const newCart = card.filter((product) => product.key !== key);
  //   setCard(newCart);
  // };
  // const remove = removeFromDatabaseCart();
  return (
    <div className="shop-container">
      <div className="product-container">
        {card.map((pd) => (
          <ReviewItem
            product={pd}
            handelProductRemove={handelProductRemove}
            key={pd.key}
          ></ReviewItem>
        ))}
        {thankyou}
      </div>
      <div className="card-container">
        <Card card={card}>
          <button className="order-place-btn" onClick={handelPlaceOrder}>
            <ShoppingCart size={18} />
            Order Place
          </button>
        </Card>
      </div>
    </div>
  );
};

export default OrderReview;
