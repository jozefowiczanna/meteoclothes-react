import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ListTake from 'components/ListTake/ListTake';
import Icon from 'components/Icon/Icon';
import PropTypes from 'prop-types';

import clearday from 'assets/icons/weather/colored/clearday.svg';
import clearnight from 'assets/icons/weather/colored/clearnight.svg';
import cloudy from 'assets/icons/weather/colored/cloudy.svg';
import fog from 'assets/icons/weather/colored/fog.svg';
import partlycloudyday from 'assets/icons/weather/colored/partlycloudyday.svg';
import partlycloudynight from 'assets/icons/weather/colored/partlycloudynight.svg';
import rain from 'assets/icons/weather/colored/rain.svg';
import sleet from 'assets/icons/weather/colored/sleet.svg';
import snow from 'assets/icons/weather/colored/snow.svg';
import thunderstorm from 'assets/icons/weather/colored/thunderstorm.svg';
import tornado from 'assets/icons/weather/colored/tornado.svg';
import wind from 'assets/icons/weather/colored/wind.svg';

const svgPaths = {
  clearday,
  clearnight,
  cloudy,
  fog,
  partlycloudyday,
  partlycloudynight,
  rain,
  sleet,
  snow,
  thunderstorm,
  tornado,
  wind,
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  @media (max-width: 800px) {
    display: block;
  }
`;

const CardWeather = styled.div`
  width: 55%;
  box-shadow: 0 10px 20px #cccccc;
  border-left: 10px solid #c6c6c6;
  border-radius: 5px;
  color: #353535;
  background: #fff;

  @media (max-width: 800px) {
    margin-bottom: 30px;
    width: 100%;
  }
`;

const CardHeader = styled.div`
  padding: 32px 32px 16px;

  @media (max-width: 800px) {
    padding: 15px 10px 15px;
  }
`;

const DateGroup = styled.div`
  font-size: 19px;
  font-weight: 600;
`;

const IconGroup = styled.div`
  margin: 34px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const City = styled.div`
  text-align: center;
  font-size: 22px;
  font-weight: 600;
`;

const Temp = styled.div`
  font-size: 1.8em;
  text-align: center;
  font-weight: 600;
`;

const Description = styled.div`
  font-weight: 600;
`;

const Table = styled.table`
  border-collapse: collapse;
  white-space: nowrap;
  width: 100%;
  display: table;
  border-spacing: 2px;
  border-color: grey;
`;

const TableRow = styled.tr`
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;

  @media (max-width: 800px) {
    font-size: 15px;
  }
`;

const CellLeft = styled.td`
  padding: 12px 32px;
  line-height: 1.5;

  @media (max-width: 800px) {
    padding: 10px;
  }
`;

const CellRight = styled.td`
  padding: 12px 32px;
  line-height: 1.5;
  text-align: right;

  @media (max-width: 800px) {
    padding: 10px;
  }
`;

const CardTake = styled.div`
  width: 42%;
  padding: 34px;
  box-shadow: 0 10px 20px #cccccc;
  border-left: 10px solid #c6c6c6;  
  border-radius: 5px;
  color: #353535;
  background: #fff;

  @media (max-width: 800px) {
    width: 100%;
    padding: 20px;
  }
`;

const HeadingBig = styled.h3`
  margin: 0 0 20px 0;
`;

function getDate(dayNr) {
	function leadingZero(nr){
		nr = nr + "";
		const output = (nr.length === 1) ? "0" + nr : nr;
		return output;
	}
	const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	let date = new Date();
	date.setDate(date.getDate() + dayNr);
	const day = leadingZero(date.getDate());
	const month = leadingZero(date.getMonth() + 1);
	const year = date.getFullYear();
	const weekday = weekdays[date.getDay()];
  const dateInfo = `${weekday} ${day}.${month}.${year}`;
  return dateInfo;
}

class Day extends Component {

  
  render() {
    
    const { city, dailySummary, tempDay, tempNight, clouds, humidity, rainSnow, windSpeed, dayNr, icon, range, clothes } = this.props;
    
    return (
      <StyledWrapper>
        <CardWeather>
          <CardHeader>
            <DateGroup>
              <div>Day {dayNr+1}</div>
              <div>{getDate(dayNr)}</div>
            </DateGroup>
            <IconGroup>
              <div>
                <City>{city}</City>
                <Temp>{tempDay}°C</Temp>
              </div>
              <Icon icon={svgPaths[icon]} big />
            </IconGroup>
              <Description>{dailySummary}</Description>
          </CardHeader>
          <div>
            <Table>
              <tbody>
                <TableRow>
                  <CellLeft>Day temperature</CellLeft>
                  <CellRight>{tempDay}°C</CellRight>
                </TableRow>
                <TableRow>
                  <CellLeft>Night temperature</CellLeft>
                  <CellRight>{tempNight}°C</CellRight>
                </TableRow>
                <TableRow>
                  <CellLeft>Cloud cover</CellLeft>
                  <CellRight>{clouds}%</CellRight>
                </TableRow>
                <TableRow>
                  <CellLeft>Humidity</CellLeft>
                  <CellRight>{humidity}%</CellRight>
                </TableRow>
                <TableRow>
                  <CellLeft>Precipation probability</CellLeft>
                  <CellRight>{rainSnow}%</CellRight>
                </TableRow>
                <TableRow>
                  <CellLeft>Wind speed</CellLeft>
                  <CellRight>{windSpeed} {'km/h'}</CellRight>
                </TableRow>
              </tbody>
            </Table>
          </div>
        </CardWeather>
        <CardTake>
          <HeadingBig>Take: </HeadingBig>
          {
            (tempDay < range["tempmin"]*1) &&
            <ListTake
              clothes={clothes["Cold"]}
            />
          }
          {
            (tempDay >= range["tempmin"]) && (tempDay <= range["tempmax"]) &&
            <ListTake
              clothes={clothes["Moderate"]}
            />
          }
          {
            (tempDay > range["tempmax"]) &&
            <ListTake
              clothes={clothes["Warm"]}
            />
          }
          {
            (rainSnow > range["rainmin"]) &&
            <ListTake
              clothes={clothes["Precipitation"]}
            />
          }
          {
            (windSpeed > range["windmin"]) &&
            <ListTake
              clothes={clothes["Wind"]}
            />
          }
        </CardTake>
      </StyledWrapper>
    )
  }
};

Day.propTypes = {
  city: PropTypes.string,
  dailySummary: PropTypes.string,
  tempDay: PropTypes.number,
  tempNight: PropTypes.number,
  clouds: PropTypes.number,
  humidity: PropTypes.number,
  rainSnow: PropTypes.number,
  windSpeed: PropTypes.number,
  dayNr: PropTypes.number,
  icon: PropTypes.string,
  range: PropTypes.objectOf(PropTypes.string),
  clothes: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
}

const mapStateToProps = ({ range, clothes }) => ({ range, clothes });

export default connect(mapStateToProps)(Day);