import { AddItem } from "../components/AddItem";
import { Link } from "react-router-dom";
import { ViewChecklist } from "./ViewChecklist";

export const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Link to="/">Home</Link>
      {children}
      <ViewChecklist></ViewChecklist>
      <AddItem></AddItem>
    </>
  );
};
