import React from "react";
import "./Products.css";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";

const Products = (props) => {
  // console.log(props);
  let { name, img, seller, stock, price, key } = props.product;
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-info">
        <h3>
          <Link to={"/product/" + key}>{name}</Link>
        </h3>
        <br />
        <p>
          {" "}
          <small>by: {seller}</small>
        </p>
        <p>$ {price}</p>
        <p>
          <small>
            Only {stock} left in stock - <span> Order Soon</span>
          </small>
        </p>
        <div className="card-btn">
          {props.showAddToCard && (
            <button onClick={() => props.handelAddCard(props.product)}>
              <ShoppingCart size={20} /> Add to card
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
