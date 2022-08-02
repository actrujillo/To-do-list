import React from "react";

export const Checklist = (props) => {
  const { product, item, write } = props;

  return (
    <div className="checklist">
      <h3>Item: {product}</h3>
      <span>Category: {item}</span>
      <p>Description: {write} </p>
    </div>
  );
};
