import styled, { css } from 'styled-components';

import clearday from 'assets/icons/weather/colored/clearday.svg';
import clearnight from 'assets/icons/weather/colored/clearnight.svg';
import cloudy from 'assets/icons/weather/colored/cloudy.svg';
import fog from 'assets/icons/weather/colored/fog.svg';
import partlycloudyday from 'assets/icons/weather/colored/partlycloudyday.svg';
import partlycloudynight from 'assets/icons/weather/colored/partlycloudynight.svg';
import rain from 'assets/icons/weather/colored/rain.svg';
import sleet from 'assets/icons/weather/colored/sleet.svg';
import snow from 'assets/icons/weather/colored/snow.svg';
import thunderstorm from 'assets/icons/weather/colored/thunderstorm.svg';
import tornado from 'assets/icons/weather/colored/tornado.svg';
import wind from 'assets/icons/weather/colored/wind.svg';

const svgPaths = {
  clearday,
  clearnight,
  cloudy,
  fog,
  partlycloudyday,
  partlycloudynight,
  rain,
  sleet,
  snow,
  thunderstorm,
  tornado,
  wind,
};

const Icon = styled.div`
  display: block;
  width: 40px;
  height: 40px;
  background-image: url(${({icon}) => (svgPaths[icon])});
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: ${({ secondary }) => secondary ? '85% 85%' : '100% 100%' };

  ${({big}) => 
    big && css`
      width: 68px;
      height: 68px;
    `
  }
`;

export default Icon;