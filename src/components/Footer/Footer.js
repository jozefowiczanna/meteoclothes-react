import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: #525252;
  color: #dcdcdc;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid #c2c2c2;
  transition: all 0.2s;
  
  &:hover {
    color: white;
    border-bottom-color: white;
  }
`;

const DarkerDiv = styled.div`
  opacity: 0.7;
  margin-top: 15px;
`;

const Footer = () => (
  <StyledFooter>
  <div>Logo, layout i kod - <StyledLink href="https://jozefowiczanna.github.io/">Anna Józefowicz</StyledLink></div>
  <DarkerDiv>Ikony pogody - <StyledLink href="https://www.behance.net/amitjakhu" target="_blank">Amit Jakhu</StyledLink></DarkerDiv>
  </StyledFooter>  
);

export default Footer;