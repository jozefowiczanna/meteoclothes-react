import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ListTake from 'components/ListTake/ListTake';
import Icon from 'components/Icon/Icon';

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
  border-left: 10px solid ${({ theme }) => theme["blue1"]};
  /* border-left: 10px solid #c6c6c6;   */
  border-radius: 5px;
  color: #353535;
  background: #fff;
`;

const HeadingBig = styled.h3`
  margin-bottom: 34px;
`;

function getDate(dayNr) {
	function leadingZero(nr){
		nr = nr + "";
		const output = (nr.length === 1) ? "0" + nr : nr;
		return output;
	}
	const weekdays = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
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
  checkCondition(range, tempDay) {
    if (tempDay < parseInt(range["temp-min"])) {
      console.log("zimno")
    } else {
      console.log("ciepło")
    }
  }

  componentDidUpdate() {
    this.checkCondition(this.props.range, this.props.tempDay)
  }

  
  render() {
    
    const { city, dailySummary, tempDay, tempNight, clouds, humidity, rainSnow, windSpeed, dayNr, icon, range, clothes } = this.props;
    
    console.log(range)
    
    return (
      <StyledWrapper>
        <CardWeather>
          <CardHeader>
            <DateGroup>
              <div>Dzień {dayNr+1}</div>
              <div>{getDate(dayNr)}</div>
            </DateGroup>
            <IconGroup>
              <div>
                <City>{city}{(range, tempDay) => this.checkCondition(range, tempDay)}</City>
                <Temp>{tempDay}°C</Temp>
              </div>
              <Icon icon={icon} big />
            </IconGroup>
              <Description>{dailySummary}</Description>
          </CardHeader>
          <div>
            <Table>
              <tbody>
                <TableRow>
                  <CellLeft>Temperatura w dzień</CellLeft>
                  <CellRight>{tempDay}°C</CellRight>
                </TableRow>
                <TableRow>
                  <CellLeft>Temperatura w nocy</CellLeft>
                  <CellRight>{tempNight}°C</CellRight>
                </TableRow>
                <TableRow>
                  <CellLeft>Zachmurzenie</CellLeft>
                  <CellRight>{clouds}%</CellRight>
                </TableRow>
                <TableRow>
                  <CellLeft>Wilgotność</CellLeft>
                  <CellRight>{humidity}%</CellRight>
                </TableRow>
                <TableRow>
                  <CellLeft>Szansa opadów</CellLeft>
                  <CellRight>{rainSnow}%</CellRight>
                </TableRow>
                <TableRow>
                  <CellLeft>Prędkość wiatru</CellLeft>
                  <CellRight>{windSpeed} {'km/h'}</CellRight>
                </TableRow>
              </tbody>
            </Table>
          </div>
        </CardWeather>
        <CardTake>
          <HeadingBig>Zabierz: </HeadingBig>
          {
            (tempDay < range["tempmin"]*1) &&
            <ListTake
              clothes={clothes["Zimno"]}
              description={`Temperatura poniżej ${range["tempmin"]}°C`}
            />
          }
          {
            (tempDay >= range["tempmin"]) && (tempDay <= range["tempmax"]) &&
            <ListTake
              clothes={clothes["Umiarkowanie"]}
              description={`Temperatura od ${range["tempmin"]}°C do ${range["tempmax"]}°C`}
            />
          }
          {
            (tempDay > range["tempmax"]) &&
            <ListTake
              clothes={clothes["Ciepło"]}
              description={`Temperatura powyżej ${range["tempmax"]}°C`}
            />
          }
          {
            (rainSnow > range["rainmin"]) &&
            <ListTake
              clothes={clothes["Deszcz"]}
              description={`Szansa opadów powyżej ${range["windmin"]}%`}
            />
          }
          {
            (windSpeed > range["windmin"]) &&
            <ListTake
              clothes={clothes["Wiatr"]}
              description={`Wiatr o prędkości powyżej ${range["windmin"]} km/h`}
            />
          }
        </CardTake>
      </StyledWrapper>
    )
  }
};

const mapStateToProps = ({ range, clothes }) => ({ range, clothes });

export default connect(mapStateToProps)(Day);