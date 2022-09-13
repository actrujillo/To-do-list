import React, { useContext } from "react";
import { Context } from "../context/Context";
import ItemList from "../components/ItemList";
import styled from "styled-components";

export const Checklist = () => {
  const { check, handleRemoveItem } = useContext(Context);

  const Checklist = styled.div`
    align-items: center;
    background: #fff;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    height: 80vh;
    justify-content: center;
    text-align: center;
    width: 90%;
  `;

  return (
    <Checklist>
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
    </Checklist>
  );
};
