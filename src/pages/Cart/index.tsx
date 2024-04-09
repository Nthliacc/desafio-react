import React, { useContext } from "react";
import { MovieContext } from "../../store/MovieContext";
import { CartContainer } from "./styled";
const EmptyMessage = React.lazy(() => import("../../components/EmptyMessage"));
const CartTable = React.lazy(() => import("./CartTable"));

const Cart: React.FC = () => {
  const { moviesCart } = useContext(MovieContext);

  return (
    <CartContainer sizeH={moviesCart.length > 0 ? true : false}>
      {moviesCart.length > 0 ? (
        <CartTable />
      ) : (
        <EmptyMessage />
      )}
    </CartContainer>
  );
};

export default Cart;