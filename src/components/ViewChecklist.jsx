import imgList from "../assets/statics/list.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ViewChecklist = () => {
  const ViewChecklist = styled.div`
    bottom: 5rem;
    left: 2.5rem;
    position: absolute;
    padding: 0.9rem 1rem;
    @media (min-width: 767.98px) {
      left: 4.5rem;
      bottom: 8rem;
    }
    @media (min-width: 1279.98px) {
      left: 22rem;
      bottom: 6.5rem;
    }
  `;

  const ImgView = styled.img`
    width: 3rem;
    @media (min-width: 1279.98px) {
      width: 4rem;
    }
  `;

  return (
    <ViewChecklist>
      <Link to="/checklist">
        <ImgView src={imgList} alt="button view checklist" />
      </Link>
    </ViewChecklist>
  );
};
