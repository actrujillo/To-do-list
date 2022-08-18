import React, { useContext } from "react";
import { Context } from "../context/Context";
import ItemList from "../components/ItemList";

export const Checklist = () => {
  const { check, handleRemoveItem } = useContext(Context);
  return (
    <div className="checklist">
      {check.length > 0 ? (
        check.map((item, i) => (
          <ItemList
            {...item}
            key={i}
            handleRemoveItem={handleRemoveItem}
          ></ItemList>
        ))
      ) : (
        <div className="checklist-empty">
          <h3>Nothing is listed in your list 🙄</h3>
        </div>
      )}
    </div>
  );
};
