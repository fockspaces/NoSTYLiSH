import React, { useState } from "react";

const Items = ({ items, itemsChange }) => {
  const [isValid, setValid] = useState(true);
  const [item, setItem] = useState({
    color: "",
    size: "",
    stock_qty: 0,
    price: 0,
  });

  const itemChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const renderItems = items.map((item, i) => {
    return <div key={i}>{item.price}</div>;
  });

  const addItem = () => {
    const hasEmpty = Object.values(item).filter(
      (val) => val === "" || val === 0
    );
    if (hasEmpty.length === 0) {
      setValid(true);
      itemsChange(item);
      setItem({
        color: "",
        size: "",
        stock_qty: 0,
        price: 0,
      });
    } else {
      setValid(false);
    }
  };

  return (
    <div className="Item">
      {!isValid && (
        <div className="alert alert-danger" role="alert">
          Plesase finish all required inputs for item
        </div>
      )}
      <button className="btn btn-success" onClick={addItem}>
        add
      </button>
      {renderItems}
      <div className="form-group">
        <label htmlFor="color">color</label>
        <input
          className="form-control"
          type="text"
          name="color"
          value={item.color}
          onChange={itemChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="size">size</label>
        <input
          className="form-control"
          type="text"
          name="size"
          value={item.size}
          onChange={itemChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="stock_qty">stock_qty</label>
        <input
          className="form-control"
          type="text"
          name="stock_qty"
          value={item.stock_qty}
          onChange={itemChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">price</label>
        <input
          className="form-control"
          type="text"
          name="price"
          value={item.price}
          onChange={itemChange}
          required
        />
      </div>
    </div>
  );
};

export default Items;
