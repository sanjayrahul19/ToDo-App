import React from "react";
import "./Items.css";
const Items = ({ item, handleDelete }) => {
  return (
    <div className="list">
      <p className="item">{item}</p>
      <div className="container__button">
        <button className="delete__button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Items;
