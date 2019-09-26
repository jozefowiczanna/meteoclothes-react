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
            <Heading>How does it work?</Heading>
            <p>You have five weather conditions at your disposal, the range of which you can change as you like. The first three conditions apply to the temperature, and the next two to wind speed and probability of precipitation.</p>
            <p>For each condition, you can add a list of clothes that you want to wear if the condition is met.</p>
            <p>Once you set up and personalize your clothes list, you'll have to choose your destination.</p>
            <p>After clicking "check forecast" an 8-day forecast will appear with a list of clothes that meet certain conditions.</p>
            <p>If you want to save the settings in the browser's memory or reset them to their default values, select the Save / reset option from the menu.</p>
          </div>
          <StyledButtonWrapper>
            <StyledLink to="/meteoszafa-react/conditions">Set conditions</StyledLink>
          </StyledButtonWrapper>
      </StyledWrapper>
    </StyledSection>
);

export default How;