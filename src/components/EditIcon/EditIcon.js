import styled from 'styled-components';
import editIcon from 'assets/icons/edit.svg';


const EditIcon = styled.button`
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-image: url(${editIcon});
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 60% 60%;
  border: 2px solid #333;
  margin-left: auto;
  outline: none;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.2s all;

  &:hover {
    opacity: 1;
  }
`;

export default EditIcon;