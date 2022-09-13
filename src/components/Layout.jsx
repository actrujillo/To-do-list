import { AddItem } from "../components/AddItem";
import { Link } from "react-router-dom";
import { ViewChecklist } from "./ViewChecklist";
import styled from "styled-components";

export const Layout = (props) => {
  const { children } = props;

  const Background = styled.div`
    background: #8c5066;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `;
  return (
    <>
      {/* <Link to="/">Home</Link> */}
      <Background>
        {children}
        <ViewChecklist></ViewChecklist>
        <AddItem></AddItem>
      </Background>
    </>
  );
};
