import React from 'react';
import Where from 'components/Where/Where';
import styled from 'styled-components';
import Forecast from 'components/Forecast/Forecast';
import Footer from 'components/Footer/Footer';
import Button from "components/Button/Button";
import citiesGeo from "data/citiesGeo";

const StyledWrapper = styled.div`
  padding: 80px 34px;
  max-width: 1000px;
  margin: 0 auto;
`;

const getCityData = () => {
  console.log(citiesGeo);
  console.log(citiesGeo.filter(item => item.value === "gdansk"))
}

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
