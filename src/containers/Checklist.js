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
    height: 80vh;
    justify-content: center;
    text-align: center;
    width: 90%;
    @media (min-width: 1279.98px) {
      width: 55%;
    }
  `;

  const ContainerItems = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-height: 60vh;
    padding: 1rem 0;
    overflow: auto;
    width: 100%;
  `;

  return (
    <Checklist>
      <ContainerItems>
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
      </ContainerItems>
    </Checklist>
  );
};
