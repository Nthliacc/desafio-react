import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 88vh;
    padding: 16px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
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

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 21px;
  div:last-child {
    text-align: right;
  }
  div:first-child {
    justify-content: flex-start;
  }
  @media (max-width: 767px) {
    margin-top: 0;
    margin-bottom: 12px;
    display: grid;
    grid-template-areas: "image info info trash" "image quantity currency currency";
    grid-template-columns: repeat(4, 1fr);
    .image {
      grid-area: image;
      img {
        margin-right: 16px;
        width: 82px;
      }
    }
    .info {
      grid-area: info;
      align-items: flex-start;
      color: #2f2e41;
      padding: 4px 0;
      width: 100%;
      div {
        p:first-child {
          width: 100px;
          font-size: 14px;
        }
        display: flex;
        flex-direction: row;
      }
    }
    .trash {
      grid-area: trash;
      align-items: flex-start;
      width: 100%;
    }
    .quantity {
      grid-area: quantity;
      input {
        width: 59px;
        height: 26px;
      }
    }
    .subtotalValue {
      grid-area: currency;
      min-width: 100%;
      justify-self: flex-end;
      justify-content: normal !important;
    }
  }
`;

export const LineItem = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #666666;
  width: 25%;
  :first-child {
    width: 20%;
  }
  :nth-child(4) {
    width: 20%;
    justify-content: end;
  }
  :last-child {
    justify-content: end;
  }

  p:first-child {
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 19px;
  }
  p {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
  }
  .sub {
    display: none;
  }
  .currency {
    text-align: start;
    padding: 0 8px;
    min-width: 100px;
  }
  @media (max-width: 767px) {
    .sub {
      display: inline;
      font-size: 12px;
      line-height: 16px;
      color: #999999;
    }
    .currency {
      text-align: right;
      padding: 0;
    }
    :nth-child(4) {
      flex-direction: column;
      align-items: self-end;
      align-self: center;
      p {
        text-align: right;
      }
    }
  }
`;

export const Image = styled.img`
  height: 114px;
  margin-right: 21px;
`;
export const Infos = styled.div`
  p {
    text-align: left;
  }
`;
export const Quantity = styled.div`
  display: flex;
  width: 25%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin: 0 10px;
  }
`;

export const Input = styled.input`
  width: 62px;
  height: 26px;

  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #666666;
  padding: 0 16px;
`;

export const ImageDelete = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
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
  align-items: center;

  .text-gray {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
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
    .text-gray {
      padding: 0 8px;
      font-weight: 700;
    }
    .price {
      padding: 0 16px;
    }
  }
`;

// Cart
export const CartContainer = styled.div<{ sizeH: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 21px;
  width: 100%;
  background: #ffffff;
  border-radius: 4px;
  @media (max-width: 767px) {
    padding: 0%;
    width: 96%;
    min-height: ${({ sizeH }) => (sizeH ? "90vh" : "auto")};
  }
`;
