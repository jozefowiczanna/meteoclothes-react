import React from "react";
import { conditionsStaticData } from "../../data/conditionsStaticData";
import Condition from "./Condition";
import styled from "styled-components";
import { Link } from 'react-router-dom';


const StyledSection = styled.div`
  position: relative;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-bottom: 30px;
  background: #79B8D2;
`;

const StyledLink = styled(Link)`
  border: none;
  background: none;
  background-color: #444444;
  color: #ffffff;
  cursor: pointer;
  border-radius: 30px;
  outline: none;
  padding: 10px 30px;
  transition: 0.3s;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    background: #656565;
  }

  &:active {
    transform: scale(0.9);
  }
`;

class ConditionGroup extends React.Component {

  render() {
    return (
      <>
        <StyledSection>
          {conditionsStaticData.map(item => (
            <Condition
              {...item}
              key={`condition-${item.nr}`}
            />
          ))}
        </StyledSection>
        <StyledButtonWrapper>
          <StyledLink to="/meteoszafa-react/forecast">Choose destination</StyledLink>
        </StyledButtonWrapper>
      </>
    );
  }
}

export default ConditionGroup;
