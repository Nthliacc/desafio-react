import { useContext } from "react";
import styled from "styled-components";
import basket from "../assets/basket.svg";
import { MovieContext } from "../store/MovieContext";
import { Link } from "react-router-dom";

export function Nav() {
  const { moviesCart } = useContext(MovieContext);
  const totalQuantity = moviesCart.reduce((acc, item) => acc + item.quantity, 0);
  
  return (
    <Wrapper>
      <Link to="/">
        <h1>WeMovies</h1>
      </Link>
      <CartBox>
        <p>Meu Carrinho</p>
        <span>
          {`${totalQuantity} ${totalQuantity !== 1 ? "itens" : "item"}`}
        </span>
        <Link to="/cart">
          <img src={basket} alt="basket de compras" />
        </Link>
      </CartBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px;
  width: 100%;

  a{
    text-decoration: none;
    color: #ffffff;
  }
  h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
  }
  @media (max-width: 767px) {
    
  }
`;

const CartBox = styled.div`
  display: grid;
  grid-template-areas: "text img" "number img";
  column-gap: 8px;
  text-align: right;
  p, span {
    font-weight: 600;
  }
  p {
    height: 19px;
    grid-area: text;
    font-size: 14px;
    line-height: 19.07px;
  }
  span {
    grid-area: number;
    font-size: 12px;
    line-height: 16.34px;
    color: #999999;
  }
  a {
    grid-area: img;
    img {
      padding: 8px;
      width: 40px;
      height: 40px;
    }
  }
  @media (max-width: 767px) {
    grid-template-areas: "number img";
    row-gap: 8px;
    align-items: center;
    p {
      display: none;
    }
  }
`;