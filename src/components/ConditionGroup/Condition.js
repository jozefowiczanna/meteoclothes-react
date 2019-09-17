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
import arrowupYellow from 'assets/icons/weather/colored/arrowup-yellow.svg';
import rainCon from 'assets/icons/weather/colored/rain-con.svg';
import windCon from 'assets/icons/weather/colored/wind-con.svg';
import thermometer25 from 'assets/icons/weather/colored/thermometer-25.svg';
import thermometer50 from 'assets/icons/weather/colored/thermometer-50.svg';
import thermometer75 from 'assets/icons/weather/colored/thermometer-75.svg';

const svgPaths = {
  arrowdownBlue,
  arrowupBlue,
  arrowupGray,
  arrowupYellow,
  rainCon,
  windCon,
  thermometer25,
  thermometer50,
  thermometer75,
}

const StyledSection = styled.section`
  background-color: ${({theme, colorSet}) => theme[colorSet]['bg']};
  padding: 80px 20px 110px;

  @media (max-width: 600px) {
    padding: 40px 10px 70px;
  }
`;

const StyledWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 15px;
  font-family: 'Lato';
  font-weight: 700;
  font-size: 40px;
  color: ${({theme, colorSet}) => theme[colorSet]['text']};

  @media (max-width: 600px) {
    font-size: 30px;
    display: block;
  }
`;

const StyledIconsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCard = styled.div`
  background-color: ${({theme, colorSet}) => theme[colorSet]['bgLight']};
  box-shadow: ${({theme, colorSet}) => theme[colorSet]['box']};
  border: 5px solid ${({theme, colorSet}) => theme[colorSet]['border']};
  border-radius: 5px;
`;

const StyledCardHeader = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  padding: 30px 30px 15px;
`;

const BottomWrapper = styled.div`
  padding-bottom: 30px;
`;

const InputWrapper = styled.div`
  padding: 30px 30px 0;
  display: flex;
  align-items: center;
`;

const StyledLabel = styled.div`
	display: inline-block;
	flex-shrink: 0;
`;

const StyledAddButton = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  width: auto;
  height: auto;
  font-size: 30px;
  color: #808080;
  transition: color 0.2s;

  &:hover {
    color: #63b50b;
  }
`;

const StyledFieldError = styled.div`
  font-weight: 600;
  margin-top: 20px;
  padding: 0 30px;
  color: red;
  font-size: 0.9em;
`;

class Condition extends Component {
  state = {
    isValid: true,
  }

  inputRef = React.createRef();

  checkIfValid = (e) => {
    this.setState({ isValid: e.target.checkValidity()})
  }

  render() {

    const { nr, name, descriptions, icons, unit, inputGroup, colorSet, toggleModal, range, addItem } = this.props;
    const { isValid } = this.state;
    const val = range[inputGroup];
    const val2 = range["tempmax"];

    
    return (
      <StyledSection colorSet={colorSet}>
        <StyledWrapper>
          <StyledHeader colorSet={colorSet}>
            <div>{name}</div>
            <StyledIconsWrapper>
              <Icon icon={svgPaths[icons[0]]} />
              <span>
                {range[inputGroup]}{unit}
                {descriptions[1] &&
                  `-${val2}°C`
                }
              </span>
              {icons[1] && <Icon secondary icon={svgPaths[icons[1]]} />}
            </StyledIconsWrapper>
          </StyledHeader>
    
          <StyledCard colorSet={colorSet}>
            <StyledCardHeader>
              <div>
                {`${descriptions[0]} ${val}${unit}`}
                {nr === 2 && ` ${descriptions[1]} ${val2}${unit}`}
              </div>
              <EditIcon onClick={() => toggleModal("isFormModalOpen")} alt="edytuj warunki" />
            </StyledCardHeader>
    
            <div>
              <List category={name} colorSet={colorSet}/>
              <BottomWrapper>
                <InputWrapper>
                  <StyledLabel htmlFor="select-clothes">
                    Dodaj własne:
                  </StyledLabel>
                    <Input
                      type="text"
                      maxLength="50"
                      ref={this.inputRef}
                      pattern="^[0-9A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ][0-9A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ,\-\s]*$"
                      onChange={(e) => this.checkIfValid(e)}
                    />
                    <StyledAddButton
                      onClick={() => {
                        const val = this.inputRef.current.value;
                        isValid && (val.length > 0) &&
                        addItem(name, val);
                      }}
                      type="button"
                    >
                      <i className="fas fa-plus-square"></i>
                    </StyledAddButton>
                </InputWrapper>
                {!isValid && 
                  <StyledFieldError>Dopuszczalne wartości: maksymalnie 50 znaków, w tym cyfry, litery, znaki spacji, myślnika i przecinka</StyledFieldError>
                }
              </BottomWrapper>
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