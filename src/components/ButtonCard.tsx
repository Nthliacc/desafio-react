import styled from "styled-components";
import addCart from "../assets/addCart.png";

type ButtonProps = {
  value: number;
  onClick: () => any;
};

export function ButtonCard({ value, onClick }: ButtonProps) {
  return (
    <Button onClick={onClick} value={value}>
      <img src={addCart} alt="adicionar no carrinho" />
      <span>{value}</span>
      <Text>{value > 0 ? "ITEM ADICIONADO" : "ADICIONAR AO CARRINHO"}</Text>
    </Button>
  );
}

const Button = styled.button<{value: number}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;

  width: 90%;
  height: 40px;

  background: ${props => props.value > 0 ? '#039B00' : '#009edd'} ;
  border-radius: 4px;
  border: 0;
  color: #ffffff;
  font-size: 12px;
  cursor: pointer;
`;
const Text = styled.p`
  margin-left: 12px;
`;
