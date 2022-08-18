import "../assets/css/ViewChecklist.css";
import imgList from '../assets/statics/list.png'
import { Link } from "react-router-dom";

export const ViewChecklist = () => {

  return (
    <div className="view-checklist">
      <Link to="/checklist">
        <img src={imgList} alt="home"/>
      </Link>
    </div>
  );
};
