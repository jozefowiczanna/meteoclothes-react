import styled from "styled-components";

const Button = styled.button`
  border: none;
  background: none;
  background-color: #444444;
  color: #ffffff;
  cursor: pointer;
  border-radius: 30px;
  outline: none;
  padding: 10px 30px;
  transition: 0.3s;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    background: #656565;
  }

  &:active {
    transform: scale(0.9);
  }
`;

export default Button;
