import { ShoppingCart } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Card = (props) => {
  console.log(props.children);
  const card = props.card;
  let total = 0;
  for (let i = 0; i < card.length; i++) {
    const product = card[i];
    total = total + product.price * product.quantity;
  }

  let shaping = 0;
  if (total > 35) {
    shaping = 0;
  } else if (total > 15) {
    shaping = 4.99;
  } else if (total > 0) {
    shaping = 12.99;
  }
  const tex = (total / 10).toFixed(2);
  const grandTotal = (total + shaping + Number(tex)).toFixed(2);

  const formatNumber = (num) => {
    const precision = Number(num).toFixed(2);
    return Number(precision);
  };

  return (
    <div>
      <h3>Order Summary </h3>
      <p>Item Ordered : {card.length}</p>
      <p>Product Price : {formatNumber(total)}</p>
      <p>
        <small>Shaping Cost : {shaping}</small>
      </p>
      <p>
        <small>Vat + tex : {formatNumber(tex)}</small>
      </p>
      <p>Total Price : {grandTotal}</p>
      {props.children}
    </div>
  );
};

export default Card;
