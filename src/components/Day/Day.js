import React from 'react';
import styled from 'styled-components';
import cloudSun from 'assets/icons/weather/colored/clouds-sun.svg';
import ListTake from 'components/ListTake/ListTake';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const CardWeather = styled.div`
  width: 55%;
  box-shadow: 0 10px 20px #cccccc;
  border-left: 10px solid #c6c6c6;
  border-radius: 5px;
  color: #353535;
  background: #fff;
`;

const CardHeader = styled.div`
  padding: 32px 32px 16px;
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

const StyledBigIcon = styled.div`
  display: block;
  width: 68px;
  height: 68px;
  background-image: url(${cloudSun});
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: ${({ secondary }) => secondary ? '85% 85%' : '100% 100%' };
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
`;

const CellLeft = styled.td`
  padding: 12px 32px;
  line-height: 1.5;
`;

const CellRight = styled.td`
  padding: 12px 32px;
  line-height: 1.5;
  text-align: right;
`;

const CardTake = styled.div`
  width: 42%;
  padding: 34px;
  box-shadow: 0 10px 20px #cccccc;
  border-left: 10px solid #c6c6c6;
  border-radius: 5px;
  color: #353535;
  background: #fff;
`;

const HeadingBig = styled.h3`
  margin-bottom: 34px;
`;

const dayNr = 1;
const weekday = 'Wtorek';
const date = '03.09.2019';


const Day = ({ city, dailySummary, tempDay, tempNight, clouds, humidity, rainSnow, windSpeed, icon}) => (
  <StyledWrapper>
    <CardWeather>
      <CardHeader>
        <DateGroup>
          <div>Dzień {dayNr}</div>
          <div>{weekday} {date}</div>
        </DateGroup>
        {console.log(city)}
        <IconGroup>
          <div>
            <City>{city}</City>
            <Temp>{tempDay}</Temp>
          </div>
          <StyledBigIcon />
        </IconGroup>
          <Description>{dailySummary}</Description>
      </CardHeader>
      <div>
        <Table>
          <tbody>
            <TableRow>
              <CellLeft>Temperatura w dzień</CellLeft>
              <CellRight>{tempDay}</CellRight>
            </TableRow>
            <TableRow>
              <CellLeft>Temperatura w nocy</CellLeft>
              <CellRight>{tempNight}</CellRight>
            </TableRow>
            <TableRow>
              <CellLeft>Zachmurzenie</CellLeft>
              <CellRight>{clouds}</CellRight>
            </TableRow>
            <TableRow>
              <CellLeft>Wilgotność</CellLeft>
              <CellRight>{humidity}</CellRight>
            </TableRow>
            <TableRow>
              <CellLeft>Szansa opadów</CellLeft>
              <CellRight>{rainSnow}</CellRight>
            </TableRow>
            <TableRow>
              <CellLeft>Prędkość wiatru</CellLeft>
              <CellRight>{windSpeed}</CellRight>
            </TableRow>
          </tbody>
        </Table>
      </div>
    </CardWeather>
    <CardTake>
      <HeadingBig>Zabierz: </HeadingBig>
      <ListTake />
    </CardTake>
  </StyledWrapper>
);

export default Day;