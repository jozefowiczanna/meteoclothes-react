import React from 'react';
import styled from 'styled-components';
import logoPng from '../../assets/images/logo_rain.png';
import Logo from 'components/Logo/Logo';
import { Link } from 'react-router-dom';

const StyledSection = styled.section`
  padding: 3rem 1rem 2rem;
  max-width: 1000px;
  margin: auto;

  @media (min-width: 450px) {
    padding: 3rem 2rem 2rem;
  }

  @media (min-width: 700px) {
    padding: 4rem 2rem;
  }

  @media (min-width: 850px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
  }
`;

const StyledOuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeading = styled.h1`
	text-align: center;
	font-size: 2rem;
	color: #27AAE2;
  margin-bottom: 20px;

  @media screen and (min-width: 400px) {
    font-size: 3rem;
  }

  @media screen and (min-width: 700px) {
    font-size: 3.5rem;
  }
  
  span {
    display: block;
    font-weight: 500;
    margin: 0;
    font-size: 0.53em;
    color: black;
  }
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  cursor: pointer;
  border-radius: 30px;
  padding: 10px 30px;
  transition: 0.3s;
  text-decoration: none;
  font-size: 0.9rem;

  border: 2px solid #27aae2;
  background-color: #27aae2;
  &:hover {
    background: transparent;
    color: #27aae2;
  }

  &:active {
    transform: scale(0.9);
  }
`;

const StyledLogoMobile = styled(Logo)`
  width: 100%;
  height: auto;
  margin: 0 2rem 1rem;
  display: block;

  @media (min-width: 500px) {
    width: 80%;
  }

  @media (min-width: 700px) {
    width: 60%;
  }

  @media (min-width: 850px) {
    display: none;
  }
`;

const About = () => (
  <StyledOuterWrapper>
    <StyledSection id="about">
        <StyledWrapper>
            <StyledHeading>
              METEOSZAFA
              <span>dopasuj ubrania do pogody</span>
            </StyledHeading>
            <StyledLogoMobile src={logoPng} alt="Meteoszafa logo" />
              <div>
                <p>Pewnie znasz ten scenariusz: Planujesz wyjazd i ogarnia cię niechęć na myśl, że musisz się spakować. Jaka będzie pogoda? Upał? Deszcz? A może silny wiatr? Musisz sprawdzić prognozę pogody, a potem zastanowić się co zabrać...</p>
                <p>A co jeśli mógłbyś zrobić taką listę tylko raz i więcej nie zawracać sobie głowy? Określasz co lubisz nosić w zależności od warunków atmosferycznych i zapisujesz swoje preferencje. Następnie wybierasz cel podróży i otrzymujesz prognozę wraz z listą ubrań, które powinieneś zabrać.</p>
              </div>
            <StyledLink to="/meteoszafa-react/how">Zaczynaj</StyledLink>
        </StyledWrapper>
      <Logo src={logoPng} alt="Meteoszafa logo" />
    </StyledSection>
  </StyledOuterWrapper>
);

export default About;