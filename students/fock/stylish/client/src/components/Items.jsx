import React, { useState } from "react";
import Category from "./Category";
import ItemCard from "./ItemCard";

const Items = ({ items, itemsChange }) => {
  const [isValid, setValid] = useState(true);
  const [item, setItem] = useState({
    color: "",
    size: "",
    stock_qty: 0,
    price: 0,
  });

  const itemChange = (e) => {
    if (e.target.name === "price" || e.target.name === "stock_qty") {
      if (e.target.value < 0) {
        alert("number should be positive");
        return;
      }
    }
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const renderItems = items.map((Item, i) => {
    return <div key={i}>{<ItemCard item={Item} number={i} />}</div>;
  });

  const addItem = () => {
    const hasEmpty = Object.values(item).filter(
      (val) => val === "" || val === 0
    );
    if (hasEmpty.length === 0) {
      setValid(true);
      itemsChange({ ...item, SKU: `${item.color}-${item.size}` });
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
      <div className="form-group">
        <label htmlFor="color">Color</label>
        <select
          className="form-control"
          name="color"
          value={item.color}
          onChange={itemChange}
          required
        >
          <option value="">Select a color</option>
          <option value="#FF0000">Red</option>
          <option value="#FFFF00">Yellow</option>
          <option value="#0000FF">Blue</option>
          <option value="#008000">Green</option>
          <option value="#800080">Purple</option>
          <option value="#FFA500">Orange</option>
          <option value="#000000">Black</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="size">Size</label>
        <select
          className="form-control"
          name="size"
          value={item.size}
          onChange={itemChange}
          required
        >
          <option value="">select a size</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="stock_qty">stock_qty</label>
        <input
          className="form-control"
          type="number"
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
          type="number"
          step="0.01"
          name="price"
          value={item.price}
          onChange={itemChange}
          required
        />
      </div>

      {renderItems}
    </div>
  );
};

export default Items;
