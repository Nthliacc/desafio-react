import React, { useContext } from "react";
import { MovieContext } from "../../store/MovieContext";
import { Container } from "./styled";
import CartTableHeader from "./CartTableHeader";
import CartTableLine from "./CartTableLine";
import CartTableBottom from "./CartTableBottom";

const CartTable: React.FC = () => {
  const { moviesCart, removeAllFromCart } = useContext(MovieContext);
  const totalQuantity = moviesCart.reduce(
    (acc, item) => acc + item.quantity * item.movie.price,
    0
  );

  return (
    <Container>
      <div>
        <CartTableHeader />
        {moviesCart.map((item) => (
          <CartTableLine key={item.movie.id} item={item} />
        ))}
      </div>
      <CartTableBottom
        totalQuantity={totalQuantity}
        removeAllFromCart={removeAllFromCart}
      />
    </Container>
  );
};

export default CartTable;