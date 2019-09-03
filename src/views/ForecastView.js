import React from 'react';
import Where from 'components/Where/Where';
import styled from 'styled-components';
import Forecast from 'components/Forecast/Forecast';
import Footer from 'components/Footer/Footer';

const StyledWrapper = styled.div`
  padding: 80px 34px;
  max-width: 1000px;
  margin: 0 auto;
`;

const ForecastView = () => (
  <>
    <StyledWrapper>
      <Where />
      <Forecast />
    </StyledWrapper>
    <Footer />
  </>
);

export default ForecastView;
