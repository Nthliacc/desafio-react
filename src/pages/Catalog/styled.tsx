import styled from "styled-components";
import searchFocus from "../../assets/search-focus.svg";
import search from "../../assets/search.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 16px;
  gap: 24px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ContainerFilter = styled.form`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  border-radius: 8px;
  position: relative;
  border: 2px solid #ffffff;
  :focus-within {
    border: 2px solid #009edd;
    button > img {
      content: url(${searchFocus});
    }
  }
  input {
    background: none;
    border-radius: 8px;
    width: 100%;
    /* height: 94%; */
    padding: 16px;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 21.79px;
    ::placeholder {
      color: #c0c0c0;
      font-size: 16px;
      font-weight: 400;
      line-height: 21.79px;
      text-align: left;
    }
  }
  button {
    background: none;
    position: absolute;
    right: 0;
    border-radius: 8px;
    border: none;
    padding: 16px;
    cursor: pointer;
    text-align: end;
    img {
      content: url(${search});
    }
  }
  @media (max-width: 768px) {
  }
`;
