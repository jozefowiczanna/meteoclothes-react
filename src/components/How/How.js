import React from 'react';
import styled from 'styled-components';
import Heading from 'components/Heading/Heading';

const StyledSection = styled.section`
  display: flex;
  height: 100vh;
`;

const StyledWrapper = styled.section`
  margin: auto;
  max-width: 650px;
`;

const How = () => (
    <StyledSection id="how">
      <StyledWrapper>
          <Heading>Jak to działa?</Heading>
          <p>Do dyspozycji masz pięć warunków, których zakres wartości możesz zmieniać według własnego uznania. Pierwsze trzy dotyczą temperatury, czwarty prędkości wiatru, piąty szansy opadów w procentach.</p>
          <p>Do każdego warunku możesz dodać listę ubrań, które chcesz założyć jeśli dany warunek zostanie spełniony.</p>
          <p>Gdy ustalisz i spersonalizujesz listy ubrań, pozostanie Ci wybranie celu podróży. Liczba miast jest na razie ograniczona, głównie do stolic państw europejskich.</p>
          <p>Po kliknięciu "sprawdź prognozę" pojawi się 8-dniowa prognoza wraz z listą ubrań, które spełniają określone warunki.</p>
      </StyledWrapper>
    </StyledSection>
);

export default How;