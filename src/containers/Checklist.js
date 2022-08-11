import React, { useContext } from "react";
import { Context } from "../context/Context";

export const Checklist = () => {
  const { check, handleRemoveItem } = useContext(Context);

  return (
    <div className="checklist">
      {check.map((ite, index) => (
        <div className="checklist-item" key={index}>
          <h3>{ite.product}</h3>
          <span>Category: {ite.category}</span>
          <p>Description: {ite.text} </p>
          <button onClick={handleRemoveItem}>Delete</button>
        </div>
      ))}
    </div>
  );
};
