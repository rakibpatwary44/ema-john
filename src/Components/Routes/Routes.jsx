import React from "react";
import App from "../../App";
import { createBrowserRouter } from "react-router";
import Shop from "../Shop/Shop";
import OrderReview from "./../OrderReview/OrderReview";
import Inventory from "../Inventory/Inventory";
import ProductDetlis from "../ProductDetlis/ProductDetlis";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
       {
        index: true, 
        element: <Shop />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "orderReview",
        element: <OrderReview />,
      },
      {
        path: "product/:Key",
        element: <ProductDetlis />,
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
    ],
  },
]);

export default Routes;
