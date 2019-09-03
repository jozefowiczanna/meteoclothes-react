import React from "react";
import Input from "components/Input/Input";
import Option from "components/Option/Option";
import Heading from "components/Heading/Heading";
import Button from "components/Button/Button";
import citiesGeo from "data/citiesGeo";
import styled from "styled-components";

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 32px;
  align-items: baseline;
  border: 5px solid #e3e3e3;
  border-radius: 5px;
  box-shadow: 0 10px 20px #b3b3b3;
  margin: 40px 0 70px;
  width: 100%;
  max-width: 700px;
`;

const StyledHeading = styled(Heading)`
  align-self: flex-start;
`;

const StyledInput = styled(Input)`
  max-width: 500px;
`;

const StyledLabel = styled.label`
  flex-shrink: 0;
`;

const Where = () => (
  <StyledWrapper id="where">
    <StyledHeading>Dokąd pojedziesz?</StyledHeading>
    <p>
      Jeśli spersonalizowałeś listę ubrań, pozostaje Ci tylko wybranie celu
      podróży. Liczba miast jest na razie ograniczona, głównie do stolic państw
      europejskich.
    </p>
    <StyledBox>
      <StyledLabel htmlFor="select-city">Wybierz miasto:</StyledLabel>
      <StyledInput as="select" name="select-city" id="select-city">
        {citiesGeo.map(item => {
          return <Option {...item} key={item.value} />;
        })}
      </StyledInput>
    </StyledBox>
    <Button data-target="#forecast">Sprawdź prognozę</Button>
  </StyledWrapper>
);

export default Where;
