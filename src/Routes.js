import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import OrderDetails from "./OrderDetails";
import OrdersPage from "./OrdersPage";

const RoutesComponent = ({ onItemClick }) => {
  return (
    <Router>
      <div className="app">
        <Header onItemClick={onItemClick} />
        <Routes>
          <Route path="/orders/:id" element={<OrderDetails />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default RoutesComponent;
