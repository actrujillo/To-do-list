import imgList from "../assets/statics/list.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ViewChecklist = () => {
  const ViewChecklist = styled.div`
    bottom: 5rem;
    left: 2.5rem;
    position: absolute;
    padding: 0.9rem 1rem;
  `;

  const ImgView = styled.img`
    width: 3rem;
  `;

  return (
    <ViewChecklist>
      <Link to="/checklist">
        <ImgView src={imgList} alt="button view checklist" />
      </Link>
    </ViewChecklist>
  );
};
