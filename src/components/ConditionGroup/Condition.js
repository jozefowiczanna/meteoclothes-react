import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '../List/List';
// import Inputs from '../Inputs/Inputs';
import Icon from 'components/Icon/Icon';
import EditIcon from 'components/EditIcon/EditIcon';
import styled from 'styled-components';
import Input from 'components/Input/Input';
import { toggleModal as toggleModalAction } from 'actions';
import { addItem as addItemAction } from 'actions';

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

const StyledWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const InputWrapper = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
`;

const StyledLabel = styled.div`
	display: inline-block;
	flex-shrink: 0;
`;

class Condition extends Component {
  state = {
    value: "1"
  }

  inputRef = React.createRef();

  render() {

    const { nr, name, descriptions, icons, unit, inputGroup, toggleModal, range, category, addItem } = this.props;
    const val = range[inputGroup];
    const val2 = range["tempmax"];

    
    return (
      <section className="con" id={`section-con-${nr}`}>
        <StyledWrapper>
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
              {icons[1] && <Icon secondary icon={svgPaths[icons[1]]} />}
            </div>
          </div>
    
          <div className="card js-con">
            <div className="card-header">
              <div>
                {`${descriptions[0]} ${val} ${unit}`}
                {nr === 2 && ` ${descriptions[1]} ${val2} ${unit}`}
              </div>
              <EditIcon onClick={() => toggleModal("isFormModalOpen")} alt="edytuj warunki" />
            </div>
    
            <div className="card-body">
              <List category={name} />
              <InputWrapper>
                <StyledLabel htmlFor="select-clothes">
                  Dodaj własne:
                </StyledLabel>
                  <Input
                    type="text"
                    maxLength="50"
                    ref={this.inputRef}
                    pattern="^[0-9A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ][0-9A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ,\-\s]*$"
                    data-error="Dopuszczalne wartości: maksymalnie 50 znaków, w tym cyfry, litery, znaki spacji, myślnika i przecinka"
                  />
                  <button
                    onClick={() => {
                      addItem(name, this.inputRef.current.value);
                    }}
                    type="button"
                    className="add-btn js-add-btn-input"
                  >
                    <i className="fas fa-plus-square"></i>
                  </button>
              </InputWrapper>
            </div>
          </div>
    
        </StyledWrapper>
      </section>
    );
  }
}

const mapStateToProps = ({range}) => ({range});

const mapDispatchToProps = dispatch => ({
  toggleModal: whichModal => dispatch(toggleModalAction(whichModal)),
  addItem: (category, item) => dispatch(addItemAction(category, item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Condition);