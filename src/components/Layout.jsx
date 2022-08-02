import { AddItem } from "../components/AddItem";
import { Link } from "react-router-dom";
import { BackHome } from "../components/BackHome";

export const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Link to="/checklist">Checklist</Link>
      {children}
      <BackHome></BackHome>
      <AddItem></AddItem>
    </>
  );
};
