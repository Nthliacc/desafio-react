import React, { Suspense } from "react";
import styled from "styled-components";
import { CartContainer } from "./styled";
import { Button } from "../../components/Button";
import finishImage from "../../assets/finish.svg";
import Loading from "../../components/Loading";

const FinishCart: React.FC = () => {
  return (
    <CartContainer sizeH={false}>
      <Suspense fallback={<Loading />} />
      <Container>
        <h1>Compra realizada com sucesso!</h1>
        <img alt="Compra realizada com sucesso!" />
        <Button text="Voltar" path="/" />
      </Container>
    </CartContainer>
  );
};

export default FinishCart;

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
    width: 352px;
  }
  img {
    content: url(${finishImage});
    /* width: 447px; */
    height: 307px;
  }
  button {
    width: 173px;
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
      width: 238px;
      /* height: 265.36px; */
      object-fit: cover;
      padding: 0;
    }
  }
`;
