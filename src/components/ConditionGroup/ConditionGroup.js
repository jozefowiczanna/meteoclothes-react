import React from "react";
import { conditionsStaticData } from "../../data/conditionsStaticData";
import Condition from "./Condition";
import styled from "styled-components";

const StyledSection = styled.div`
  position: relative;
`;

class ConditionGroup extends React.Component {

  render() {
    return (
      <StyledSection>
        {conditionsStaticData.map(item => (
          <Condition
            {...item}
            key={`condition-${item.nr}`}
          />
        ))}
      </StyledSection>
    );
  }
}

export default ConditionGroup;
