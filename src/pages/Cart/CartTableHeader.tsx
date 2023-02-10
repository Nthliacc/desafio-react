import React from "react";
import { Header, HeaderItem } from "./styled";

export const CartTableHeader: React.FC = () => {
  return (
    <Header>
      <HeaderItem>PRODUTO</HeaderItem>
      <HeaderItem>QTD</HeaderItem>
      <HeaderItem>SUBTOTAL</HeaderItem>
      <HeaderItem></HeaderItem>
    </Header>
  );
};