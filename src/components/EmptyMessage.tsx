import styled from "styled-components";
import { Button } from "./Button";
import emptyMobileImage from "../assets/empty-mobile.svg";
import emptyImage from "../assets/empty.svg";

const EmptyMessage = () => {
  const message = "Parece que não há nada por aqui :(";
  return (
    <Container>
      <h1>{message}</h1>
      <img alt={message} />
      <Button text="Recarregar página" path="/" />
    </Container>
  );
};

export default EmptyMessage;

const Container = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 64px;
  gap: 24px;
  border-radius: 4px;
  h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 27.24px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #2f2e41;
  }
  img {
    width: 447px;
    content: url(${emptyImage});
  }
  button {
    margin-top: 0;
  }
  @media (max-width: 767px) {
    gap: 24px;
    height: auto;
    h1 {
      height: 35px;
      width: 200px;
    }
    img {
      content: url(${emptyMobileImage});
      width: 178.63px;
      height: 265.36px;
      object-fit: cover;
      padding: 0;
    }
    button {
      width: 173px;
    }
  }
`;
