import styled from "styled-components";
import lessIcon from "../../assets/less.svg";
import moreIcon from "../../assets/more.svg";
import trash from "../../assets/trash.svg";

export const Container = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 24px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    gap: 21px;
  }
`;

// Cabeçalho da tabela
export const Header = styled.div`
  display: grid;
  grid-template-areas: "product quatity subtotal whiteSpace";
  grid-template-columns: 280px repeat(2, 348px) 1fr;
  width: 100%;

  .product {
    grid-area: product;
  }
  .quatity {
    grid-area: quatity;
  }
  .subtotal {
    grid-area: subtotal;
  }
  .whiteSpace {
    grid-area: whiteSpace;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const HeaderItem = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #999999;
  text-align: start;
  width: 25%;
  :first-child {
    width: 34%;
  }
  :last-child {
    width: 0%;
  }
`;

// Linha da tabela
export const Line = styled.div`
  display: grid;
  grid-template-areas: "image grid";
  grid-template-columns: 280px 4fr;

  margin-top: 21px;
  position: relative;
  height: 114px;

  .image {
    grid-area: image;
    position: absolute;
  }
  .grid {
    grid-area: grid;
    .infos {
      position: absolute;
      left: 10%;
    }
  }
  @media (max-width: 767px) {
    position: none;
    display: flex;
    margin-top: 0;
    margin-bottom: 12px;
    height: 92px;
    gap: 16px;
    .image {
      position: none;
    }
    .grid {
      .infos {
        position: static;
        left: none;
        display: flex;
      }
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-areas: "quantity subtotal trash";
  grid-template-columns: repeat(2, 348px) 1fr;

  align-items: center;
  width: 100%;

  .infos {
    grid-area: info;
  }
  .quantity {
    grid-area: quantity;
  }
  .subtotalValue {
    grid-area: subtotal;
  }
  .trash {
    grid-area: trash;
    justify-self: end;
  }
  .whiteSpace {
    display: none;
  }

  @media (max-width: 767px) {
    display: grid;
    align-items: center;
    justify-content: start;
    grid-template-areas:
      "image info info trash"
      "image quantity subtotalValue whiteSpace";
    grid-template-columns: 74px 120px 96px 34px;
    .infos {
      position: none;
      grid-area: info;
      align-items: center;
      justify-content: flex-start;
      .title {
        height: 38px;
      }
      .price {
      }
    }
    .quantity {
      grid-area: quantity;
    }
    .subtotalValue {
      grid-area: subtotalValue;
      justify-self: center;
    }
    .trash {
      grid-area: trash;
      justify-self: end;
    }
    .whiteSpace {
      grid-area: whiteSpace;
    }
  }
`;

export const Image = styled.div`
  img {
    height: 114px;
  }
  @media (max-width: 767px) {
    img {
      width: 64px;
      height: 82px;
    }
  }
`;
export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  height: 49px;
  gap: 8px;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: row;

    color: #2f2e41;
    height: 38px;
    align-items: center;
    justify-content: center;
    gap: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Title = styled.div`
  display: flex;
  color: #2f2e41;
  font-size: 14px;
  font-weight: 700;
  line-height: 19.07px;
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    width: 102px;
  }
`;

export const Price = styled.div`
  display: flex;
  color: #2f2e41;
  font-size: 16px;
  font-weight: 700;
  line-height: 21.79px;
  @media (max-width: 767px) {
    width: 66px;
    justify-content: flex-start;
  }
`;

export const Quantity = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  img {
    width: 18px;
    height: 18px;
  }
  .subtract {
    content: url(${lessIcon});
  }
  .add {
    content: url(${moreIcon});
  }
  @media (max-width: 767px) {
    width: 117px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;
    button {
      margin: 0;
      padding: 0;
    }
  }
`;

export const Input = styled.input`
  width: 59px;
  height: 26px;

  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 19.09px;
  color: #2f2e41;
  padding: 16px, 12px, 16px, 12px;
  :focus {
    outline: none;
  }
`;

export const SubTotal = styled.div`
  display: flex;
  justify-content: start;
  gap: 8px;
  .sub {
    display: none;
    color: #999999;
    font-size: 12px;
    font-weight: 700;
    line-height: 16.34px;
  }
  .currency {
    color: #2f2e41;
    font-size: 16px;
    font-weight: 700;
    line-height: 21.79px;
  }
  @media (max-width: 767px) {
    width: 66px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    .sub {
      display: block;
    }
  }
`;
export const ImageDelete = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  text-align: end;
  .trashIcon {
    content: url(${trash});
    width: 16px;
    height: 18px;
  }
  @media (max-width: 767px) {
    width: 66%;
    padding: 2px 0;
    height: 50%;
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 21px;
  border-top: 1px solid #999999;

  @media (max-width: 767px) {
    padding-top: 16px;
    flex-direction: column-reverse;
    width: 100%;
    button {
      margin-top: 16px;
      width: 100%;
    }
    a {
      width: 100%;
    }
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  .text-gray {
    font-weight: 700;
    font-size: 14px;
    line-height: 19.07px;
    color: #999999;
  }

  .price {
    font-weight: 700;
    font-size: 24px;
    line-height: 22px;
    color: #444444;
    padding-left: 12px;
  }
  @media (max-width: 767px) {
    width: 100%;
    justify-content: space-between;
    height: 33px;
  }
`;

// Cart
export const CartContainer = styled.div<{ sizeH: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 16px;
  gap: 24px;
  width: 100%;
  height: 596px;
  border-radius: 4px;

  @media (max-width: 767px) {
    min-height: ${({ sizeH }) => (sizeH ? "90vh" : "auto")};
  }
`;
