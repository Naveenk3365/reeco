import React from "react";
import { Link } from "react-router-dom";
import { orders } from "./mockData";

const OrdersPage = () => {
  return (
    <div className="orders-page">
      <h2>Orders</h2>
      <div className="order-list">
        {orders.map((order) => (
          <div key={order.id} className="order">
            <Link to={`/orders/${order.id}`}>
              <div>ID: {order.id}</div>
              <div>Name: {order.name}</div>
              <div>Status: {order.status}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
