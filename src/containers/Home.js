import imgCat from "../assets/statics/kitty.webp";
import styled from "styled-components";

export const Home = () => {
  const Home = styled.div`
    align-items: center;
    background: #fff;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    height: 80vh;
    justify-content: center;
    text-align: center;
    width: 90%;
    @media (min-width: 1279.98px) {
      width: 55%;
    }
  `;

  const H3 = styled.h3`
    width: 80%;
  `;

  const Span = styled.span`
    color: red;
    font-size: 1.2rem;
    font-style: italic;
  `

  const HomeImage = styled.img`
    height: 40%;
  `;

  return (
    <>
        <Home>
          <h1>Would you like to go shopping with me?</h1>
          <H3>Don't forget the most important thing:</H3>
          <Span>be happy</Span>
          <HomeImage src={imgCat}></HomeImage>
        </Home>
    </>
  );
};
