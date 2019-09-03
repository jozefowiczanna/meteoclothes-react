import React from 'react';
import styled from 'styled-components';
import Heading from 'components/Heading/Heading';
import Day from 'components/Day/Day';

const StyledSection = styled.section`
  margin-top: 80px;
`;

const Forecast = () => (
  <StyledSection id="forecast">
    <Heading>Pakuj się</Heading>
    <p>Poniżej znajduje się 8-dniowa prognoza pogody dla wybranego miasta wraz z listą rzeczy do zabrania.</p>
    <Day></Day>
  </StyledSection>
);

export default Forecast;
