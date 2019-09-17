import React from 'react';
import styled from 'styled-components';
import Heading from 'components/Heading/Heading';
import Day from 'components/Day/Day';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const StyledSection = styled.section`
  margin-top: 80px;
`;

const Forecast = ({ data, city }) => (
  <StyledSection id="forecast">
    <Heading>Pakuj się</Heading>
    <p>Poniżej znajduje się 8-dniowa prognoza pogody dla wybranego miasta wraz z listą rzeczy do zabrania.</p>
    {
      data.length > 1 &&
      data.map((item, index) => (
        <Day
          {...item}
          key={index}
          city={city}
          dayNr={index}
        />
      ))
    }
  </StyledSection>
);

Forecast.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    dailySummary: PropTypes.string,
    tempDay: PropTypes.number,
    tempNight: PropTypes.number,
    clouds: PropTypes.number,
    humidity: PropTypes.number,
    rainSnow: PropTypes.number,
    windSpeed: PropTypes.number,
    icon: PropTypes.string,
  })),
}

const mapStateToProps = ({data, city}) => ({data, city})

export default connect(mapStateToProps)(Forecast);
