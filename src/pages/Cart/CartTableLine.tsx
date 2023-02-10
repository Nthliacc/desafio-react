import React, { useContext } from "react";
import { MovieContext } from "../../store/MovieContext";
import less from "../../assets/less.png";
import more from "../../assets/more.png";
import trash from "../../assets/trash.png";
import { currency } from "../../utils/currency";
import {
  Image,
  ImageDelete,
  Infos,
  Input,
  Line,
  LineItem,
  Quantity,
} from "./styled";
import { MovieCartItem } from "../../store/types";

interface Props {
  item: MovieCartItem;
}

export const CartTableLine: React.FC<Props> = ({ item }) => {
  const { updatedCartChange, updatedCartClick, removeFromCart } =
    useContext(MovieContext);

  return (
    <Line key={item.movie.id}>
      <LineItem className="image">
        <Image src={item.movie.image} />
      </LineItem>
      <LineItem className="info">
        <Infos>
          <p>{item.movie.title}</p>
          <p>{currency(item.movie.price)}</p>
        </Infos>
      </LineItem>
      <Quantity className="quantity">
        <div>
          <img
            src={less}
            onClick={() => updatedCartClick("subtract", item.movie)}
          />
          <Input
            pattern="[1-9]+"
            value={item.quantity}
            onChange={(event) => updatedCartChange(event, item.movie)}
          />
          <img src={more} onClick={() => updatedCartClick("add", item.movie)} />
        </div>
      </Quantity>
      <LineItem className="subtotalValue">
        <p className="sub">SUBTOTAL</p>
        <p className="currency">{currency(item.movie.price * item.quantity)}</p>
      </LineItem>
      <LineItem className="trash">
        <ImageDelete
          src={trash}
          alt="lixeira"
          onClick={() => removeFromCart(item.movie)}
        />
      </LineItem>
    </Line>
  );
};
