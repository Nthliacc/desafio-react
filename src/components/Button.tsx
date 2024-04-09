import { Link } from "react-router-dom";
import styled from "styled-components";

interface EmptyProps {
  text: string;
  path: string;
  onClick?: () => any;
}

export const Button: React.FC<EmptyProps> = ({ path, text, onClick }) => (
  <Link to={path}>
    <ButtonStyle onClick={onClick}>{text}</ButtonStyle>
  </Link>
);

const ButtonStyle = styled.button`
  min-width: 180px;
  height: 40px;
  margin-top: 32px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16.34px;
  text-align: center;
  background: #009edd;
  border-radius: 4px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  padding: 8px;
  &:hover {
    background: #0077b6;
  }
`;
