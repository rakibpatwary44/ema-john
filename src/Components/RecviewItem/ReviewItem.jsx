import React from "react";

const ReviewItem = ({ product, handelProductRemove }) => {
  console.log(handelProductRemove);
  // console.log(props);
  const { name, quantity, img, stock, key, price } = product;
  const itemStyle = {
    borderBottom: "1px solid lightgray",
    padding: "10px",
    marginLeft: "10px",
  };

  return (
    <div style={itemStyle}>
      <img src={img} alt="" />
      <h4 className="product-info">{name}</h4>
      <p>Price : {price}</p>
      <p> Quantity {quantity}</p>
      <p>Stock : {stock}</p>
      <div className="card-btn">
        <button onClick={() => handelProductRemove(key)}>Remove</button>
      </div>
    </div>
  );
};

export default ReviewItem;
