import React, { useContext } from "react";
import { MovieContext } from "../../store/MovieContext";
import { currency } from "../../utils/currency";
import {
  Grid,
  Image,
  ImageDelete,
  Infos,
  Input,
  Line,
  Price,
  Title,
  Quantity,
  SubTotal,
} from "./styled";
import { MovieCartItem } from "../../store/types";

interface Props {
  item: MovieCartItem;
}

const CartTableLine: React.FC<Props> = ({ item }) => {
  const { updatedCartChange, updatedCartClick, removeFromCart } =
    useContext(MovieContext);

  return (
    <Line key={item.movie.id}>
      <Image className="image">
        <img src={item.movie.image} />
      </Image>
      <Grid className="grid">
        <Infos className="infos">
          <Title className="title">
            <span>{item.movie.title}</span>
          </Title>
          <Price className="price">{currency(item.movie.price)}</Price>
        </Infos>
        <Quantity className="quantity">
          <button>
            <img
              className="subtract"
              title="Remover um do carrinho"
              onClick={() => updatedCartClick("subtract", item.movie)}
            />
          </button>
          <Input
            pattern="[1-9]+"
            value={item.quantity}
            onChange={(event) => updatedCartChange(event, item.movie)}
          />
          <button>
            <img
              className="add"
              title="Adicionar mais ao carrinho"
              onClick={() => updatedCartClick("add", item.movie)}
            />
          </button>
        </Quantity>
        <SubTotal className="subtotalValue">
          <p className="sub">SUBTOTAL</p>
          <p className="currency">
            {currency(item.movie.price * item.quantity)}
          </p>
        </SubTotal>
        <ImageDelete className="trash">
          <img
            className="trashIcon"
            alt="lixeira"
            onClick={() => removeFromCart(item.movie)}
          />
        </ImageDelete>
        <div className="whiteSpace"></div>
      </Grid>
    </Line>
  );
};

export default CartTableLine;
