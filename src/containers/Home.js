import "../assets/css/Home.css";
import imgCat from "../assets/statics/michifeliz.png";

export const Home = () => {
  return (
    <div className="home">
      <h1>Would you like to go shopping with me?</h1>
      <h3>Don't forget the most important thing:</h3>
      <span>be happy</span>
      <img src={imgCat} alt="kitty smiling" />
    </div>
  );
};
