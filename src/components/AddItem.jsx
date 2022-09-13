import { Link } from "react-router-dom";
import imgAdd from "../assets/statics/plus.png";
import styled from "styled-components";

export const AddItem = () => {
  const AddItem = styled.div`
    bottom: 5rem;
    right: 2.5rem;
    position: absolute;
    padding: 0.9rem 1rem;
  `;

  const ImgAdd = styled.img`
    width: 3rem;
  `;

  return (
    <AddItem>
      <Link to="/form">
        <ImgAdd src={imgAdd} alt="button add" />
      </Link>
    </AddItem>
  );
};
