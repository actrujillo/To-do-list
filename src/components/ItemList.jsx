import { useEffect, useState } from "react";
import baby from "../assets/statics/baby.png";
import books from "../assets/statics/books.png";
import clothing from "../assets/statics/clothing.png";
import electronics from "../assets/statics/electronics.png";
import grocery from "../assets/statics/grocery.png";
import personalCare from "../assets/statics/personal-care.png";
import pets from "../assets/statics/pets.png";

export default function ItemList(props) {
  const { id, product, category, text } = props;

  const handleDelete = () => {
    props.handleRemoveItem(id);
  };

  const [addImg, setAddImg] = useState([]);

  const imageItem = () => {
    switch (category) {
      case "Baby":
        setAddImg(baby);
        break;
      case "Books":
        setAddImg(books);
        break;
      case "Clothing":
        setAddImg(clothing);
        break;
      case "Electronics":
        setAddImg(electronics);
        break;
      case "Grocery":
        setAddImg(grocery);
        break;
      case "Personal Care":
        setAddImg(personalCare);
        break;
      case "Pets":
        setAddImg(pets);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    imageItem();
  });

  return (
    <div className="item-list" style={{ display: "flex" }}>
      <img src={addImg} alt="" />
      <h3>{product}</h3>
      <span>{category}</span>
      <p>{text}</p>
      <button onClick={handleDelete} style={{ width: "50px" }}>
        X
      </button>
    </div>
  );
}
