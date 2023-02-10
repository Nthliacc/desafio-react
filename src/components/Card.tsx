import styled from "styled-components";
import { ButtonCard } from "./ButtonCard";
import { currency } from "../utils/currency";
import { useContext, useState } from "react";
import { MovieContext } from "../store/MovieContext";

export function Card({ movie }: any) {
  const { image, price, title } = movie;
  const [value, setValue] = useState(0);
  const { addToCart, removeFromCart } = useContext(MovieContext);

  const addMovie = () => {
    setValue(value > 0 ? 0 : 1);
    value > 0 ? removeFromCart(movie) : addToCart(movie);
  };
  return (
    <Container>
      <div>
        <Image src={image} alt="Capa do Filme" />
        <Title>{title}</Title>
        <Price>{currency(price)}</Price>
      </div>
      <ButtonCard value={value} onClick={addMovie} />
    </Container>
  );
}

const Container = styled.div`
  background: #ffffff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 11px;
`;
const Image = styled.img`
  width: 100%;
  height: 188px;
  margin-bottom: 8px;
`;
const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #333333;
`;
const Price = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #2f2e41;
`;
