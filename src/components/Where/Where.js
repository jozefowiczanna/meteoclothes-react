import React from "react";
import styled from 'styled-components';
import Input from 'components/Input/Input';
import Option from 'components/Option/Option';
import citiesGeo from 'data/citiesGeo';

const StyledSection = styled.section`
  display: flex;
  height: 90vh;
`;

const StyledWrapper = styled.section`
  margin: auto;
  max-width: 650px;
`;

const Where = () => (
  <StyledSection id="where">
    <StyledWrapper>
      <h2>Dokąd pojedziesz?</h2>
      <p>Jeśli spersonalizowałeś listę ubrań, pozostaje Ci tylko wybranie celu podróży. Liczba miast jest na razie ograniczona, głównie do stolic państw europejskich.</p>
      <div className="boxround boxround-where">
        <label className="boxround-select-label" htmlFor="select-city">
          Wybierz miasto:
        </label>
        <Input as="select"
          className="select boxround-select"
          name="select-city"
          id="select-city"
        >
          {
            citiesGeo.map(item => {
              return (
                <Option {...item} key={item.value} />
              )
            })
          }
        </Input>
      </div>
    </StyledWrapper>
  </StyledSection>
);

export default Where;
