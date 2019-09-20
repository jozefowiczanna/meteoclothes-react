import React from 'react';
import styled from 'styled-components';
import Heading from 'components/Heading/Heading';
import { Link } from 'react-router-dom';

const StyledSection = styled.section`
  display: flex;
  height: 100vh;
  padding: 20px;
`;

const StyledWrapper = styled.section`
  margin: auto;
  max-width: 650px;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 30px 0 20px;
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

const How = () => (
    <StyledSection id="how">
      <StyledWrapper>
          <div>
            <Heading>Jak to działa?</Heading>
            <p>Do dyspozycji masz pięć warunków atmosferycznych, których zakres wartości możesz zmieniać według własnego uznania. Pierwsze trzy dotyczą temperatury, czwarty prędkości wiatru, piąty szansy opadów w procentach.</p>
            <p>Do każdego warunku możesz dodać listę ubrań, które chcesz założyć jeśli dany warunek zostanie spełniony.</p>
            <p>Gdy ustalisz i spersonalizujesz listy ubrań, pozostanie Ci wybranie celu podróży.</p>
            <p>Po kliknięciu "sprawdź prognozę" pojawi się 8-dniowa prognoza wraz z listą ubrań, które spełniają określone warunki.</p>
            <p>Jeśli chcesz zapisać ustawienia w pamięci przeglądarki lub zresetować je do wartości domyślnych, wybierz z menu opcję Zapisz/resetuj</p>
          </div>
          <StyledButtonWrapper>
            <StyledLink to="/meteoszafa-react/conditions">Ustal warunki</StyledLink>
          </StyledButtonWrapper>
      </StyledWrapper>
    </StyledSection>
);

export default How;