import "../assets/css/BackHome.css";
import imgHome from "../assets/statics/home.png";
import { Link } from "react-router-dom";

export const BackHome = () => {

  return (
    <div className="backHome">
      <Link to="/">
        <img src={imgHome} alt="home"/>
      </Link>
    </div>
  );
};
