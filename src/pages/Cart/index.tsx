import React, { useContext } from "react";
import { EmptyMessage } from "../../components/EmptyMessage";
import { MovieContext } from "../../store/MovieContext";
import { CartTable } from "./CartTable";
import empty from "../../assets/empty.png";
import { CartContainer } from "./styled";

const Cart: React.FC = () => {
  const { moviesCart } = useContext(MovieContext);

  return (
    <CartContainer sizeH={moviesCart.length > 0 ? true : false}>
      {moviesCart.length > 0 ? (
        <CartTable />
      ) : (
        <EmptyMessage
          message="Parece que não há nada por aqui :("
          image={empty}
        />
      )}
    </CartContainer>
  );
};

export default Cart;