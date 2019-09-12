import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '../List/List';
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
import rainCon from 'assets/icons/weather/colored/rain-con.svg';
import windCon from 'assets/icons/weather/colored/wind-con.svg';
import thermometer25 from 'assets/icons/weather/colored/thermometer-25.svg';
import thermometer50 from 'assets/icons/weather/colored/thermometer-50.svg';
import thermometer75 from 'assets/icons/weather/colored/thermometer-75.svg';

const svgPaths = {
  arrowdownBlue,
  arrowupBlue,
  arrowupGray,
  arrowupGreen,
  rainCon,
  windCon,
  thermometer25,
  thermometer50,
  thermometer75,
}

const StyledSection = styled.section`
  background-color: ${({theme, colorSet}) => theme[colorSet]['bg']};
  padding: 5rem 0 7rem;
`;

const StyledWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin-bottom: 1.5rem;
  font-family: 'Lato';
  font-weight: 700;
  font-size: 2.5rem;
  color: ${({theme, colorSet}) => theme[colorSet]['text']};
`;

const StyledCard = styled.div`
  background-color: ${({theme, colorSet}) => theme[colorSet]['bgLight']};
  box-shadow: ${({theme, colorSet}) => theme[colorSet]['box']};
  border: 5px solid ${({theme, colorSet}) => theme[colorSet]['border']};
  border-radius: 5px;
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

    const { nr, name, descriptions, icons, unit, inputGroup, colorSet, toggleModal, range, addItem } = this.props;
    const val = range[inputGroup];
    const val2 = range["tempmax"];

    
    return (
      <StyledSection colorSet={colorSet}>
        <StyledWrapper>
          <StyledHeader colorSet={colorSet}>
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
          </StyledHeader>
    
          <StyledCard colorSet={colorSet}>
            <div className="card-header">
              <div>
                {`${descriptions[0]} ${val} ${unit}`}
                {nr === 2 && ` ${descriptions[1]} ${val2} ${unit}`}
              </div>
              <EditIcon onClick={() => toggleModal("isFormModalOpen")} alt="edytuj warunki" />
            </div>
    
            <div className="card-body">
              <List category={name} colorSet={colorSet}/>
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
          </StyledCard>
    
        </StyledWrapper>
      </StyledSection>
    );
  }
}

const mapStateToProps = ({range}) => ({range});

const mapDispatchToProps = dispatch => ({
  toggleModal: whichModal => dispatch(toggleModalAction(whichModal)),
  addItem: (category, item) => dispatch(addItemAction(category, item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Condition);