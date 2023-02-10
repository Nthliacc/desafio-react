import { EmptyMessage } from "../../components/EmptyMessage";
import finish from "../../assets/finish.png";
import React from "react";
import { CartContainer } from "./styled";

const FinishCart: React.FC = () => {
  return (
    <CartContainer sizeH={false}>
      <EmptyMessage message="Compra realizada com sucesso!" image={finish} />
    </CartContainer>
  );
}

export default FinishCart;