import { useEffect, useState } from "react";
import styled from "styled-components";
import baby from "../assets/statics/baby.png";
import books from "../assets/statics/books.png";
import clothing from "../assets/statics/clothing.png";
import electronics from "../assets/statics/electronics.png";
import grocery from "../assets/statics/grocery.png";
import personalCare from "../assets/statics/personal-care.png";
import pets from "../assets/statics/pets.png";
import trash from "../assets/statics/trash.png";

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

  const ItemList = styled.div`
    align-items: center;
    display: flex;
    border: 1px solid #999;
    border-radius: 1rem;
    justify-content: space-around;
    margin: 0 0 0.8rem;
    padding: 0.5rem;
    width: 75%;
    @media (min-width: 1279.98px) {
      width: 55%;
    }
  `;

  const ImgItem = styled.img`
    width: 2rem;
    @media (min-width: 1279.98px) {
      width: 3rem;
    }
  `;

  const DeleteItem = styled.img`
    cursor: pointer;
    width: 1rem;
    @media (min-width: 1279.98px) {
      width: 2rem;
    }
  `;

  const DivText = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `;

  const H3Item = styled.h3`
    margin: 0.2rem;
    text-transform: capitalize;
  `;

  const PItem = styled.p`
    margin: 0.2rem;
    text-transform: capitalize;
  `;

  const ButtonItem = styled.button`
    background: none;
    border: none;
  `;

  return (
    <ItemList>
      <ImgItem src={addImg} alt="product pic" />
      <DivText>
        <H3Item>{product}</H3Item>
        {/* <span>{category}</span> */}
        <PItem>{text}</PItem>
      </DivText>
      <ButtonItem onClick={handleDelete}>
        <DeleteItem src={trash} alt="delete item" />
      </ButtonItem>
    </ItemList>
  );
}
