import React from "react";
import HeaderItem from "./HeaderItem";
import { useParams, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = ({}) => {
  const history = useNavigate();
  const handleOrdersClick = () => {
    history("/orders");
  };
  const onItemClick = (label) => {
    switch (label) {
      case "Reeco":
        history("/reeco");
        break;
      case "Store":
        history("/store");
        break;
      case "Analytics":
        history("/analytics");
        break;
      default:
        break;
    }
  };
  return (
    <div className="header">
      <div className="left">
        <HeaderItem label="Reeco" onClick={() => onItemClick("Reeco")} />
        <HeaderItem label="Store" onClick={() => onItemClick("Store")} />
        <HeaderItem label="Orders" onClick={() => handleOrdersClick()} />
        <HeaderItem
          label="Analytics"
          onClick={() => onItemClick("Analytics")}
        />
      </div>
      <div className="right">
        <div className="cart-icon">
          <FaShoppingCart />
        </div>
        <div className="name">Naveen</div>
      </div>
    </div>
  );
};

export default Header;
