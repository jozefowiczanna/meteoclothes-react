import styled from "styled-components";

const Input = styled.input`
  width: ${({ narrow }) =>
    narrow ? '45px' : '100%'};
  margin: 0 10px;
  font-size: 0.9em;
  padding: 5px;
  background: white;
  border: ${({ dataError }) =>
    !dataError ? "1px solid #a9a9a9" : "1px solid red"};
  border-radius: 4px;
  border-radius: 5px;
  height: 30px;
  font-size: inherit;
  text-align: ${({ narrow }) =>
    narrow ? 'center' : 'left'};
`;

export default Input;
