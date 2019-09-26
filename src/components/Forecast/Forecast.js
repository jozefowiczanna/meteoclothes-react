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
    {
      data.length > 1 &&
      <>
        <Heading>Pack yourself</Heading>
        <p>Below is an 8 day weather forecast for the selected city with a list of things to take.</p>
      </>
    }
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
