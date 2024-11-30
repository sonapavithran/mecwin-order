import React, { useState } from 'react';
import './ordersubheader.css';
import { FaPencilAlt } from 'react-icons/fa'; // Import pencil icon
import OrderDetails from './orderdetails';

const OrderSubHeader = () => {
  const [isEditable, setIsEditable] = useState(false);

  const handleEditClick = () => {
    setIsEditable((prev) => !prev); // Toggle edit mode
  };

  return (
    <div>
      <div className="order-subheader">
        <div className="order-info">
          <span className="order-id">Order ID#</span>
        </div>
        <div className="assign-actions">
          <label className="assign-label">Assign to:</label>
          <select className="dropdown">
            <option value="" disabled selected>
              Pick Executive
            </option>
            <option value="executive1">Executive 1</option>
            <option value="executive2">Executive 2</option>
            <option value="executive3">Executive 3</option>
          </select>
          <button className="edit-order-button" onClick={handleEditClick}>
            {!isEditable && <FaPencilAlt className="button-icon" />} {/* Show pencil icon */}
            {isEditable ? 'Save Order' : 'Edit Order'}
          </button>
        </div>
      </div>
      {/* Pass isEditable to OrderDetails */}
      <OrderDetails isEditable={isEditable} />
    </div>
  );
};

export default OrderSubHeader;
