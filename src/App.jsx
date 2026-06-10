import { createBrowserRouter, Outlet } from "react-router";
import "./App.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import OrderReview from "./Components/OrderReview/OrderReview";
import Inventory from "./Components/Inventory/Inventory";

const App = function App() {
  return (
    <>
      <Header></Header>
      <Outlet />
      
    </>
  );
};

export default App;
