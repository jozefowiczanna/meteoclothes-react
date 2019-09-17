import React from 'react';
import Where from 'components/Where/Where';
import styled from 'styled-components';
import Forecast from 'components/Forecast/Forecast';

const StyledWrapper = styled.div`
  padding: 80px 34px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 800px) {
    padding: 30px 10px;
  }
`;

const ForecastView = () => (
  <StyledWrapper>
    <Where />
    <Forecast />
  </StyledWrapper>
);

export default ForecastView;
