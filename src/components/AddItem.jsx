import "../assets/css/AddItem.css";
import { Link } from "react-router-dom";

export const AddItem = () => {

  return (
    <div className="addItem">
      <span><Link to="/form">+</Link></span>
    </div>
  );
};
