import React from "react";
import { Button } from "../../components/Button";
import { currency } from "../../utils/currency";
import { Bottom, TotalPrice } from "./styled";

interface IProps {
  totalQuantity: number;
  removeAllFromCart: () => any;
}

const CartTableBottom: React.FC<IProps> = ({
  totalQuantity,
  removeAllFromCart,
}) => {
  return (
    <Bottom>
      <Button
        text="FINALIZAR PEDIDO"
        path="/finishCart"
        onClick={() => removeAllFromCart()}
      />
      <TotalPrice>
        <p className="text-gray">TOTAL</p>
        <p className="price">{currency(totalQuantity)}</p>
      </TotalPrice>
    </Bottom>
  );
};

export default CartTableBottom;