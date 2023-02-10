import styled from "styled-components";
import { Button } from "./Button";

interface EmptyProps {
  message: string;
  image: string;
}

export const EmptyMessage: React.FC<EmptyProps> = ({ message, image }) => (
  <Container>
    <h1>{message}</h1>
    <img src={image} alt={message} />
    <Button text="VOLTAR" path="/" />
  </Container>
);

const Container = styled.div`
  margin: 64px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 64px;
  h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #2f2e41;
  }
  img{
    padding: 32px 0;
  }
  @media (max-width: 767px) {
    h1{
      width: 70%;
    }
    padding: 0;
  }
`;
