import styled from "styled-components";
import { ButtonCard } from "./ButtonCard";
import { currency } from "../utils/currency";
import { useContext, useState } from "react";
import { MovieContext } from "../store/MovieContext";

export function Card({ movie }: any) {
  const { image, price, title } = movie;
  const { moviesCart, addToCart, removeFromCart } = useContext(MovieContext);
  const movieInCart = moviesCart.find((item) => item.movie.id === movie.id)?.quantity;
  const [value, setValue] = useState(movieInCart || 0);

  const addMovie = () => {
    setValue(value > 0 ? 0 : 1);
    value > 0 ? removeFromCart(movie) : addToCart(movie);
  };

  return (
    <Container>
      <Box>
        <Image src={image} alt="Capa do Filme" />
        <Title>{title}</Title>
        <Price>{currency(price)}</Price>
      </Box>
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
  padding: 16px;
  gap: 16px;
  height: 324px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
const Image = styled.img`
  width: 147px;
  height: 188px;
`;
const Title = styled.h2`
  height: 18px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16.34px;
  text-align: center;
  color: #333333;
`;
const Price = styled.p`
height: 22px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21.79px;
  text-align: center;
  color: #2F2E41;
`;
