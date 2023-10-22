import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./orderDetails.scss"; // Make sure to import your SCSS file
import { orderItems } from "./mockData";
import { FaEdit, FaTrash } from "react-icons/fa";

const OrderDetails = () => {
  const { id } = useParams();
  const items = orderItems.filter((item) => item.orderId === parseInt(id));
  const history = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const handleEdit = (orderId) => {
    console.log(`Edit order with ID ${orderId}`);
  };

  const handleDelete = (orderId) => {
    console.log(`Delete order with ID ${orderId}`);
  };

  const handleBackClick = () => {
    history("/orders");
  };

  const filteredItems = items.filter((item) =>
    item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="order-details">
      <div className="back-icon" onClick={handleBackClick}>
        <FaArrowLeft />
      </div>
      <div className="orders">Order Details for ID: {id}</div>
      <input
        type="text"
        placeholder="Search items by only name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="order-grid">
        <div className="order-status">Status</div>
        <div className="items">Items</div>
        <div className="quantity">Quantity</div>
        <div className="price">Price</div>
        <div className="price">Action</div>
      </div>
      <div className="order-items">
        {filteredItems.map((item, index) => (
          <div key={index} className="order-item">
            <div>Delivered</div>
            <div>{item.itemName}</div>
            <div>{item.quantity}</div>
            <div>{item.price}</div>
            <div className="actions">
              <FaEdit
                onClick={() => handleEdit(item.id)}
                className="edit-icon"
              />
              <FaTrash
                onClick={() => handleDelete(item.id)}
                className="delete-icon"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetails;
