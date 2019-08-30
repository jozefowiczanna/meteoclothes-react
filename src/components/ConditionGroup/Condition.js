import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '../List/List';
import Inputs from '../Inputs/Inputs';
import Icon from 'components/Icon/Icon';
import editIcon from 'assets/icons/edit.svg';
import styled from 'styled-components';
import { toggleModal as toggleModalAction } from 'actions';

import arrowdownBlue from 'assets/icons/weather/colored/arrowdown-blue.svg';
import arrowupBlue from 'assets/icons/weather/colored/arrowup-blue.svg';
import arrowupGray from 'assets/icons/weather/colored/arrowup-gray.svg';
import arrowupGreen from 'assets/icons/weather/colored/arrowup-green.svg';
import cloudDrizzle from 'assets/icons/weather/colored/cloud-drizzle.svg';
import cloudLightning from 'assets/icons/weather/colored/cloud-lightning.svg';
import cloudMoon from 'assets/icons/weather/colored/cloud-moon.svg';
import cloudRain from 'assets/icons/weather/colored/cloud-rain.svg';
import cloudSnow from 'assets/icons/weather/colored/cloud-snow.svg';
import cloud from 'assets/icons/weather/colored/cloud.svg';
import cloudsSun from 'assets/icons/weather/colored/clouds-sun.svg';
import fog from 'assets/icons/weather/colored/fog.svg';
import moon50 from 'assets/icons/weather/colored/moon-50.svg';
import rainCon from 'assets/icons/weather/colored/rain-con.svg';
import rain from 'assets/icons/weather/colored/rain.svg';
import sun from 'assets/icons/weather/colored/sun.svg';
import thermometer25 from 'assets/icons/weather/colored/thermometer-25.svg';
import thermometer50 from 'assets/icons/weather/colored/thermometer-50.svg';
import thermometer75 from 'assets/icons/weather/colored/thermometer-75.svg';
import tornado from 'assets/icons/weather/colored/tornado.svg';
import windCon from 'assets/icons/weather/colored/wind-con.svg';
import windGray from 'assets/icons/weather/colored/wind-gray.svg';

const svgPaths = {
  arrowdownBlue,
  arrowupBlue,
  arrowupGray,
  arrowupGreen,
  cloudDrizzle,
  cloudLightning,
  cloudMoon,
  cloudRain,
  cloudSnow,
  cloud,
  cloudsSun,
  fog,
  moon50,
  rainCon,
  rain,
  sun,
  thermometer25,
  thermometer50,
  thermometer75,
  tornado,
  windCon,
  windGray,
}

console.log(svgPaths['cloudSnow']);

const StyledDescription = styled.div`

`;

const StyledEditIcon = styled.button`
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-image: url(${editIcon});
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 60% 60%;
  border: 2px solid #808080;
  margin-left: auto;
  outline: none;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.2s all;

  &:hover {
    opacity: 1;
  }
`;

class Condition extends Component {
  state = {
    value: "1"
  }

  render() {

    const { nr, name, descriptions, icons, unit, inputGroup, toggleModal, range } = this.props;
    const val = range[inputGroup];
    const val2 = range["tempmax"];
    
    return (
      <section className="con" id={`section-con-${nr}`}>
        <div className="wrapper">
          <div className="con-header">
            <div>{name}</div>
            <div className="icons-group">
              <Icon icon={svgPaths[icons[0]]} />
              <span>
                {range[inputGroup]}°C
                {descriptions[1] &&
                  `-${val2}°C`
                }
              </span>
              <Icon secondary icon={svgPaths[icons[1]]} />
            </div>
          </div>
    
          <div className="card js-con">
            <div className="card-header">
              <StyledDescription>
                {`${descriptions[0]} ${val} ${unit}`}
                {nr === 2 && ` ${descriptions[1]} ${val2} ${unit}`}
              </StyledDescription>
              <StyledEditIcon onClick={() => toggleModal("isFormModalOpen")} src={editIcon} alt="edytuj warunki" />
            </div>
    
            <div className="card-body">
              <List category={name} />
              <Inputs category={name} />
            </div>
          </div>
    
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({range}) => ({range});

const mapDispatchToProps = dispatch => ({
  toggleModal: whichModal => dispatch(toggleModalAction(whichModal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Condition);