import React from 'react';
import './orderdetails.css';
import { FaPencilAlt } from 'react-icons/fa'; // Import pencil icon

const OrderDetails = ({ isEditable }) => {
  const [tableData, setTableData] = React.useState([
    {
      id: 1,
      productName: 'Sample Product 1',
      description: 'Sample Description',
      uom: 'PCS',
      quantity: '',
      price: '',
      headSize: '',
      motorType: '',
      current: '',
      diameter: '',
      panelType: '',
      spd: '',
      data: '',
      warranty: '',
      transportation: '',
    },
    {
      id: 2,
      productName: 'Sample Product 2',
      description: 'Sample Description',
      uom: 'PCS',
      quantity: '',
      price: '',
      headSize: '',
      motorType: '',
      current: '',
      diameter: '',
      panelType: '',
      spd: '',
      data: '',
      warranty: '',
      transportation: '',
    },
  ]);

  const dropdownOptions = {
    headSize: ['Small', 'Medium', 'Large'],
    motorType: ['AC', 'DC', 'BLDC'],
    current: ['Low', 'Medium', 'High'],
    diameter: ['10mm', '20mm', '30mm'],
    panelType: ['Mono', 'Poly', 'Thin Film'],
  };

  const handleCellChange = (e, rowIndex, fieldName) => {
    const updatedData = [...tableData];
    updatedData[rowIndex][fieldName] = e.target.value;
    setTableData(updatedData);
  };

  return (
    <div className="order-details">
      <div className="order-summary">
        <h2>Order Details</h2>
      </div>

      <div className="responsive-table">
        <table>
          <colgroup>
            <col style={{ width: '80px' }} />
            <col style={{ width: '150px' }} />
            <col style={{ width: '200px' }} />
            <col style={{ width: '100px' }} />
            <col style={{ width: '120px' }} />
            <col style={{ width: '100px' }} />
            <col style={{ width: '150px' }} />
            <col style={{ width: '150px' }} />
            <col style={{ width: '150px' }} />
            <col style={{ width: '150px' }} />
            <col style={{ width: '150px' }} />
            <col style={{ width: '100px' }} />
            <col style={{ width: '120px' }} />
            <col style={{ width: '150px' }} />
            <col style={{ width: '200px' }} />
          </colgroup>
          <thead>
            <tr>
              <th>SL No</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>UoM</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Head Size</th>
              <th>Motor Type</th>
              <th>Current</th>
              <th>Diameter</th>
              <th>Panel Type</th>
              <th>SPD</th>
              <th>Data</th>
              <th>Warranty</th>
              <th>Transportation</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.productName}</td>
                <td>{row.description}</td>
                <td>{row.uom}</td>
                {[
                  'quantity',
                  'price',
                  'headSize',
                  'motorType',
                  'current',
                  'diameter',
                  'panelType',
                  'spd',
                  'data',
                  'warranty',
                  'transportation',
                ].map((field) => (
                  <td
                    key={field}
                    className={!isEditable && !row[field] ? 'blank-cell' : ''}
                  >
                    {isEditable ? (
                      <div className="editable-content">
                        {dropdownOptions[field] ? (
                          <select
                            value={row[field]}
                            onChange={(e) => handleCellChange(e, index, field)}
                          >
                            <option value="" disabled>
                              Select {field}
                            </option>
                            {dropdownOptions[field].map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type="text"
                            value={row[field]}
                            onChange={(e) => handleCellChange(e, index, field)}
                          />
                        )}
                        <FaPencilAlt className="cell-pencil-icon" />
                      </div>
                    ) : (
                      row[field] || ''
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetails;
