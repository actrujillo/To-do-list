import "../assets/css/AddItem.css";
import { Link } from "react-router-dom";
import imgAdd from "../assets/statics/plus.png";

export const AddItem = () => {
  return (
    <div className="addItem">
      <Link to="/form">
        <img src={imgAdd} alt="" />
      </Link>
    </div>
  );
};
