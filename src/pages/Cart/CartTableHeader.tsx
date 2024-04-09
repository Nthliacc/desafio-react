import React from "react";
import { Header, HeaderItem } from "./styled";

const CartTableHeader: React.FC = () => {
  return (
    <Header>
      <HeaderItem className="product">PRODUTO</HeaderItem>
      <HeaderItem className="quatity">QTD</HeaderItem>
      <HeaderItem className="subtotal">SUBTOTAL</HeaderItem>
      <HeaderItem className="whiteSpace"></HeaderItem>
    </Header>
  );
};

export default CartTableHeader;