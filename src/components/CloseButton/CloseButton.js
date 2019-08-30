import styled from 'styled-components';

const CloseButton = styled.button`
  width: 29px;
  height: 29px;
  background: #444444;
  border: none;
  border-radius: 5px;
  position: absolute;
  right: 25px;
  top: 25px;
  cursor: pointer;
  
  &::before, 
  &::after {
    content: '';
    width: 14px;
    height: 2px;
    position: absolute;
    background: white;
    display: block;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    transform-origin: 50%;
  }
  
  &::before {
    transform: rotate(45deg);
  }
  
  &::after {
    transform: rotate(-45deg);
  }
`;

export default CloseButton;