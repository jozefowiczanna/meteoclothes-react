import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: absolute;
  right: 260px;
  top: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const StyledButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 5px;
`;

const StyledLines = styled.div`
  width: 30px;
  height: 4px;
  background: #151719;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  transition: 0.3s;

  &:before, &:after {
    content: '';
    position: absolute;
    width: 30px;
    height: 4px;
    background: #151719;
    border-radius: 5px;
    transition: 0.3s;
  }

  &:before {
    top: -8px;
  }

  &:after {
    top: 8px;
  }

  &.active {
    background: rgba(0, 0, 0, 0);
  }

  &.active:before {
    top: 0;
    transform: rotate(45deg);
  }
  
  &.active:after {
    top: 0;
    transform: rotate(-45deg);
  }
`;


const NavButton = ({ toggleNavFn, active }) => (
  <StyledWrapper onClick={toggleNavFn}>
    <StyledButton>
      <StyledLines className={active} />
    </StyledButton>
  </StyledWrapper>
);

export default NavButton;